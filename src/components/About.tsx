
import { Card, CardContent } from "@/components/ui/card";
import { Code, Briefcase, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Sr Full Stack Developer & Team Leader
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Working at DT7Solutions since 2022, I've grown from a developer to a team leader 
                managing 8 members. With expertise in both frontend and backend technologies, 
                I've successfully delivered 40+ projects ranging from static websites to complex CRM applications.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I specialize in Django, React, Python, and AWS services. My experience includes 
                deploying applications on various platforms like GitHub, Hostinger, GoDaddy, 
                VPS servers, and AWS (EC2, S3, RDS, Lightsail, Amplify).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a Master's in Computer Applications from JNTU-K, I'm passionate about 
                creating user-friendly applications and continuously learning new technologies 
                to stay current with industry trends.
              </p>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={48} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Sr Full Stack Developer</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Full Stack Expertise</h4>
                <p className="text-muted-foreground">
                  Proficient in Django, React, Python, and modern web technologies with strong UI/UX focus.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Team Leadership</h4>
                <p className="text-muted-foreground">
                  Leading a team of 8 developers and successfully managing multiple projects simultaneously.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">40+ Projects</h4>
                <p className="text-muted-foreground">
                  Delivered diverse projects including CRM applications, e-commerce sites, and static websites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
