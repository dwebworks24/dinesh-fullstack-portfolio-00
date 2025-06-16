
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-primary">Badugu Dinesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Sr Full Stack Developer & Team Leader
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Full Stack Developer with 2+ years of experience leading teams and building 40+ projects. 
            Specializing in Django, React, AWS, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="hover-scale"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="hover-scale"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Github size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Linkedin size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Mail size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
