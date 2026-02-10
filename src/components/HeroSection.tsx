import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const floatingEmojis = ["⭐", "🎨", "📚", "🦋", "🌻", "🎵"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero pt-20 overflow-hidden">
      {/* Floating emoji confetti */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-3xl pointer-events-none select-none"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
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

      {/* Decorative blobs */}
      <div className="absolute top-32 left-8 w-24 h-24 rounded-full bg-sunshine/25 blur-xl animate-float" />
      <div className="absolute top-48 right-12 w-20 h-20 rounded-full bg-pink/25 blur-xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-leaf/25 blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-primary/20 blur-lg animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-16 lg:py-24">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-sunshine/20 px-4 py-1.5 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star size={14} className="text-sunshine" />
            <span className="font-body text-sm font-semibold text-sunshine-foreground">Ages 1.5 – 6 Years</span>
            <Sparkles size={14} className="text-sunshine" />
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
            Where Little Minds{" "}
            <motion.span
              className="text-gradient-sunshine inline-block"
              animate={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Grow with Freedom
            </motion.span>{" "}
            <motion.span
              className="inline-block text-3xl md:text-4xl"
              animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌈
            </motion.span>
          </h1>

          <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
            A safe, nurturing, and joyful learning space where your child discovers
            creativity, confidence, and a love for learning every single day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-bold text-primary-foreground shadow-playful hover:shadow-hover transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Enroll Your Child
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-8 py-4 font-body text-base font-bold text-primary hover:bg-primary/5 transition-colors"
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

            <div className="absolute -inset-4 rounded-3xl bg-primary/10 rotate-3" />
            <div className="absolute -inset-4 rounded-3xl bg-sunshine/10 -rotate-2" />
            <img
              src={heroImage}
              alt="Happy children learning and playing at Freedom Preschool"
              className="relative rounded-3xl shadow-playful w-full max-w-xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H0V60Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
