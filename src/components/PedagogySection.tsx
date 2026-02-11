import { motion } from "framer-motion";

const pillars = [
  { emoji: "🧠", title: "Cognitive", desc: "Problem solving, memory, logical thinking", color: "bg-primary/15" },
  { emoji: "💪", title: "Physical", desc: "Motor skills, coordination, body awareness", color: "bg-leaf/15" },
  { emoji: "💖", title: "Emotional", desc: "Self-confidence, empathy, resilience", color: "bg-pink/15" },
  { emoji: "🤝", title: "Social", desc: "Teamwork, sharing, communication skills", color: "bg-sunshine/15" },
  { emoji: "🎨", title: "Creative", desc: "Art, music, imagination, storytelling", color: "bg-peach/30" },
];

const PedagogySection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative doodles */}
      <svg className="absolute top-10 right-8 w-20 h-20 text-primary/8 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 5">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="10" />
      </svg>
      <svg className="absolute bottom-12 left-6 w-16 h-16 text-sunshine/15 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 6" strokeLinecap="round">
        <path d="M25 75 L50 25 L75 75" />
        <path d="M35 60 L65 60" />
      </svg>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-semibold text-primary mb-4">
            📖 Our Pedagogy
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            The <span className="text-primary">Freedom</span> Learning Approach{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our pedagogy nurtures the whole child through a play-based, activity-driven curriculum that sparks 
            curiosity, builds confidence, and develops essential life skills — rooted in Indian values with 
            global learning standards.
          </p>
        </motion.div>

        {/* Central illustration with pillars */}
        <div className="max-w-4xl mx-auto">
          {/* Central badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-purple rounded-3xl p-8 text-center mb-10 shadow-bold relative"
          >
            <motion.span
              className="text-5xl block mb-3"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎯
            </motion.span>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
              Holistic Development
            </h3>
            <p className="font-body text-sm text-primary-foreground/80 max-w-lg mx-auto">
              Every activity at Freedom is designed to develop multiple dimensions of your child's growth — 
              not just academics, but the complete personality.
            </p>

            {/* Corner doodles */}
            <motion.span
              className="absolute -top-3 -left-3 text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              ⭐
            </motion.span>
            <motion.span
              className="absolute -bottom-3 -right-3 text-2xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📚
            </motion.span>
          </motion.div>

          {/* Pillar cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`${p.color} rounded-2xl p-5 text-center shadow-card hover:shadow-hover transition-all cursor-pointer`}
              >
                <motion.span
                  className="text-3xl block mb-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  {p.emoji}
                </motion.span>
                <h4 className="font-display text-sm font-bold text-foreground mb-1">{p.title}</h4>
                <p className="font-body text-[11px] text-muted-foreground leading-tight">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
