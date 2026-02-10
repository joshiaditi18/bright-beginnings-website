import { motion } from "framer-motion";

const galleryItems = [
  { label: "Colorful Classroom", color: "bg-primary/10" },
  { label: "Outdoor Play Area", color: "bg-leaf/10" },
  { label: "Art & Craft Time", color: "bg-sunshine/15" },
  { label: "Story Circle", color: "bg-pink/10" },
  { label: "Music & Dance", color: "bg-primary/10" },
  { label: "Annual Day Event", color: "bg-sunshine/15" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-pink/15 px-4 py-1.5 font-body text-sm font-semibold text-pink mb-4">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse Into Our World
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
              className={`aspect-square rounded-2xl ${item.color} flex items-center justify-center shadow-card hover:shadow-hover transition-all cursor-pointer group`}
            >
              <div className="text-center p-4">
                <span className="text-4xl mb-2 block group-hover:animate-wiggle">
                  {["🎨", "🌳", "✂️", "📖", "🎵", "🎉"][i]}
                </span>
                <span className="font-display text-sm font-bold text-foreground">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-muted-foreground mt-8">
          📸 Upload your real photos to make this gallery shine!
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
