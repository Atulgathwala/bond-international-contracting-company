import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
let img1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925798/ftwzaxiuezirvcxgl20k.png";
let img2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925798/j6i0pqxlwp2iqljovzcq.png";
let img3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925798/w7fr2sopaw0sqtdxsqqg.png";
let img4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925800/cjpgx5bhwmkopjxy4zzp.png";
let img5 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925802/qr5y5g1mfss1rhckjy5o.png";
let img6 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925797/lkwddrumwgpcfprftbke.png";
let img7 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776925792/c2bycslffch7wup6cmdp.png";

const HeroSection = () => {
  const slides = [
    {
      image: img1,
      tag: "WELCOME TO BIC",
      title1: "Reliable",
      title2: "Transportation Services",
      desc: "Safe and timely transportation solutions for manpower, heavy equipment and industrial materials.",
    },
    {
      image: img2,
      tag: "WELCOME TO BIC",
      title1: "Heavy Equipment",
      title2: "For Every Project",
      desc: "Excavators, cranes, loaders and machinery rentals available with skilled operators.",
    },
    {
      image: img3,
      tag: "WELCOME TO BIC",
      title1: "Premium",
      title2: "Material Supply",
      desc: "Construction materials, pipes, fittings and industrial tools supplied on time.",
    },
    {
      image: img4,
      tag: "WELCOME TO BIC",
      title1: "Affordable",
      title2: "Car Rental Services",
      desc: "Professional rental vehicles for staff movement, executives and project transport.",
    },
    {
      image: img5,
      tag: "WELCOME TO BIC",
      title1: "Modern",
      title2: "Portable Cabins",
      desc: "Office cabins, site cabins and labor accommodations with premium finishing.",
    },
    {
      image: img6,
      tag: "WELCOME TO BIC",
      title1: "Trusted",
      title2: "Manpower Supply",
      desc: "Skilled and unskilled manpower solutions for every industrial requirement.",
    },
    {
      image: img7,
      tag: "WELCOME TO BIC",
      title1: "Strong",
      title2: "Contracting Solutions",
      desc: "Complete industrial support for construction, logistics and workforce management.",
    },
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="absolute inset-0 z-0"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-cover bg-center bg-no-repeat scale-110 animate-[zoom_6s_linear_infinite]"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/25"></div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center px-6 md:px-16">
              <div className="max-w-3xl text-white">
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-[#C9A14A] uppercase tracking-[4px] text-sm mb-4 flex items-center gap-3"
                >
                  <span className="w-10 h-0.5 bg-[#C9A14A]"></span>
                  {item.tag}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="text-4xl md:text-7xl font-bold leading-tight"
                >
                  {item.title1} <br />
                  <span className="text-[#C9A14A]">{item.title2}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1 }}
                  className="mt-6 text-gray-200 text-lg leading-8 max-w-2xl"
                >
                  {item.desc}
                </motion.p>

                {/* <motion.div
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  <button className="mt-8 px-8 py-4 bg-[#C9A14A] text-black rounded-md font-semibold hover:scale-105 transition duration-300 shadow-xl">
                    Discover More →
                  </button>
                </motion.div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;