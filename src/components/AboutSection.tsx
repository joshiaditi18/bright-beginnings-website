import { motion } from "framer-motion";
import { Heart, Shield, Lightbulb, Smile } from "lucide-react";

const values = [
  { icon: Heart, label: "Love & Care", emoji: "💖", color: "bg-pink/15 text-pink" },
  { icon: Shield, label: "Safety First", emoji: "🛡️", color: "bg-primary/15 text-primary" },
  { icon: Lightbulb, label: "Creativity", emoji: "💡", color: "bg-sunshine/15 text-sunshine-foreground" },
  { icon: Smile, label: "Joy of Learning", emoji: "😊", color: "bg-leaf/15 text-leaf" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative doodle lines */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-sunshine/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink/5 rounded-full translate-y-1/2 -translate-x-1/2" />

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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nurturing Young Minds Since Day One{" "}
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
            intellectually, emotionally, socially, and physically — through play-based, activity-driven learning.
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
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background shadow-card cursor-pointer group"
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
          className="mt-16 max-w-2xl mx-auto text-center bg-background rounded-3xl p-8 shadow-card"
        >
          <motion.span
            className="text-3xl block mb-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔭
          </motion.span>
          <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            To be the most trusted and loved early childhood learning center where every child feels
            free to explore, imagine, and grow into confident, compassionate learners.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
