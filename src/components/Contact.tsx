import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "pradnyabagade07@gmail.com",
    icon: Mail,
    href: "mailto:pradnyabagade07@gmail.com",
    color: "hover:text-primary",
  },
  {
    name: "linkedin.com/in/pradnya-bagade-aa8660258",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/pradnya-bagade-aa8660258",
    color: "hover:text-[#0077B5]",
  },
  {
    name: "github.com/pradnyabagde07",
    icon: Github,
    href: "https://github.com/pradnyabagde07",
    color: "hover:text-foreground",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Get in touch!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-2 shadow-elegant bg-card/50 backdrop-blur animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="border-2 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Social Links & Info */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                Connect with me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-all duration-300 hover:translate-x-2 group ${social.color}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <social.icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 bg-card/50 backdrop-blur">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Open to Opportunities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking UI/UX design roles and exciting projects. Let's create something amazing together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
