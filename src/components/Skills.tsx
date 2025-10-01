import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Database, GitBranch, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["C++", "HTML/CSS", "JavaScript", "SDLC", "Agile Methodologies"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Design Skills",
    icon: Palette,
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "User Research"],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Tools & Platforms",
    icon: Smartphone,
    skills: ["Figma", "GitHub", "AR/AI Integration", "Responsive Design"],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Team Collaboration", "Continuous Learning", "Multitasking"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of technical prowess and creative design thinking
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card/50 backdrop-blur animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${category.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className={`h-8 w-8 ${category.color}`} />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <div className={`h-1.5 w-1.5 rounded-full ${category.color.replace('text-', 'bg-')}`} />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
