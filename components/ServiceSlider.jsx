import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const serviceData = [
  {
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites using React, Next.js, and modern technologies.",
    icon: FaCode,
  },
  {
    title: "Mobile Application",
    description:
      "Cross-platform mobile apps for Android & iOS with smooth UI and high performance.",
    icon: FaMobileAlt,
  },
  {
    title: "Backend & API Development",
    description:
      "Secure backend systems, REST APIs, authentication, and database management.",
    icon: FaServer,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store setup with payment integration, admin panel, and dashboards.",
    icon: FaShoppingCart
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website ranking with technical SEO, speed optimization, and structure.",
    icon: FaSearch 
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your business with targeted ads, content strategy, and conversion optimization.",
    icon: FaChartLine
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
