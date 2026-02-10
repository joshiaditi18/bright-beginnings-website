import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-bold">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🌈</span>
          <span className="font-display text-xl font-bold text-primary-foreground">
            Freedom <span className="text-sunshine">Preschool</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-semibold text-primary-foreground/80 hover:text-sunshine transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 rounded-full bg-sunshine px-5 py-2 font-body text-sm font-bold text-sunshine-foreground hover:opacity-90 transition-opacity shadow-bold"
          >
            <Phone size={14} />
            Call Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-primary-foreground/10 overflow-hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm font-semibold text-primary-foreground/80 hover:text-sunshine py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 rounded-full bg-sunshine px-5 py-3 font-body text-sm font-bold text-sunshine-foreground mt-2"
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
