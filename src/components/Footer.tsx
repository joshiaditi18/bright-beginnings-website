import { Heart, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 pb-24 relative overflow-hidden">
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

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/photos/logo.png" 
                alt="Freedom Park Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-primary-foreground">
                  Freedom Preschool
                </h3>
                <p className="font-body text-xs text-primary-foreground/60">& Daycare</p>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Nurturing young minds with love, creativity, Indian values, and care since 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Programs", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/70 hover:text-sunshine transition-colors"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-sunshine mt-0.5 flex-shrink-0" />
                <a href="mailto:freedomparkpreschool2016@gmail.com" className="font-body text-sm text-primary-foreground/70 hover:text-sunshine transition-colors break-all">
                  freedomparkpreschool2016@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-display text-sm font-bold text-primary-foreground mb-4">Location</h4>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-sunshine mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                Padmavatinagari, Wadmukhwadi, Behind KK Care Hospital, Alandi Road, Pune - 412105, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Emojis */}
        <div className="flex justify-center gap-3 mb-8">
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

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/40 text-center flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-sunshine" /> © {new Date().getFullYear()} Freedom Park Preschool & Nursery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
