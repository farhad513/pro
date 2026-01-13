import { motion } from "framer-motion";
import {
  RiWhatsappLine,
  RiMailLine,
  RiFacebookCircleLine,
  RiPhoneLine,
  RiLinkedinLine,
  RiTelegramLine,
} from "react-icons/ri";

const contactData = [
  {
    name: "WhatsApp",
    icon: RiWhatsappLine,
    link: "https://wa.me/8801518690471",
    color: "hover:text-green-400",
  },
  {
    name: "Email",
    icon: RiMailLine,
    link: "mailto:mdfarhad0401@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "Messenger",
    icon: RiFacebookCircleLine,
    link: "https://m.me/farhad250",
    color: "hover:text-blue-400",
  },
  {
    name: "Call",
    icon: RiPhoneLine,
    link: "tel:+8801518690471",
    color: "hover:text-yellow-400",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/farhad513/",
    color: "hover:text-sky-400",
  },
  {
    name: "Telegram",
    icon: RiTelegramLine,
    link: "https://t.me/",
    color: "hover:text-cyan-400",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-18 flex items-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="text-center mb-14"
        >
          <h2 className="h2 mb-4">
            Let’s <span className="text-accent">Connect</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/60">
            Choose any platform below and connect with me instantly.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                variants={fadeIn}
                initial="hidden"
                animate="show"
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-105 hover:border-accent ${item.color}`}
              >
                <Icon className="text-4xl transition-all duration-300 group-hover:scale-110" />
                <span className="text-lg font-medium">{item.name}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2">
          {contactData.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`snap-center min-w-[220px] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 active:scale-95 ${item.color}`}
              >
                <Icon className="text-4xl" />
                <span className="text-lg font-medium">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
