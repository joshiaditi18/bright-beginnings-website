import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    child: "Mother of Aarav, Age 4",
    text: "My son absolutely loves going to school every morning! The teachers are so warm and the activities keep him engaged all day. Best decision we made!",
    rating: 5,
    emoji: "👩",
  },
  {
    name: "Rahul Patel",
    child: "Father of Ananya, Age 3",
    text: "The transformation in my daughter is incredible. She's more confident, creative, and always comes home singing new rhymes. Freedom Preschool truly lives up to its name!",
    rating: 5,
    emoji: "👨",
  },
  {
    name: "Sneha Gupta",
    child: "Mother of twins Riya & Rohan, Age 5",
    text: "Managing twins was a worry, but the staff handled them with such care and individual attention. The kids have blossomed beautifully here.",
    rating: 5,
    emoji: "👩",
  },
  {
    name: "Amit Desai",
    child: "Father of Ishaan, Age 2",
    text: "The daycare facility is exceptional. Clean, safe, and the meals are nutritious. I can focus on work knowing Ishaan is in the best hands.",
    rating: 5,
    emoji: "👨",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote size={120} className="text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
        <Quote size={120} className="text-pink" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-sunshine/15 px-4 py-1.5 font-body text-sm font-semibold text-sunshine-foreground mb-4">
            💬 Happy Parents
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Parents Say About Us
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-3xl p-8 md:p-10 shadow-card text-center"
            >
              <motion.div
                className="text-5xl mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {testimonials[current].emoji}
              </motion.div>

              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-sunshine fill-sunshine" />
                ))}
              </div>

              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].text}"
              </p>

              <h4 className="font-display text-lg font-bold text-foreground">
                {testimonials[current].name}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {testimonials[current].child}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8 items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
