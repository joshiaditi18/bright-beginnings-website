import { motion } from "framer-motion";
import { Phone, GraduationCap } from "lucide-react";

const StickyAdmissionBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-sunshine shadow-bold"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4 sm:gap-8">
        <motion.a
          href="#admissions"
          className="flex items-center gap-2 bg-primary rounded-full px-5 py-2.5 font-body text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GraduationCap size={16} />
          <span>Admission Enquiry</span>
        </motion.a>
        {/* Call Now removed */}
      </div>
    </motion.div>
  );
};

export default StickyAdmissionBar;
