
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Django Web Applications",
      description: "Multiple Django projects including dt7.agency, magsmen, and subhujo with admin panels, templating, and database integration.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Django", "Python", "HTML5", "CSS3", "JavaScript", "SQLite", "Jinja2"],
      github: "#",
      live: "https://dt7.agency"
    },
    {
      title: "CRM Applications",
      description: "Inventory management and scrap buying applications with production tracking, billing, and point-based reward systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Django", "Python", "AWS", "SQLite", "AJAX", "Bootstrap"],
      github: "#",
      live: "https://prod.krystacart.com"
    },
    {
      title: "Static Web Applications",
      description: "Mobile-responsive websites for various industries with SEO optimization, analytics integration, and form submissions.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AJAX", "SEO"],
      github: "#",
      live: "https://www.stonesquareinfra.com"
    },
    {
      title: "WordPress & Shopify Sites",
      description: "E-commerce applications with WooCommerce, payment gateways, and custom plugins for various business needs.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["WordPress", "Shopify", "WooCommerce", "Elementor", "Payment Gateways"],
      github: "#",
      live: "https://www.tenalidoublehorse.com"
    },
    {
      title: "DT7Solutions Portfolio",
      description: "Company website showcasing services and portfolio with modern design and performance optimization.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Analytics"],
      github: "#",
      live: "https://www.dt7solutions.com"
    },
    {
      title: "Infrastructure Websites",
      description: "Construction and infrastructure company websites with project showcases and contact management.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Mobile Responsive"],
      github: "#",
      live: "https://www.mettuinfrastructures.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale overflow-hidden">
              <div className="aspect-video bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
