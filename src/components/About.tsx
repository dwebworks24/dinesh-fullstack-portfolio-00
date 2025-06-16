
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Passionate Developer & Designer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using cutting-edge technologies. My passion 
                lies in bridging the gap between design and development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user 
                experiences that solve real-world problems. When I'm not coding, you can 
                find me exploring new technologies or contributing to open-source projects.
              </p>
            </div>
            
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={48} className="text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Developer Portrait</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and efficient code is my priority.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Design Focus</h4>
                <p className="text-muted-foreground">
                  Creating beautiful, intuitive interfaces that users love to interact with.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Performance</h4>
                <p className="text-muted-foreground">
                  Optimizing applications for speed and exceptional user experience.
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
