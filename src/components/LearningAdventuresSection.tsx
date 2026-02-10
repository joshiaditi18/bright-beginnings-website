import { motion } from "framer-motion";
import { useState } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const alphabetColors = [
  "bg-primary/15", "bg-pink/15", "bg-sunshine/15", "bg-leaf/15", "bg-peach/30",
  "bg-primary/15", "bg-pink/15", "bg-sunshine/15", "bg-leaf/15", "bg-peach/30",
  "bg-primary/15", "bg-pink/15", "bg-sunshine/15", "bg-leaf/15", "bg-peach/30",
  "bg-primary/15", "bg-pink/15", "bg-sunshine/15", "bg-leaf/15", "bg-peach/30",
  "bg-primary/15", "bg-pink/15", "bg-sunshine/15", "bg-leaf/15", "bg-peach/30",
  "bg-primary/15",
];

const alphabetWords: Record<string, { word: string; emoji: string }> = {
  A: { word: "Apple", emoji: "🍎" }, B: { word: "Ball", emoji: "⚽" },
  C: { word: "Cat", emoji: "🐱" }, D: { word: "Dog", emoji: "🐕" },
  E: { word: "Elephant", emoji: "🐘" }, F: { word: "Fish", emoji: "🐟" },
  G: { word: "Giraffe", emoji: "🦒" }, H: { word: "Horse", emoji: "🐴" },
  I: { word: "Ice cream", emoji: "🍦" }, J: { word: "Jug", emoji: "🫗" },
  K: { word: "Kite", emoji: "🪁" }, L: { word: "Lion", emoji: "🦁" },
  M: { word: "Mango", emoji: "🥭" }, N: { word: "Nest", emoji: "🪹" },
  O: { word: "Orange", emoji: "🍊" }, P: { word: "Parrot", emoji: "🦜" },
  Q: { word: "Queen", emoji: "👑" }, R: { word: "Rabbit", emoji: "🐰" },
  S: { word: "Sun", emoji: "☀️" }, T: { word: "Tiger", emoji: "🐯" },
  U: { word: "Umbrella", emoji: "☂️" }, V: { word: "Violin", emoji: "🎻" },
  W: { word: "Watch", emoji: "⌚" }, X: { word: "Xylophone", emoji: "🎵" },
  Y: { word: "Yak", emoji: "🐂" }, Z: { word: "Zebra", emoji: "🦓" },
};

const numbers = [
  { num: "1", word: "One", emoji: "☝️", color: "bg-primary/15" },
  { num: "2", word: "Two", emoji: "✌️", color: "bg-pink/15" },
  { num: "3", word: "Three", emoji: "🌷", color: "bg-sunshine/15" },
  { num: "4", word: "Four", emoji: "🍀", color: "bg-leaf/15" },
  { num: "5", word: "Five", emoji: "🖐️", color: "bg-peach/30" },
  { num: "6", word: "Six", emoji: "🎲", color: "bg-primary/15" },
  { num: "7", word: "Seven", emoji: "🌈", color: "bg-pink/15" },
  { num: "8", word: "Eight", emoji: "🐙", color: "bg-sunshine/15" },
  { num: "9", word: "Nine", emoji: "🎯", color: "bg-leaf/15" },
  { num: "10", word: "Ten", emoji: "🔟", color: "bg-peach/30" },
];

const shapes = [
  { emoji: "🔴", name: "Circle", color: "text-secondary" },
  { emoji: "🟡", name: "Square", color: "text-sunshine" },
  { emoji: "🔺", name: "Triangle", color: "text-primary" },
  { emoji: "⭐", name: "Star", color: "text-sunshine" },
  { emoji: "💎", name: "Diamond", color: "text-primary" },
  { emoji: "💜", name: "Heart", color: "text-pink" },
];

const LearningAdventuresSection = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"abc" | "123" | "shapes">("abc");

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Floating school items */}
      {["✏️", "📐", "🔤", "🔢", "📏"].map((item, i) => (
        <motion.span
          key={i}
          className="absolute text-xl opacity-10 pointer-events-none"
          style={{ right: `${5 + i * 20}%`, top: `${5 + (i % 3) * 30}%` }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.7 }}
        >
          {item}
        </motion.span>
      ))}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-semibold text-primary mb-4">
            📚 Learning Adventures
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            ABCs, 123s & More!{" "}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🎓
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Learning is fun at Freedom! Tap letters to discover words, count with us, and explore shapes.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { key: "abc" as const, label: "🔤 Alphabets", color: "bg-primary" },
            { key: "123" as const, label: "🔢 Numbers", color: "bg-sunshine" },
            { key: "shapes" as const, label: "🔺 Shapes", color: "bg-pink" },
          ].map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-bold transition-all ${
                activeTab === tab.key
                  ? `${tab.color} text-primary-foreground shadow-playful`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Alphabet Grid */}
        {activeTab === "abc" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 gap-2">
              {alphabets.map((letter, i) => (
                <motion.button
                  key={letter}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
                  className={`${alphabetColors[i]} rounded-xl w-12 h-12 flex items-center justify-center font-display text-lg font-extrabold text-foreground shadow-card hover:shadow-hover transition-all ${
                    activeLetter === letter ? "ring-2 ring-primary scale-110" : ""
                  }`}
                >
                  {letter}
                </motion.button>
              ))}
            </div>
            {activeLetter && alphabetWords[activeLetter] && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center bg-background rounded-2xl p-6 shadow-card max-w-xs mx-auto"
              >
                <motion.span
                  className="text-6xl block mb-3"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {alphabetWords[activeLetter].emoji}
                </motion.span>
                <p className="font-display text-2xl font-bold text-foreground">
                  <span className="text-primary">{activeLetter}</span> for {alphabetWords[activeLetter].word}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Numbers Grid */}
        {activeTab === "123" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-5 gap-4">
              {numbers.map((n, i) => (
                <motion.div
                  key={n.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${n.color} rounded-2xl p-4 text-center shadow-card cursor-pointer`}
                >
                  <motion.span
                    className="text-3xl block mb-1"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    {n.emoji}
                  </motion.span>
                  <span className="font-display text-3xl font-extrabold text-foreground block">{n.num}</span>
                  <span className="font-body text-xs text-muted-foreground">{n.word}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-8 font-display text-lg text-muted-foreground"
            >
              🎵 <span className="italic">1, 2, 3, 4, 5... once I caught a fish alive!</span> 🐟
            </motion.p>
          </motion.div>
        )}

        {/* Shapes */}
        {activeTab === "shapes" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {shapes.map((shape, i) => (
                <motion.div
                  key={shape.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-background rounded-2xl p-5 text-center shadow-card cursor-pointer"
                >
                  <motion.span
                    className="text-4xl block mb-2"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
                  >
                    {shape.emoji}
                  </motion.span>
                  <span className="font-display text-xs font-bold text-foreground">{shape.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LearningAdventuresSection;
