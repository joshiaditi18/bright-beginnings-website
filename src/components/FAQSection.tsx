import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age groups do you accept at Freedom Preschool?",
    answer: "We accept children from 1.5 years to 6 years. Our programs include Playgroup (1.5–2.5 yrs), Nursery (2.5–3.5 yrs), Junior KG (3.5–4.5 yrs), Senior KG (4.5–6 yrs), and full-day Daycare.",
  },
  {
    question: "Are the educators qualified and experienced?",
    answer: "Yes! All our educators are certified professionals with extensive experience in early childhood education. We maintain a low teacher-student ratio to ensure personalized attention for every child.",
  },
  {
    question: "What makes Freedom Preschool's curriculum different?",
    answer: "Our curriculum blends play-based learning with holistic development — emphasizing creativity, critical thinking, Indian values, and emotional intelligence. Every activity is designed for multiple dimensions of growth.",
  },
  {
    question: "Can I visit the school before enrolling my child?",
    answer: "Absolutely! We encourage parents to visit our facility for a firsthand look at our nurturing environment. Contact us to schedule a school tour and interaction session.",
  },
  {
    question: "How do you ensure the safety of children?",
    answer: "Safety is our top priority. We have CCTV surveillance, sanitized classrooms, child-proofed furniture, secure entry/exit, trained staff, and emergency protocols in place.",
  },
  {
    question: "What is the admission process?",
    answer: "It's simple! Fill out an enquiry form, visit the school for a tour, submit required documents (birth certificate, Aadhar, photos), and complete fee payment. Admissions are open year-round!",
  },
  {
    question: "Do you provide meals and snacks?",
    answer: "Yes, our daycare program includes nutritious, freshly prepared meals and snacks. For half-day programs, we provide mid-morning snacks. We accommodate dietary restrictions upon request.",
  },
  {
    question: "How can parents stay involved in their child's education?",
    answer: "We promote active parent involvement through regular parent-teacher meetings, progress updates, WhatsApp communication, special event days, and an open-door policy for school visits.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative doodles */}
      <motion.span
        className="absolute top-16 right-12 text-4xl opacity-10 hidden md:block"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        ❓
      </motion.span>
      <svg className="absolute bottom-16 left-8 w-14 h-14 text-primary/10 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="5 6" strokeLinecap="round">
        <path d="M30 70 Q50 20 70 70" />
        <circle cx="50" cy="78" r="4" fill="currentColor" />
      </svg>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block rounded-full bg-sunshine/15 px-4 py-1.5 font-body text-sm font-semibold text-sunshine-foreground mb-4">
            ❓ FAQs
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions{" "}
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💬
            </motion.span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Got questions? We've got answers! Here are the most common things parents ask us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-2xl border-2 border-border/50 shadow-card px-6 overflow-hidden data-[state=open]:border-primary/30 data-[state=open]:shadow-hover transition-all"
              >
                <AccordionTrigger className="font-display text-base font-bold text-foreground hover:text-primary py-5 hover:no-underline">
                  <span className="flex items-center gap-3 text-left">
                    <span className="text-lg">
                      {["🎓", "👩‍🏫", "📖", "🏫", "🛡️", "📝", "🍱", "👨‍👩‍👧"][i]}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
