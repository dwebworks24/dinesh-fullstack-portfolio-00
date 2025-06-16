
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Ajax", "Jinja2", "UI/UX Design"]
    },
    {
      title: "Backend & Database",
      skills: ["Python", "Django", "FastAPI", "Rest Framework", "PL/SQL", "MySQL", "SQLite", "Django ORM"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS, Lightsail, Amplify)", "GitHub", "GitLab", "Linux", "VPS Servers", "Hostinger", "GoDaddy"]
    },
    {
      title: "CMS & E-commerce",
      skills: ["WordPress", "Shopify", "WooCommerce", "Elementor", "WPBakery", "Payment Gateways"]
    },
    {
      title: "Data & Analytics",
      skills: ["Pandas", "Spark", "Google Analytics", "Google Search Console", "Microsoft Clarity", "SEO"]
    },
    {
      title: "Tools & Others",
      skills: ["Canva", "Mailchimp", "SMTP", "DNS Configuration", "Networking", "CI/CD", "System Hardware"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-center text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
