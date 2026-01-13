import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

// services data
export const serviceData = [
  {
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites using React, Next.js, and modern technologies.",
    icon: <FaCode />,
  },
  {
    title: "Mobile Application",
    description:
      "Cross-platform mobile apps for Android & iOS with smooth UI and high performance.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure backend systems, REST APIs, authentication, and database management.",
    icon: <FaServer />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store setup with payment integration, admin panel, and dashboards.",
    icon: <FaShoppingCart />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website ranking with technical SEO, speed optimization, and structure.",
    icon: <FaSearch />,
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with targeted ads, content strategy, and conversion optimization.",
    icon: <FaChartLine />,
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center relative">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I provide complete digital solutions — from design to development,
              deployment, and growth. My focus is building scalable products that
              deliver real business value.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
