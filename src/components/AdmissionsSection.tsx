import { motion } from "framer-motion";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  { step: "1", text: "Fill out the enquiry or admission form" },
  { step: "2", text: "Visit the school for a tour & interaction" },
  { step: "3", text: "Submit required documents" },
  { step: "4", text: "Complete fee payment & enrollment" },
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
            Admissions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Begin Your Child's Journey
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
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-4 p-4 rounded-xl bg-background shadow-card">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="font-display text-sm font-bold text-primary-foreground">{s.step}</span>
                  </div>
                  <p className="font-body text-sm text-foreground pt-2">{s.text}</p>
                </div>
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
              {documents.map((d) => (
                <div key={d} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <CheckCircle size={16} className="text-leaf shrink-0" />
                  {d}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-secondary px-8 py-4 font-body text-base font-bold text-secondary-foreground shadow-playful hover:shadow-hover hover:-translate-y-0.5 transition-all"
            >
              Enroll Your Child
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
