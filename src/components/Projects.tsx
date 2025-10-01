import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import IRCTCCaseStudy from "./IRCTCCaseStudy";

const projects = [
  {
    id: "irctc",
    title: "IRCTC Website Redesign",
    description: "Complete UI/UX overhaul of India's railway booking platform",
    tags: ["UI/UX", "Research", "Prototyping", "Figma"],
    gradient: "from-primary to-primary-glow",
    impact: "40% reduction in booking clicks",
  },
  {
    id: "kaizen",
    title: "Kaizen Management Dashboard",
    description: "Intuitive web app for data visualization and business management",
    tags: ["Dashboard", "Data Viz", "Web App"],
    gradient: "from-secondary to-accent",
    impact: "Enhanced usability & insights",
  },
  {
    id: "edtech",
    title: "Smart Edtech AR/AI App",
    description: "Interactive, gamified learning experience with AR integration",
    tags: ["AR", "AI", "Education", "Mobile"],
    gradient: "from-accent to-primary",
    impact: "Immersive learning platform",
  },
  {
    id: "ar-physics",
    title: "AR Physics Book Project",
    description: "World record-breaking AR-enhanced educational experience",
    tags: ["AR", "Education", "Innovation"],
    gradient: "from-secondary to-primary",
    impact: "World Record Achievement",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  if (selectedProject === "irctc") {
    return <IRCTCCaseStudy onBack={() => setSelectedProject(null)} />;
  }

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my case studies and design work
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-2 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-card/50 backdrop-blur animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => project.id === "irctc" && setSelectedProject(project.id)}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-2xl font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.id === "irctc" && (
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-primary mb-2">Impact:</p>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {project.id === "irctc" && (
                  <Button
                    variant="ghost"
                    className="w-full group/btn mt-4"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
