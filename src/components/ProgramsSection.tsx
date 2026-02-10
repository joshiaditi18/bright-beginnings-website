import { motion } from "framer-motion";
import { Baby, BookOpen, GraduationCap, Palette, Sun } from "lucide-react";

const programs = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 years",
    icon: Baby,
    color: "bg-gradient-pink",
    emoji: "🧸",
    activities: ["Sensory play", "Music & movement", "Story time"],
    outcomes: "Builds social skills, motor development, and emotional comfort in a group setting.",
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 years",
    icon: Palette,
    color: "bg-gradient-sunshine",
    emoji: "🎨",
    activities: ["Art & craft", "Rhymes & songs", "Free play"],
    outcomes: "Encourages curiosity, language development, and creative expression.",
  },
  {
    title: "Junior KG",
    age: "3.5 – 4.5 years",
    icon: BookOpen,
    color: "bg-gradient-sky",
    emoji: "📚",
    activities: ["Pre-reading", "Number concepts", "Science exploration"],
    outcomes: "Develops early literacy, numeracy, and critical thinking foundations.",
  },
  {
    title: "Senior KG",
    age: "4.5 – 6 years",
    icon: GraduationCap,
    color: "bg-gradient-leaf",
    emoji: "🎓",
    activities: ["Reading & writing", "Math skills", "Environmental awareness"],
    outcomes: "Prepares children for primary school with confidence and strong academic readiness.",
  },
  {
    title: "Daycare",
    age: "1.5 – 6 years",
    icon: Sun,
    color: "bg-gradient-pink",
    emoji: "☀️",
    activities: ["Supervised care", "Nutritious meals", "Nap & play time"],
    outcomes: "A home-away-from-home with attentive care, balanced nutrition, and rest.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-sunshine/15 px-4 py-1.5 font-body text-sm font-semibold text-sunshine-foreground mb-4">
            📖 Our Programs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Pathways for Every Age{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎯
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From playful toddlers to school-ready kids, we have a program designed for your child's stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              <div className={`${p.color} px-6 py-5 flex items-center gap-3 relative`}>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                >
                  {p.emoji}
                </motion.span>
                <p.icon size={28} className="text-primary-foreground" />
                <div>
                  <h3 className="font-display text-lg font-bold text-primary-foreground">{p.title}</h3>
                  <span className="font-body text-sm text-primary-foreground/80">{p.age}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-sm font-bold text-foreground mb-2">✏️ Activities</h4>
                <ul className="mb-4 space-y-1">
                  {p.activities.map((a) => (
                    <li key={a} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
                <h4 className="font-display text-sm font-bold text-foreground mb-1">🎯 Learning Outcomes</h4>
                <p className="font-body text-sm text-muted-foreground">{p.outcomes}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
