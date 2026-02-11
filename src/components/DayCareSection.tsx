import { motion } from "framer-motion";
import { Clock, Heart, Utensils, Shield, Sun, Moon } from "lucide-react";

const features = [
  { icon: Clock, label: "Flexible Hours", desc: "Choose suitable hours that fit your schedule", emoji: "⏰" },
  { icon: Utensils, label: "Nutritious Meals", desc: "Balanced, healthy meals prepared fresh daily", emoji: "🍱" },
  { icon: Shield, label: "Safe Environment", desc: "CCTV monitored, sanitized, secure premises", emoji: "🛡️" },
  { icon: Heart, label: "Loving Care", desc: "Warm, attentive caregivers your child will adore", emoji: "💖" },
  { icon: Sun, label: "Learning & Play", desc: "Fun activities blended with early learning", emoji: "🎨" },
  { icon: Moon, label: "Nap Time", desc: "Comfortable rest areas for peaceful naps", emoji: "🌙" },
];

const DayCareSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky/10 via-background to-sunshine/10" />

      {/* Decorative doodles */}
      <svg className="absolute top-12 left-8 w-16 h-16 text-sky/15 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 6" strokeLinecap="round">
        <path d="M50 15 C70 15 85 30 85 50 C85 70 70 85 50 85 C30 85 15 70 15 50 C15 30 30 15 50 15" />
        <path d="M35 50 L45 60 L65 40" strokeDasharray="0" />
      </svg>
      <svg className="absolute bottom-16 right-12 w-14 h-14 text-sunshine/20 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 5">
        <rect x="20" y="30" width="60" height="45" rx="8" />
        <path d="M35 30 V20 M65 30 V20" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — Illustration & badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] bg-gradient-to-br from-sky/20 to-sunshine/20 mx-auto lg:mx-0 flex items-center justify-center relative">
                <motion.span
                  className="text-[120px]"
                  animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🏡
                </motion.span>

                {/* Floating elements */}
                <motion.span
                  className="absolute -top-4 -right-4 text-3xl"
                  animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ☀️
                </motion.span>
                <motion.span
                  className="absolute -bottom-3 -left-3 text-2xl"
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🧸
                </motion.span>
                <motion.span
                  className="absolute top-1/2 -right-6 text-2xl"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🍼
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full bg-sky/15 px-4 py-1.5 font-body text-sm font-semibold text-sky mb-4">
              ☀️ DayCare
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Home Away from Home{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🏡
              </motion.span>
            </h2>
            <p className="font-body text-muted-foreground mb-4 leading-relaxed">
              We understand that the early years are crucial. Our daycare provides a loving, safe, and 
              stimulating environment where your child feels happy, secure, and cared for — just like home.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-sky/10 rounded-full px-3 py-1 font-body text-xs font-bold text-sky">Ages 1.5 – 6 Years</span>
              <span className="bg-sunshine/15 rounded-full px-3 py-1 font-body text-xs font-bold text-sunshine-foreground">Flexible Hours</span>
              <span className="bg-leaf/15 rounded-full px-3 py-1 font-body text-xs font-bold text-leaf">Post-School Care</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-card shadow-card cursor-pointer"
                >
                  <motion.span
                    className="text-xl shrink-0"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {f.emoji}
                  </motion.span>
                  <div>
                    <h4 className="font-display text-xs font-bold text-foreground">{f.label}</h4>
                    <p className="font-body text-[10px] text-muted-foreground leading-tight">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DayCareSection;
