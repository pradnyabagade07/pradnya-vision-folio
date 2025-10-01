import { Code2, Figma, Github, Layout, Palette } from "lucide-react";
import { Card } from "@/components/ui/card";

const tools = [
  { icon: Figma, name: "Figma", color: "text-[#F24E1E]" },
  { icon: Layout, name: "UI/UX", color: "text-primary" },
  { icon: Code2, name: "HTML/CSS", color: "text-secondary" },
  { icon: Code2, name: "JavaScript", color: "text-accent" },
  { icon: Github, name: "GitHub", color: "text-foreground" },
  { icon: Palette, name: "Design Systems", color: "text-primary" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-2 shadow-elegant animate-scale-in">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-center">
              Computer Engineering undergraduate passionate about{" "}
              <span className="font-semibold text-primary">UI/UX design</span>,{" "}
              <span className="font-semibold text-secondary">multitasking</span>, continuous learning, and{" "}
              <span className="font-semibold text-accent">innovative problem-solving</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 hover:scale-110 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${tool.color} transition-colors`}>
                    <tool.icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
