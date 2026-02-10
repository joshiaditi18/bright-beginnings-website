import { motion } from "framer-motion";

const galleryItems = [
  { label: "Colorful Classroom", color: "bg-primary/10", emoji: "🎨", hoverColor: "hover:bg-primary/20" },
  { label: "Outdoor Play Area", color: "bg-leaf/10", emoji: "🌳", hoverColor: "hover:bg-leaf/20" },
  { label: "Art & Craft Time", color: "bg-sunshine/15", emoji: "✂️", hoverColor: "hover:bg-sunshine/25" },
  { label: "Story Circle", color: "bg-pink/10", emoji: "📖", hoverColor: "hover:bg-pink/20" },
  { label: "Music & Dance", color: "bg-primary/10", emoji: "🎵", hoverColor: "hover:bg-primary/20" },
  { label: "Annual Day Event", color: "bg-sunshine/15", emoji: "🎉", hoverColor: "hover:bg-sunshine/25" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      {/* Floating mascot */}
      <motion.div
        className="absolute top-10 right-10 text-5xl hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🐻
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-pink/15 px-4 py-1.5 font-body text-sm font-semibold text-pink mb-4">
            📸 Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse Into Our World{" "}
            <motion.span
              className="inline-block"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            See the joy, creativity, and learning happening every day at Freedom Preschool.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className={`aspect-square rounded-2xl ${item.color} ${item.hoverColor} flex items-center justify-center shadow-card hover:shadow-hover transition-all cursor-pointer group`}
            >
              <div className="text-center p-4">
                <motion.span
                  className="text-5xl mb-3 block"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {item.emoji}
                </motion.span>
                <span className="font-display text-sm font-bold text-foreground">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center font-body text-sm text-muted-foreground mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          📸 Upload your real photos to make this gallery shine!
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
