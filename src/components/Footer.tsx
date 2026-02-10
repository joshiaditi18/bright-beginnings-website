import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🌈</span>
          <span className="font-display text-lg font-bold text-primary-foreground">
            Freedom Preschool & Daycare
          </span>
        </div>
        <p className="font-body text-sm text-primary-foreground/60 mb-6 max-w-md mx-auto">
          Nurturing young minds with love, creativity, and care since Day One.
        </p>
        <div className="flex items-center justify-center gap-6 mb-6">
          {["Home", "About", "Programs", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-secondary" /> © {new Date().getFullYear()} Freedom Preschool & Daycare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
