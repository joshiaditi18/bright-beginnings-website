import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 pb-24 relative overflow-hidden">
      {/* Floating stars */}
      {["⭐", "🌟", "✨"].map((star, i) => (
        <motion.span
          key={i}
          className="absolute text-lg opacity-20"
          style={{ left: `${20 + i * 30}%`, top: `${20 + i * 15}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
        >
          {star}
        </motion.span>
      ))}

      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            🌈
          </motion.span>
          <span className="font-display text-lg font-bold text-primary-foreground">
            Freedom Preschool & Daycare
          </span>
        </div>
        <p className="font-body text-sm text-primary-foreground/60 mb-6 max-w-md mx-auto">
          Nurturing young minds with love, creativity, Indian values, and care since Day One. 🐘🪔💛
        </p>
        <div className="flex justify-center gap-3 mb-6">
          {["🐘", "🦁", "🦚", "🔤", "🔢", "🪔", "🇮🇳"].map((emoji, i) => (
            <motion.span
              key={i}
              className="text-lg opacity-40"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6 mb-6">
          {["Home", "About", "Programs", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-primary-foreground/50 hover:text-sunshine transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-sunshine" /> © {new Date().getFullYear()} Freedom Preschool & Daycare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
