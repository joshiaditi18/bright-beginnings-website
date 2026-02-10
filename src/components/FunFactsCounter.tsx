import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const facts = [
  { emoji: "👶", value: 500, suffix: "+", label: "Happy Kids" },
  { emoji: "👩‍🏫", value: 25, suffix: "+", label: "Caring Teachers" },
  { emoji: "🎉", value: 10, suffix: "+", label: "Years of Joy" },
  { emoji: "🏆", value: 15, suffix: "+", label: "Awards Won" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground">
      {count}{suffix}
    </span>
  );
};

const FunFactsCounter = () => {
  return (
    <section className="py-16 bg-gradient-purple relative overflow-hidden">
      {/* Doodle decorations */}
      <svg className="absolute top-6 right-10 w-16 h-16 text-primary-foreground/10 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 5">
        <circle cx="50" cy="50" r="35" />
      </svg>
      <svg className="absolute bottom-8 left-12 w-12 h-12 text-sunshine/30 hidden md:block" viewBox="0 0 100 100" fill="currentColor">
        <rect x="40" y="15" width="20" height="70" rx="8" />
        <rect x="15" y="40" width="70" height="20" rx="8" />
      </svg>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <motion.span
                className="text-4xl block mb-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {fact.emoji}
              </motion.span>
              <Counter target={fact.value} suffix={fact.suffix} />
              <p className="font-body text-sm font-semibold text-primary-foreground/70 mt-1">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsCounter;
