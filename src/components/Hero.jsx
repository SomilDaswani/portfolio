import React from "react";
import "./Hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faReact,
  faNodeJs,
  faWordpress,
  faBootstrap,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

const Hero = (props) => {
  return (
    <>
      <div className="spacer"></div>
      <center>
        <div
          className="hero-section"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <center>
            <h1 className="hero-title"></h1>
          </center>
          <h2 className="job-title">Jason Cole</h2>
          <br />
          <p className="job-description">
            A motivated Computer Science professional with a Masters in
            Interactive Multimedia and extensive experience in web development
            and digital marketing. Skilled in creating user-friendly
            applications and executing effective digital strategies, I have a
            strong interest in data structures and algorithmic problem-solving.
            I am looking to leverage my technical expertise and innovative
            mindset to contribute meaningfully to a forward-thinking
            organization.
          </p>

          <br />
          {/* <div className="icon-list">
            <span className="icon-item">
              <a
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                href="https://www.linkedin.com/in/sannanumer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </span>
            <span className="icon-item">
              <a
                style={{ color: props.mode === "dark" ? "white" : "black" }}
                href="https://www.twitter.com/sannan_umer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </span>
          </div> */}

          <br></br>
          <p>---------------------------------------------</p>
          <div className="spacer"></div>
          <button
            className={`theme-button btn btn-outline-${props.textMode}`}
            onClick={props.handleMode}
          >
            {props.displayTextMode} Mode
          </button>

          <div className="spacer"></div>

          <div className="small-spacer"></div>

          <div className="row services">
            <div className="col-md-6">
              <div className="service-logo">
                <FontAwesomeIcon
                  icon={faReact}
                  size="5x"
                  style={{ color: "#11111" }}
                />
                <h4 className="service-head">React.JS</h4>
              </div>
              <div className="service-description">
                <p>
                  I use React.JS for building interactive user interfaces and
                  web applications quickly and efficiently with significantly
                  lesser code as compared to Vanilla.JS
                </p>
              </div>
            </div>
            <div className="small-spacer"></div>
            <div className="col-md-6">
              <div className="service-logo">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="5x"
                  style={{ color: "#11111" }}
                />
                <h4 className="service-head">Node.JS</h4>
              </div>
              <div className="service-description">
                <p>
                  I use Node.JS to create high performant server-side web
                  applications, and it is perfect for data-intensive
                  applications since it uses an asynchronous, event-driven
                  model.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer"></div>

          <div className="row services">
            <div className="col-md-6">
              <div className="service-logo">
                <FontAwesomeIcon
                  icon={faWordpress}
                  size="5x"
                  style={{ color: "#11111" }}
                />
                <h4 className="service-head">WordPress</h4>
              </div>
              <div className="service-description">
                <p>
                  I use WordPress to host and build websites. It contains plugin
                  architecture and a template system, so I can customize any
                  website to fit your business, blog, portfolio, or online
                  store.
                </p>
              </div>
            </div>
            <div className="small-spacer"></div>
            <div className="col-md-6">
              <div className="service-logo">
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="5x"
                  style={{ color: "#11111" }}
                />
                <h4 className="service-head">Bootstrap / Tailwind</h4>
              </div>
              <div className="service-description">
                <p>
                  I use Bootstrap/Tailwind to make responsive web design a
                  reality. It makes it possible for a web page or app to detect
                  the visitor's screen size and orientation and automatically
                  adapt the display accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="spacer"></div>

          <div className="services">
            {/* <div className="col-md-3"></div> */}
            {/* <div className="col-md-6"> */}
            <div className="service-logo">
              <FontAwesomeIcon
                icon={faJava}
                size="5x"
                style={{ color: "#11111" }}
              />
              <h4 className="service-head">Java / C / C++</h4>
            </div>
            <div className="service-description special">
              <p>
                I possess strong problem-solving skills, having solved over 100
                coding challenges on platforms such as LeetCode, HackerRank,
                GeeksforGeeks, and CodeChef. I have also participated in several
                competitive programming competitions hosted by companies like
                Google, Microsoft, and others, using Java and C++.
              </p>
            </div>
            {/* </div> */}
            {/* <div className="col-md-3"></div> */}
          </div>

          <div className="spacer"></div>

          <div className="skills">
            <h4>My Skills:</h4>
            <p>
              JavaScript, React.JS, Node.JS, Tailwind CSS, Bootstrap, SCSS, C++,
              Java, Competitive Programming, Creative Problem Solving,
              WordPress, Digital Marketing, SEO, Google Ads Manager, Microsoft
              Office, Git, Shopify, Jira, Meta Business Suite, Multimedia
              Design, User Experience (UX).
            </p>

            <div className="spacer"></div>
            <h4>Experience:</h4>
            <p>
              <b>Director of Business Development</b> | Pronto Live Marketing,
              Yuba City, CA (Hybrid)
            </p>
            <p>
              Leading business growth through strategic partnerships and market
              expansion, fostering long-term relationships, and aligning
              initiatives with market trends.
            </p>
            <p>
              <b>Web Presence Manager</b> | AJ Management INTL (Remote)
            </p>
            <p>
              Managing the digital presence of renowned singer Ahmed Jahanzeb,
              including website development, social media strategy, and online
              branding.
            </p>

            <p>
              <b>Junior Web Developer</b> | DiscoveriTech, Houston, TX
            </p>
            <p>
              Developing front-end web applications, optimizing page loading
              times, and building reusable code for scalable projects.
            </p>

            <div className="spacer"></div>
            <h4>Education:</h4>
            <p>
              <b>BSc Computer Science (Hons.)</b> | Multimedia University,
              Malaysia (Oct 2017 - Nov 2021)
            </p>
            <p>
              <b>MSc Interactive Multimedia</b> | University of Westminster, UK
              (Feb 2022 - Nov 2023)
            </p>

            <div className="spacer"></div>
            <h4>Honors & Awards:</h4>
            <p>
              <b>Top 1% Google CodeJam'21</b> (Google)
            </p>
            <p>
              <b>Runner-Up Speed Debugging ProCom'19</b> (Multimedia University,
              Cyberjaya Campus, Malaysia)
            </p>
            <p>
              <b>Winner ACM Freshmen Cup'17</b> (Multimedia University,
              Cyberjaya Campus, Malaysia)
            </p>
            <p>
              <b>Dean's Honor List</b> (Fall 2018)
            </p>

            <div className="spacer"></div>
            <h4>Certifications:</h4>
            <p>
              <b>Meta Social Media Marketing Professional Certificate</b>{" "}
              (Coursera, Mar 2021)
            </p>
            <p>
              <b>
                Google Digital Marketing & E-commerce Professional Certificate
              </b>{" "}
              (Google, Mar 2020)
            </p>
            <p>
              <b>Data Structures and Algorithms Supreme Batch</b> (CodeHelp, Mar
              2019)
            </p>
            <p>
              <b>Web Developer Bootcamp</b> (Udemy, Jul 2018)
            </p>
          </div>
        </div>
      </center>
    </>
  );
};

export default Hero;
