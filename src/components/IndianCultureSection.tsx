import { motion } from "framer-motion";

const festivals = [
  { emoji: "🪔", name: "Diwali", desc: "Festival of lights — we make diyas & rangoli!", color: "bg-sunshine/15" },
  { emoji: "🎨", name: "Holi", desc: "Colors of joy — safe color play & fun!", color: "bg-pink/15" },
  { emoji: "🪁", name: "Makar Sankranti", desc: "Kite flying & til-gul celebrations!", color: "bg-primary/15" },
  { emoji: "🏵️", name: "Ganesh Chaturthi", desc: "Eco-friendly Ganpati making activities!", color: "bg-leaf/15" },
  { emoji: "🎆", name: "Independence Day", desc: "Flag hoisting, patriotic songs & dance!", color: "bg-peach/30" },
  { emoji: "🌾", name: "Pongal / Lohri", desc: "Harvest festival crafts & stories!", color: "bg-sunshine/15" },
];

const monuments = [
  { emoji: "🕌", name: "Taj Mahal", place: "Agra" },
  { emoji: "🏰", name: "Red Fort", place: "Delhi" },
  { emoji: "🛕", name: "Temples", place: "South India" },
  { emoji: "🏛️", name: "India Gate", place: "New Delhi" },
  { emoji: "🗼", name: "Qutub Minar", place: "Delhi" },
  { emoji: "⛪", name: "Churches", place: "Goa" },
];

const traditions = [
  { emoji: "🙏", label: "Namaste", desc: "We greet with respect" },
  { emoji: "🎶", label: "Bhajans & Folk Songs", desc: "Music from our roots" },
  { emoji: "💃", label: "Classical Dance", desc: "Bharatnatyam & Kathak basics" },
  { emoji: "👘", label: "Traditional Dress Day", desc: "Kids dress in ethnic wear" },
  { emoji: "🍛", label: "Indian Food Day", desc: "Learning about regional cuisines" },
  { emoji: "🧶", label: "Indian Art & Craft", desc: "Madhubani, Warli & Rangoli" },
];

const IndianCultureSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Floating cultural elements */}
      {["🪷", "🕉️", "🇮🇳", "🪔", "🦚"].map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none"
          style={{ left: `${8 + i * 22}%`, bottom: `${10 + (i % 3) * 25}%` }}
          animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
        >
          {item}
        </motion.span>
      ))}

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-sunshine/15 px-4 py-1.5 font-body text-sm font-semibold text-sunshine-foreground mb-4">
            🇮🇳 Indian Culture & Heritage
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Celebrating Our Rich Traditions{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🪷
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We nurture pride in India's vibrant culture, history, and traditions. From festivals to folk art, 
            children learn values, stories, and the beauty of our diverse heritage.
          </p>
        </motion.div>

        {/* Festivals */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground text-center mb-8"
          >
            🎉 Festivals We Celebrate
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {festivals.map((fest, i) => (
              <motion.div
                key={fest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${fest.color} rounded-2xl p-5 text-center shadow-card hover:shadow-hover transition-all cursor-pointer`}
              >
                <motion.span
                  className="text-4xl block mb-2"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                >
                  {fest.emoji}
                </motion.span>
                <h4 className="font-display text-base font-bold text-foreground mb-1">{fest.name}</h4>
                <p className="font-body text-xs text-muted-foreground">{fest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Monuments - Horizontal scroll strip */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground text-center mb-8"
          >
            🏛️ Discover India's Wonders
          </motion.h3>
          <div className="flex gap-4 overflow-x-auto pb-4 px-2 snap-x snap-mandatory max-w-4xl mx-auto scrollbar-hide">
            {monuments.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex-shrink-0 snap-center w-36 bg-card rounded-2xl p-5 text-center shadow-card cursor-pointer"
              >
                <motion.span
                  className="text-5xl block mb-2"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                >
                  {m.emoji}
                </motion.span>
                <h4 className="font-display text-sm font-bold text-foreground">{m.name}</h4>
                <span className="font-body text-xs text-muted-foreground">{m.place}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traditions */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl font-bold text-foreground text-center mb-8"
          >
            🎭 Traditions We Teach
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {traditions.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04 }}
                className="flex items-center gap-4 bg-card rounded-2xl p-4 shadow-card hover:shadow-hover transition-all cursor-pointer"
              >
                <motion.span
                  className="text-3xl shrink-0"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {t.emoji}
                </motion.span>
                <div>
                  <h4 className="font-display text-sm font-bold text-foreground">{t.label}</h4>
                  <p className="font-body text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun fact banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-hero rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-card"
        >
          <motion.span
            className="text-4xl block mb-3"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            🦚
          </motion.span>
          <h4 className="font-display text-lg font-bold text-primary-foreground mb-2">Did You Know?</h4>
          <p className="font-body text-sm text-primary-foreground/80">
            The <strong>Peacock</strong> 🦚 is India's national bird, the <strong>Bengal Tiger</strong> 🐯 is our national animal, 
            and the <strong>Lotus</strong> 🪷 is our national flower! We teach children about India's beautiful symbols every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IndianCultureSection;
