import { motion } from "framer-motion";
import { Users, ShieldCheck, Blocks, Building } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Experienced & Caring Teachers",
    desc: "Our trained educators bring patience, warmth, and expertise to every child's learning journey.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    desc: "CCTV monitoring, sanitized spaces, and secure premises ensure your child's safety at all times.",
    color: "bg-leaf/10 text-leaf",
  },
  {
    icon: Blocks,
    title: "Activity-Based Learning",
    desc: "We blend play with purpose — art, music, science experiments, and outdoor activities every day.",
    color: "bg-sunshine/15 text-sunshine-foreground",
  },
  {
    icon: Building,
    title: "Child-Friendly Infrastructure",
    desc: "Bright classrooms, soft play zones, age-appropriate furniture, and a mini library for budding readers.",
    color: "bg-pink/10 text-pink",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-leaf/15 px-4 py-1.5 font-body text-sm font-semibold text-leaf mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Child Deserves the Best
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Here's why hundreds of families trust Freedom Preschool for their child's early years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl bg-background shadow-card hover:shadow-hover transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${r.color}`}>
                <r.icon size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{r.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
