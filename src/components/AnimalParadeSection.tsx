import { motion } from "framer-motion";
import { useState } from "react";

const animals = [
  { emoji: "🐘", name: "Elephant", sound: "Trumpet!", fact: "I'm the largest land animal!", color: "bg-muted" },
  { emoji: "🦁", name: "Lion", sound: "Roaar!", fact: "I'm the king of the jungle!", color: "bg-sunshine/15" },
  { emoji: "🐵", name: "Monkey", sound: "Ooh ooh!", fact: "I love swinging on trees!", color: "bg-peach/30" },
  { emoji: "🦜", name: "Parrot", sound: "Squawk!", fact: "I can talk like you!", color: "bg-leaf/15" },
  { emoji: "🐢", name: "Turtle", sound: "...", fact: "Slow and steady wins the race!", color: "bg-primary/10" },
  { emoji: "🦋", name: "Butterfly", sound: "Flutter!", fact: "I was once a caterpillar!", color: "bg-pink/15" },
  { emoji: "🐄", name: "Cow", sound: "Mooo!", fact: "I give you yummy milk!", color: "bg-sunshine/10" },
  { emoji: "🦚", name: "Peacock", sound: "Meow!", fact: "I'm India's national bird!", color: "bg-primary/15" },
];

const cartoonFriends = [
  { emoji: "🧸", name: "Teddy", role: "Hugging Expert" },
  { emoji: "🤖", name: "Robo", role: "Fun Teacher" },
  { emoji: "🧚", name: "Fairy", role: "Story Teller" },
  { emoji: "🦸", name: "Hero", role: "Brave Leader" },
  { emoji: "🐰", name: "Bunny", role: "Art Buddy" },
  { emoji: "🦊", name: "Foxy", role: "Puzzle Master" },
];

const AnimalParadeSection = () => {
  const [activeAnimal, setActiveAnimal] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Floating paw prints */}
      {["🐾", "🐾", "🐾", "🐾"].map((paw, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl opacity-10 pointer-events-none"
          style={{ left: `${15 + i * 25}%`, top: `${10 + (i % 2) * 60}%` }}
          animate={{ y: [0, -15, 0], rotate: [0, 20, -20, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          {paw}
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
            🐾 Animal Friends
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Animal Parade!{" "}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎪
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Tap on any animal to learn a fun fact! Our little learners explore the wonderful animal kingdom every day.
          </p>
        </motion.div>

        {/* Animal Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {animals.map((animal, i) => (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.08, rotate: i % 2 === 0 ? 3 : -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveAnimal(activeAnimal === i ? null : i)}
              className={`${animal.color} rounded-2xl p-5 text-center cursor-pointer shadow-card hover:shadow-hover transition-all relative`}
            >
              <motion.span
                className="text-5xl block mb-2"
                animate={{
                  y: [0, -8, 0],
                  rotate: activeAnimal === i ? [0, -10, 10, 0] : 0,
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              >
                {animal.emoji}
              </motion.span>
              <span className="font-display text-sm font-bold text-foreground block">{animal.name}</span>
              <span className="font-body text-xs text-muted-foreground italic">"{animal.sound}"</span>

              {activeAnimal === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full bg-card rounded-xl px-4 py-2 shadow-hover z-10 w-48"
                >
                  <p className="font-body text-xs text-foreground font-semibold">💡 {animal.fact}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Cartoon Friends */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            Our Cartoon Buddies{" "}
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🎭
            </motion.span>
          </h3>
          <p className="font-body text-sm text-muted-foreground">Each classroom has a special cartoon friend!</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {cartoonFriends.map((friend, i) => (
            <motion.div
              key={friend.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.1 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card shadow-card cursor-pointer w-28"
            >
              <motion.span
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              >
                {friend.emoji}
              </motion.span>
              <span className="font-display text-xs font-bold text-foreground">{friend.name}</span>
              <span className="font-body text-[10px] text-muted-foreground">{friend.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalParadeSection;
