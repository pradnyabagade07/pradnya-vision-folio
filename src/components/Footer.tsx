import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Pradnya Vikas Bagade. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed with</span>
            <Heart className="h-4 w-4 text-secondary fill-secondary animate-pulse" />
            <span>and creativity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
