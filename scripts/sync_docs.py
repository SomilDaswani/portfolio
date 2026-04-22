import os
import json
import requests
from groq import Groq

# ── Env vars injected by GitHub Actions ─────────────────────────────────────
GITHUB_TOKEN = os.environ['GITHUB_TOKEN']
GROQ_API_KEY  = os.environ['GROQ_API_KEY']
PR_NUMBER     = os.environ['PR_NUMBER']
REPO          = os.environ['GITHUB_REPOSITORY']  # format: "username/repo-name"

# ── Path to your docs inside this repo ──────────────────────────────────────
DOCS_DIR = 'my-docs/docs'

client = Groq(api_key=GROQ_API_KEY)


def get_pr_diff():
    """
    Fetches the raw unified diff of the merged PR.
    The Accept header tells GitHub to return a .diff format, not JSON.
    """
    headers = {
        'Authorization': f'token {GITHUB_TOKEN}',
        'Accept': 'application/vnd.github.v3.diff'
    }
    url = f'https://api.github.com/repos/{REPO}/pulls/{PR_NUMBER}'
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.text


def get_pr_details():
    """
    Fetches PR metadata — title and description.
    These are passed to the AI so it understands intent, not just raw code changes.
    """
    headers = {'Authorization': f'token {GITHUB_TOKEN}'}
    url = f'https://api.github.com/repos/{REPO}/pulls/{PR_NUMBER}'
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    return response.json()


def get_existing_docs():
    """
    Reads every .md and .mdx file from my-docs/docs/ into a dict.
    Key = file path, Value = file content.
    These are passed to the AI so it knows what docs already exist.
    """
    docs = {}
    for root, _, files in os.walk(DOCS_DIR):
        for file in files:
            if file.endswith(('.md', '.mdx')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    docs[filepath] = f.read()
    return docs


def analyze_and_update_docs(diff, pr_details, existing_docs):
    """
    Sends the diff + PR info + existing docs to Groq (Llama3 70B).
    Instructs it to return ONLY a JSON object describing which files to update.
    Truncates inputs to avoid hitting the model's context limit.
    """
    docs_content = "\n\n---\n\n".join(
        [f"FILE: {path}\n{content}" for path, content in existing_docs.items()]
    )

    prompt = f"""You are a technical documentation engineer. A major pull request was just merged.

PR Title: {pr_details['title']}
PR Description: {pr_details.get('body') or 'No description provided'}

Code Changes (diff):
{diff[:6000]}

Current Documentation:
{docs_content[:4000]}

Your job:
1. Analyze what the code diff changes — new functions, modified behavior, removed features, config changes, etc.
2. Cross-reference with the existing documentation.
3. Identify exactly which doc files need updating and how.

Return ONLY a valid JSON object. No markdown fences. No explanation outside the JSON.

Required format:
{{
  "files_to_update": [
    {{
      "path": "my-docs/docs/filename.md",
      "updated_content": "the complete updated markdown content of this file",
      "reason": "one sentence — what changed in the code that made this update necessary"
    }}
  ],
  "summary": "one paragraph describing all documentation changes made and why"
}}

Rules:
- Only include files that actually need changes based on the diff.
- Do not invent new sections unrelated to the PR.
- Preserve existing doc structure — only modify what the diff affects.
- If no docs need updating, return: {{"files_to_update": [], "summary": "No documentation changes required."}}"""

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content


def apply_updates(updates_raw):
    """
    Parses the JSON from Groq and writes updated content to disk.
    Strips markdown fences in case the model wraps the JSON anyway.
    Creates any missing subdirectories automatically.
    """
    clean = updates_raw.strip()
    # Strip fences if model ignores instructions
    if clean.startswith("```"):
        clean = clean.split("\n", 1)[1]  # remove opening fence line
    if clean.endswith("```"):
        clean = clean.rsplit("```", 1)[0]  # remove closing fence
    clean = clean.strip()

    updates = json.loads(clean)

    if not updates.get('files_to_update'):
        print("[INFO] No documentation updates needed for this PR.")
        return

    for file_update in updates['files_to_update']:
        path    = file_update['path']
        content = file_update['updated_content']
        reason  = file_update['reason']

        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[UPDATED] {path}")
        print(f"  Reason: {reason}")

    print(f"\n[SUMMARY] {updates.get('summary', 'No summary provided.')}")


if __name__ == '__main__':
    print(f"── Doc Sync Starting ──────────────────────────────")
    print(f"Repo    : {REPO}")
    print(f"PR      : #{PR_NUMBER}")

    diff        = get_pr_diff()
    pr_details  = get_pr_details()
    existing_docs = get_existing_docs()

    print(f"Docs found: {len(existing_docs)} file(s) in {DOCS_DIR}")

    if not existing_docs:
        print(f"[EXIT] No .md files found in {DOCS_DIR}. Nothing to update.")
        exit(0)

    print("Sending to Groq for analysis...")
    updates_raw = analyze_and_update_docs(diff, pr_details, existing_docs)

    print("Applying updates...")
    apply_updates(updates_raw)

    print("── Doc Sync Complete ───────────────────────────────")