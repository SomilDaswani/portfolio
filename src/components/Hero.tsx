import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text">Somil Raj</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-lg text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Karachi, Pakistan</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
          Software Developer
        </h2>

        {/* Summary */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Computer Science Undergrad & Aspiring Software Engineer with strong frontend and backend expertise, expanding into AI. Passionate about solving real-world problems through code, building scalable systems, and continuously learning. I’m always exploring, learning, and discussing.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>somilraj34@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+92 334 7354490</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="hover-lift bg-gradient-primary text-white shadow-glow animate-glow"
            onClick={() => {
              window.location.href = 'mailto:somilraj34@gmail.com';
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="hover-lift glass-card"
              onClick={() => window.open('https://github.com/SomilDaswani', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="hover-lift glass-card"
              onClick={() => window.open('https://linkedin.com/in/somil-raj', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;