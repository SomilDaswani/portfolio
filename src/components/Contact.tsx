import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'somilraj34@gmail.com',
      href: 'mailto:somilraj34@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 334 7354490',
      href: 'tel:+923347354490'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SomilDaswani',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/somil-raj',
      color: 'hover:text-secondary'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href !== '#' ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Ready to start a conversation? Send me an email and I'll get back to you as soon as possible.
              </p>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
                onClick={() => {
                  window.location.href = 'mailto:somilraj34@gmail.com';
                }}
              >
                <Send className="mr-2 h-5 w-5" />
                Send Email
              </Button>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">Or find me on:</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        className={`glass-card hover-lift ${social.color} flex-1`}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <IconComponent className="mr-2 h-5 w-5" />
                        {social.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity animate-glow"
                onClick={() => {
                  window.location.href = 'mailto:somilraj34@gmail.com';
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;