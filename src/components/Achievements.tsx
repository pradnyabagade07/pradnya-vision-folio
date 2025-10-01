import { Card } from "@/components/ui/card";
import { Award, Briefcase, Trophy, Users } from "lucide-react";

const achievements = [
  {
    year: "2024",
    title: "Internship at Mask Polymers",
    description: "Applied practical skills in a professional environment",
    icon: Briefcase,
    color: "text-primary",
  },
  {
    year: "2023-24",
    title: "Hackathon Participation",
    description: "Hackothsava, EduHacks, Myntra Hackeramp",
    icon: Trophy,
    color: "text-secondary",
  },
  {
    year: "2023",
    title: "AR Physics Book Project",
    description: "Achieved World Record for AR-enhanced educational innovation",
    icon: Award,
    color: "text-accent",
  },
  {
    year: "2023-Present",
    title: "Joint Treasurer - ACES",
    description: "Leading financial operations for computer engineering society",
    icon: Users,
    color: "text-primary",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Achievements & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones in my journey as a designer and innovator
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`relative flex items-center gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    achievement.color === "text-primary" ? "from-primary to-primary-glow" :
                    achievement.color === "text-secondary" ? "from-secondary to-accent" :
                    "from-accent to-primary"
                  } flex items-center justify-center shadow-lg`}>
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "" : "md:text-right"}`}>
                  <Card className="p-6 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur">
                    <div className="flex items-center gap-4 mb-3 md:hidden">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        achievement.color === "text-primary" ? "from-primary to-primary-glow" :
                        achievement.color === "text-secondary" ? "from-secondary to-accent" :
                        "from-accent to-primary"
                      } flex items-center justify-center`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <span className="hidden md:inline-block text-sm font-semibold text-primary px-3 py-1 bg-primary/10 rounded-full mb-3">
                      {achievement.year}
                    </span>
                    
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
