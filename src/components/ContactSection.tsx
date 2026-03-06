import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import QRScanner from "./QRScanner";

const ContactSection = () => {
  return (
    <div id="contact" className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Side - Address, Email, Phone & QR Scanner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* QR Scanner Section */}
          <QRScanner />
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Address
              </h4>
              <a
                href="https://www.google.com/maps/place/Freedom+Park+Pre+School"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-semibold hover:underline"
              >
                Padmavatinagari, Wadmukhwadi, Behind KK Care Hospital,
                Alandi Road, Pune – 412105, Maharashtra
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-pink/10 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-pink" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Email
              </h4>
              <a
                href="mailto:freedomparkpreschool2016@gmail.com"
                className="text-sm text-pink font-semibold hover:underline break-all"
              >
                freedomparkpreschool2016@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
              <Phone size={20} className="text-green-600" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">
                Phone / WhatsApp
              </h4>
              <a
                href="tel:9356860684"
                className="text-sm text-green-600 font-semibold hover:underline"
              >
                9356860684
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Freedom Park Preschool Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0!2d73.8835634!3d18.654807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c754126182fd%3A0xa85544225213eab5!2sFreedom%20Park%20Pre%20School!5e0!3m2!1sen!2sin!4v1707904800000"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

      </div>
    </div>
  );
};

export default ContactSection;
