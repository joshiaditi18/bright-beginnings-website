import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const floatingEmojis = ["⭐", "🐘", "📚", "🦚", "🔤", "🎵", "🪔", "🦁", "🔢"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Bold purple background with yellow blob */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -right-20 top-0 w-[600px] h-[600px] bg-sunshine rounded-full opacity-90 blur-[2px]" style={{ clipPath: "ellipse(55% 65% at 70% 40%)" }} />
      <div className="absolute -left-10 bottom-0 w-[300px] h-[300px] bg-sunshine/30 rounded-full blur-2xl" />

      {/* Doodle decorations */}
      <svg className="absolute top-28 left-8 w-16 h-16 text-primary-foreground/20 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8 6">
        <circle cx="50" cy="50" r="40" />
        <path d="M30 50 Q50 20 70 50 Q50 80 30 50" />
      </svg>
      <svg className="absolute top-40 right-[30%] w-12 h-12 text-sunshine/40 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 8">
        <path d="M20 80 L50 20 L80 80" />
        <path d="M30 65 H70" />
      </svg>
      <svg className="absolute bottom-40 left-[15%] w-20 h-20 text-primary-foreground/15 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 7">
        <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
      </svg>
      {/* Plane doodle */}
      <svg className="absolute top-32 right-16 w-24 h-24 text-primary-foreground/20 hidden lg:block" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4">
        <path d="M20 90 L60 50 L100 30" strokeLinecap="round" />
        <path d="M100 30 L80 50 L90 60 L100 30" />
        <path d="M60 50 L50 70 L70 60" />
      </svg>
      {/* Plus doodle */}
      <motion.svg
        className="absolute bottom-[30%] left-[40%] w-14 h-14 text-sunshine hidden md:block"
        viewBox="0 0 100 100" fill="currentColor"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <rect x="40" y="15" width="20" height="70" rx="8" />
        <rect x="15" y="40" width="70" height="20" rx="8" />
      </motion.svg>

      {/* Floating emoji confetti */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 10}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-24 relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-sunshine px-5 py-2 mb-6 shadow-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star size={16} className="text-sunshine-foreground" />
            <span className="font-body text-sm font-bold text-sunshine-foreground">🎓 Admission Open • Ages 1.5 – 6 Years</span>
            <Sparkles size={16} className="text-sunshine-foreground" />
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-primary-foreground mb-6">
            Build a Foundation{" "}
            <br className="hidden md:block" />
            for a Lifetime of{" "}
            <motion.span
              className="inline-block text-sunshine"
              animate={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Learning
            </motion.span>{" "}
            <motion.span
              className="inline-block text-3xl md:text-5xl"
              animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌈
            </motion.span>
          </h1>

          <p className="font-body text-lg text-primary-foreground/80 max-w-lg mx-auto lg:mx-0 mb-4">
            A safe, nurturing, and joyful learning space where your child discovers
            creativity, confidence, and a love for learning every single day.
          </p>

          {/* Mini animated icons strip */}
          <div className="flex gap-3 justify-center lg:justify-start mb-8 flex-wrap">
            {[
              { emoji: "🐘", label: "Animals" },
              { emoji: "🔤", label: "ABCs" },
              { emoji: "🔢", label: "123s" },
              { emoji: "🇮🇳", label: "Culture" },
              { emoji: "🎨", label: "Art" },
              { emoji: "🎵", label: "Music" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-1.5 bg-primary-foreground/15 backdrop-blur-sm rounded-full px-3 py-1.5"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <span className="text-base">{item.emoji}</span>
                <span className="font-body text-xs font-bold text-primary-foreground/90">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunshine px-8 py-4 font-body text-base font-extrabold text-sunshine-foreground shadow-bold hover:shadow-hover transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Enroll Now
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 px-8 py-4 font-body text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Programs ✨
            </motion.a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            {/* Decorative shapes around image */}
            <motion.div
              className="absolute -top-6 -right-6 text-4xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ⭐
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-3xl"
              animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🎨
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 text-2xl"
              animate={{ x: [0, 5, 0], rotate: [0, 20, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🦋
            </motion.div>

            {/* Yellow blob behind image */}
            <div className="absolute -inset-6 rounded-[2rem] bg-sunshine/30 rotate-3" />
            <div className="absolute -inset-4 rounded-[2rem] bg-primary-foreground/10 -rotate-2" />
            <img
              src={heroImage}
              alt="Happy children learning and playing at Freedom Preschool"
              className="relative rounded-[2rem] shadow-bold w-full max-w-xl object-cover border-4 border-primary-foreground/20"
            />
          </div>
        </motion.div>
      </div>

      {/* Wavy divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H0V60Z" fill="hsl(45 100% 97%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
