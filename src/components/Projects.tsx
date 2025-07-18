import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      name: 'TaskFlow',
      description: 'A full-stack task manager with authentication, task filters, and real-time updates. Built with modern web technologies for optimal performance and user experience.',
      techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'shadcn-ui', 'Supabase', 'PostgreSQL'],
      githubUrl: 'https://github.com/SomilDaswani/TaskFlow',
      features: [
        'User authentication & authorization',
        'Real-time task updates',
        'Advanced filtering & sorting',
        'Responsive design',
        'PostgreSQL database integration'
      ]
    },
    {
      name: 'Marketeer AI',
      description: 'AI-based tool to generate marketing content for e-commerce brands in a single click. Leverages cutting-edge AI to create compelling marketing copy instantly.',
      techStack: ['React', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Supabase', 'Edge Functions', 'Gemini AI'],
      githubUrl: 'https://github.com/SomilDaswani/meta-magic-launch',
      features: [
        'AI-powered content generation',
        'E-commerce brand optimization',
        'One-click marketing copy',
        'Edge function integration',
        'Modern AI interface'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development and AI integration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.name} 
              className="glass-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-secondary">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-accent-bright/10 text-accent-foreground text-xs rounded-full border border-accent-bright/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="glass-card hover:bg-muted/50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-card hover-lift"
            onClick={() => window.open('https://github.com/SomilDaswani', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;