import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Smile } from "lucide-react";

const values = [
  { icon: Heart, label: "Love & Care", emoji: "💖", color: "bg-pink/15 text-pink" },
  { icon: Shield, label: "Safety First", emoji: "🛡️", color: "bg-primary/15 text-primary" },
  { icon: Lightbulb, label: "Creativity", emoji: "🎨", color: "bg-sunshine/15 text-sunshine-foreground" },
  { icon: Smile, label: "Indian Values", emoji: "🙏", color: "bg-leaf/15 text-leaf" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Doodle decorations */}
      <svg className="absolute top-10 right-10 w-20 h-20 text-primary/10 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 5">
        <circle cx="50" cy="50" r="35" />
      </svg>
      <svg className="absolute bottom-20 left-8 w-16 h-16 text-sunshine/20 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 6" strokeLinecap="round">
        <path d="M20 80 L50 20 L80 80 Z" />
      </svg>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.span
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-semibold text-primary mb-4"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            viewport={{ once: true }}
          >
            🏫 About Us
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nurturing Young Minds{" "}
            <span className="text-primary">Since Day One</span>{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            At Freedom Preschool & Daycare, we believe every child is unique and full of potential.
            Our mission is to provide a warm, stimulating environment where children develop holistically —
            intellectually, emotionally, socially, and physically — through play-based, activity-driven learning,
            rooted in Indian values and enriched with global perspectives. 🐘🦚🪷
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background shadow-card cursor-pointer group doodle-border"
            >
              <motion.span
                className="text-3xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {v.emoji}
              </motion.span>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${v.color} group-hover:scale-110 transition-transform`}>
                <v.icon size={24} />
              </div>
              <span className="font-display text-sm font-bold text-foreground">{v.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto text-center bg-gradient-purple rounded-3xl p-8 shadow-bold text-primary-foreground"
        >
          <motion.span
            className="text-3xl block mb-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔭
          </motion.span>
          <h3 className="font-display text-xl font-bold mb-3">Our Vision</h3>
          <p className="font-body text-primary-foreground/80 leading-relaxed">
            To be the most trusted and loved early childhood learning center where every child feels
            free to explore, imagine, and grow into confident, compassionate learners — celebrating
            India's rich heritage of animals 🐯, art 🎨, alphabets 🔤, and traditions 🪔.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
