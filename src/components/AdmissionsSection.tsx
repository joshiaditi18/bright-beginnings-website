import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { step: "1", text: "Fill out the enquiry or admission form", emoji: "📝" },
  { step: "2", text: "Visit the school for a tour & interaction", emoji: "🏫" },
  { step: "3", text: "Submit required documents", emoji: "📋" },
  { step: "4", text: "Complete fee payment & enrollment", emoji: "🎉" },
];

const documents = [
  "Birth certificate",
  "Aadhar card of child & parents",
  "4 passport-size photographs",
  "Previous school TC (if applicable)",
  "Medical/immunization records",
];

const AdmissionsSection = () => {
  return (
    <section id="admissions" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-semibold text-primary mb-4">
            🎒 Admissions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Begin Your Child's Journey{" "}
            <motion.span
              className="inline-block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Admissions are open! Follow these simple steps to enroll your child at Freedom Preschool.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Admission Process</h3>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background shadow-card cursor-pointer"
                >
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {s.emoji}
                  </motion.span>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-display text-sm font-bold text-primary-foreground">{s.step}</span>
                  </div>
                  <p className="font-body text-sm text-foreground pt-2">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileText size={20} className="text-primary" />
              Required Documents
            </h3>
            <div className="space-y-3 mb-8">
              {documents.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                >
                  <CheckCircle size={16} className="text-leaf shrink-0" />
                  {d}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-secondary px-8 py-4 font-body text-base font-bold text-secondary-foreground shadow-playful transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Enroll Your Child 🎓
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
