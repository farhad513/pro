import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/avt-1.png",
    name: "Md. Rahim Uddin",
    position: "Business Owner",
    message:
      "Farhad did an outstanding job on our website. The UI, performance, and backend system were all perfectly optimized. Highly recommended!",
  },
  {
    image: "/avt-2.png",
    name: "Nusrat Jahan",
    position: "Startup Founder",
    message:
      "Amazing experience! From design to development, everything was handled professionally. The final product exceeded my expectations.",
  },
  {
    image: "/avt-1.png",
    name: "Tanvir Ahmed",
    position: "E-commerce Entrepreneur",
    message:
      "He transformed our idea into a fully functional platform. Very skilled, reliable, and fast. Will definitely work again!",
  },
];


const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-6 md:px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-3 mx-auto rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg font-semibold">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
