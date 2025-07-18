import { GraduationCap, Award, Code, Database, Server, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = {
    'Frontend': {
      icon: Code,
      items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS']
    },
    'Backend': {
      icon: Server,
      items: ['Node.js', 'Express.js', 'Python']
    },
    'Databases': {
      icon: Database,
      items: ['MySQL', 'Supabase', 'Firebase', 'MongoDB']
    },
    'Tools & DevOps': {
      icon: Wrench,
      items: ['Git', 'GitHub', 'Docker', 'Vercel']
    }
  };

  const achievements = [
    {
      title: 'APAC Solution Challenge 2025',
      description: 'Participated in Google Developer Groups initiative',
      icon: Award
    },
    {
      title: 'Top 10 - Build with AI Hackathon 2025',
      description: 'Ranked Top 10 at GDG Kolachi event for Marketeer AI',
      icon: Award
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuously learning new technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">DHA Suffa University</h3>
                <p className="text-muted-foreground">Bachelors in Computer Science</p>
                <p className="text-sm text-muted-foreground">2022 – 2026</p>
                <p className="mt-2 font-medium">CGPA: 3.44</p>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="glass-card hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="mr-3 h-6 w-6 text-secondary" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-primary">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, data], index) => {
              const IconComponent = data.icon;
              return (
                <Card key={category} className="glass-card hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-lg">
                      <IconComponent className="mr-2 h-5 w-5 text-primary" />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {data.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary-soft text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4">Other Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Java', 'C/C++', 'Python', 'Google Ads', 'Meta Ads'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary-soft text-secondary rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;