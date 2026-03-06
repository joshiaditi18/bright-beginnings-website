import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const galleryItems = [
  { src: "/photos/annual1.jpeg", title: "Annual Day 1" },
  { src: "/photos/annual2.jpeg", title: "Annual Day 2" },
  { src: "/photos/annual3.jpeg", title: "Annual Day 3" },
  { src: "/photos/annual4.jpeg", title: "Annual Day 4" },
  { src: "/photos/annual5.jpeg", title: "Annual Day 5" },
  { src: "/photos/annual6.jpeg", title: "Annual Day 6" },
  { src: "/photos/anuual7.jpeg", title: "Annual Day 7" },
  { src: "/photos/critmas.jpeg", title: "Christmas 1" },
  { src: "/photos/critmas2.jpeg", title: "Christmas 2" },
  { src: "/photos/ekadashi1.jpeg", title: "Diwali 1" },
  { src: "/photos/ekadashi2.jpeg", title: "Diwali 2" },
  { src: "/photos/ekadashi3.jpeg", title: "Diwali 3" },
  { src: "/photos/ekadashi4.jpeg", title: "Diwali 4" },
  { src: "/photos/ekadashi5.jpeg", title: "Diwali 5" },
  { src: "/photos/ekadashi6.jpeg", title: "Diwali 6" },
  { src: "/photos/ekadasi5.jpeg", title: "Diwali 7" },
  { src: "/photos/ganeshjayanti1.jpeg", title: "Ganesh Jayanti 1" },
  { src: "/photos/ganeshjayanti2.jpeg", title: "Ganesh Jayanti 2" },
  { src: "/photos/ganeshjayanti3.jpeg", title: "Ganesh Jayanti 3" },
  { src: "/photos/ganeshjayanti4.jpeg", title: "Ganesh Jayanti 4" },
  { src: "/photos/janmasatmi.2.jpeg", title: "Janmashtami 1" },
  { src: "/photos/janmasatmi.3.jpeg", title: "Janmashtami 2" },
  { src: "/photos/janmasatmi.jpeg", title: "Janmashtami 3" },
  { src: "/photos/janmasatmi4.jpeg", title: "Janmashtami 4" },
  { src: "/photos/janmasatmi5.jpeg", title: "Janmashtami 5" },
  { src: "/photos/janmasatmi6.jpeg", title: "Janmashtami 6" },
  { src: "/photos/janmasatmi7.jpeg", title: "Janmashtami 7" },
  { src: "/photos/pola1.jpeg", title: "Pola Festival 1" },
  { src: "/photos/pola2.jpeg", title: "Pola Festival 2" },
  { src: "/photos/pola3.jpeg", title: "Pola Festival 3" },
  { src: "/photos/pola4.jpeg", title: "Pola Festival 4" },
  { src: "/photos/pola5.jpeg", title: "Pola Festival 5" },
  { src: "/photos/pola6.jpeg", title: "Pola Festival 6" },
  { src: "/photos/republic1.jpeg", title: "Independence Day 1" },
  { src: "/photos/republic2.jpeg", title: "Independence Day 2" },
  { src: "/photos/tradition1.jpeg", title: "Tradition 1" },
  { src: "/photos/yoga.jpeg", title: "Yoga Activity" },
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

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryItems.map((item, i) => (
                <CarouselItem key={item.src} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all cursor-pointer group"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                      <p className="text-white text-xs font-semibold text-center">{item.title}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
