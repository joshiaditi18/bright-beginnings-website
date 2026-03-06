import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
          <h3 className="font-display text-xl font-bold mb-3">Vision & Mission</h3>
          <p className="font-body text-primary-foreground/80 leading-relaxed">
            Vision: To be a place where every young mind is nurtured with love, confidence, and a lifelong love for learning.<br/>
            Mission: Provide joyful, play-based learning that builds social, emotional, and cognitive skills. Offer dependable and caring full-day daycare services that support families. Ensure safety, hygiene, and family-focused communication every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto text-center bg-gradient-purple rounded-3xl p-8 shadow-bold text-primary-foreground"
        >
          <motion.span
            className="text-3xl block mb-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📜
          </motion.span>
          <h3 className="font-display text-xl font-bold mb-3">History of the School</h3>
          <p className="font-body text-primary-foreground/80 leading-relaxed">
            Freedom Park Preschool & Nursery was established in 2016 with a mission to provide accessible, high-quality early childhood education and dependable daycare services for working parents in the Wadmukhwadi and Alandi areas of Pune. Since inception, the center has grown into one of the well-regarded early learning options locally, known for its friendly staff and child-centric approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
        
              <h4 className="font-display text-xl font-bold mb-2">Principal's Message</h4>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Welcome to Freedom Park! At Freedom Park Preschool & Nursery, we place your child's happiness and development at the center of everything we do. Our programs are built to nurture creativity, curiosity, and confidence while ensuring that every child feels safe, respected, and joyful. We aim to partner closely with parents through open communication, regular updates, and shared goals for each child's growth.
              </p>
              <p className="font-body text-sm font-semibold">Principal, Freedom Park Preschool & Nursery<br/>Reema Sharma</p>
            </div>
            <div className="text-center">

              <h4 className="font-display text-xl font-bold mb-2">Founder</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                Freedom Park Preschool & Nursery was founded by Deepak Lunavat, who leads the centre with dedication to nurturing young learners and offering families trusted preschool and daycare support. Her commitment to quality early childhood care shapes the centre's philosophy and daily routines.
              <br/>Founder Deepak Lunavat</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Achievements</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto mb-8"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/a1.jpeg"
                  alt="Achievement 1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/a2.jpeg"
                  alt="Achievement 2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/a3.jpeg"
                  alt="Achievement 3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/a4.jpeg"
                  alt="Achievement 4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/b1.jpg"
                  alt="Achievement 5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <motion.img
                  src="/photos/b2.jpg"
                  alt="Achievement 6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-64 object-cover rounded-lg shadow-card hover:shadow-hover transition-all cursor-pointer"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <ul className="space-y-4 text-center">
            <li className="font-body text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">⭐ Rated 4.7 on Justdial</span> by local parents from the community.
            </li>
            <li className="font-body text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">💖 Highly appreciated</span> for kind, caring staff and a welcoming learning environment.
            </li>
            <li className="font-body text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">🤝 Trusted local preschool and daycare</span> with strong parent-center communication.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 max-w-2xl mx-auto text-center bg-gradient-purple rounded-3xl p-8 shadow-bold text-primary-foreground"
        >
          <motion.span
            className="text-3xl block mb-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.span>
          <h3 className="font-display text-xl font-bold mb-3">Affiliation & Accreditation</h3>
          <p className="font-body text-primary-foreground/80 leading-relaxed">
            Freedom Park Preschool & Nursery operates as an independent early childhood education and daycare center. It follows age-appropriate early learning practices designed to develop foundational skills and confidence in young children. While specific external board accreditation is not listed publicly, the programs align with recognized early childhood educational standards.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h4 className="font-display text-lg font-bold mb-4 text-center">🏫 Facilities</h4>
              <ul className="space-y-2">
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Bright, child-friendly classrooms
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Indoor activity area
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Safe outdoor playground
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  CCTV surveillance
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  First-aid facility
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h4 className="font-display text-lg font-bold mb-4 text-center">⚽ Sports & Physical Activities</h4>
              <ul className="space-y-2">
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Kathak classes for girls of 2.5 years and above
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Karate classes for both girls and boys
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Free play
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Music and movement
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Balancing and coordination activities
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-6 shadow-card">
              <h4 className="font-display text-lg font-bold mb-4 text-center">🚐 Transport Facility</h4>
              <p className="font-body text-sm text-muted-foreground">
                Safe and reliable transportation services available for students, ensuring convenient pickup and drop-off to and from the preschool.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
