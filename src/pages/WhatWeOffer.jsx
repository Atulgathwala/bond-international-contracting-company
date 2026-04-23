import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



// ? steel Images


// ? Material
let consImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926270/lqulp8g8u16puyylwppj.png";
let consImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926269/lei6mpkau47pmkox0mgb.png";
let consImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926268/a4cve7df9ikqb4mxyt2m.png";
let consImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926268/c55lewbahgl1tkixzyuy.png";

// ? Transportation
let transImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926098/bexwtizfgtbynen1ds7u.png";
let transImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926098/ljyjtdug0vuqihk4v0mv.png";
let transImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926097/lkh7ohpbvb7w61svaymg.png";
let transImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926096/ntat9wiopmwog4cudkbm.png";

// ? Heavy equipments
let heavyImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926131/dnn7bmr5o23sg0mr2rai.png";
let heavyImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926131/yektsuqbl5pc8jxugbd3.png";
let heavyImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926131/oy7vti06nxlfurzgzk7k.png";
let heavyImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926130/kbnftbfvzcz5jtj5mepu.png";

// ? Car rentals
let carrentalImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926176/kntp3ludktjjrkwsrmiw.png";
let carrentalImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926176/rnig8s0hermipjthkoa9.png";
let carrentalImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926175/g0kzbi6obbo0j7d4djk4.png";
let carrentalImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926174/ipeva4bej2lidpvadxeg.png";

// ? Portable cabins
let portableImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926192/iqyapuvgeu9iur49vhbp.png";
let portableImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926192/q3pkiz1xmyza6pfuaww0.png";
let portableImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926192/gwpdpnrud3pca0okifqy.png";
let portableImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926192/gwpdpnrud3pca0okifqy.png";

// ? Manpower
let manImg1 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926211/kpixquc6qdmibs4l2tnj.jpg";
let manImg2 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926210/izmzmokggjbka8a9p8lv.jpg";
let manImg3 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926210/ogvrdndc62zimgviacdj.jpg";
let manImg4 = "https://res.cloudinary.com/dasa3kzyf/image/upload/f_auto,q_auto,w_1200/v1776926210/nsdnbvluveelscwdpkqe.webp";









const services = [
  {
    title: "Transportation",
    desc: "Reliable transportation solutions for industrial goods, machinery movement, staff shifting and project logistics with timely delivery support.",
    img1: transImg1,
    img2: transImg2,
    img3: transImg3,
    img4: transImg4,
  },

  {
    title: "Heavy Equipment",
    desc: "Wide range of heavy equipment available for rental including cranes, excavators, loaders and site machinery with expert operators.",
    img1: heavyImg1,
    img2: heavyImg2,
    img3: heavyImg3,
    img4: heavyImg4,
  },

  {
    title: "Material Supply",
    desc: "Complete supply of construction materials, industrial tools, safety products, pipes, fittings and electrical items for all project needs.",
    img1: consImg1,
    img2: consImg2,
    img3: consImg3,
    img4: consImg4,
  },

  {
    title: "Car Rental",
    desc: "Affordable and premium car rental services for companies, site visits, airport transfers and daily transportation requirements.",
    img1: carrentalImg1,
    img2: carrentalImg2,
    img3: carrentalImg3,
    img4: carrentalImg4,
  },

  {
    title: "Portable Cabins",
    desc: "Modern portable cabins for office space, labor accommodation, storage and temporary facilities with quality finishing.",
    img1: portableImg1,
    img2: portableImg2,
    img3: portableImg3,
    img4: portableImg4,
  },

  {
    title: "Man Power",
    desc: "Skilled and unskilled manpower supply including operators, helpers, technicians, welders and project workforce on demand.",
    img1: manImg1,
    img2: manImg2,
    img3: manImg3,
    img4: manImg4,
  },
];

export default function TrendyServicesShowcase() {
  const refs = useRef([]);
useEffect(() => {
  refs.current.forEach((card) => {
    const diamonds = card.querySelectorAll(".diamond-box");
    const txt = card.querySelector(".text-box");

    /* 4 boxes roll + come together once */
    gsap.fromTo(
      diamonds,
      {
        opacity: 0,
        scale: 0.4,
        rotate: -180,
        x: (i) => {
          if (i === 0) return 0;       // top
          if (i === 1) return -220;   // left
          if (i === 2) return 220;    // right
          return 0;                   // bottom
        },
        y: (i) => {
          if (i === 0) return -220;
          if (i === 1) return 0;
          if (i === 2) return 0;
          return 220;
        },
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 45,
        x: 0,
        y: 0,
        duration: 1.8,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      }
    );

    /* text animation */
    gsap.fromTo(
      txt,
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      }
    );
  });

  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
}, []);
  return (
    <section
      id="services"
      className="text-[var(--color-primary)] py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="text-center mb-16">
        <p className="text-[var(--color-accent)] tracking-[0.35em] text-sm">
          OUR SERVICES
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-3">
          Industrial{" "}
          <span className="text-[var(--color-accent)]">Solutions</span>
        </h2>
      </div>

      {services.map((item, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className="relative max-w-7xl mx-auto min-h-screen border border-white/15 rounded-[32px] mb-14 px-6 md:px-14 py-10 grid md:grid-cols-2 items-center bg-white/[0.03] backdrop-blur-sm"
        >
          {/* IMAGE SECTION */}
          <div
            className={`img-box relative w-[275px] h-[275px] md:w-[500px] md:h-[500px] mx-auto ${
              index % 2 !== 0 ? "md:order-2 md:ml-auto" : ""
            }`}
          >
            {/* Top */}
            <div className="diamond-box absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[110px] md:w-[200px] md:h-[200px] rotate-45 rounded-[14px] sm:rounded-[24px] overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl">
              <img
                src={item.img1}
                alt=""
                className="w-full h-full object-cover -rotate-45 scale-150 hover:scale-[1.7] duration-700"
              />
            </div>

            {/* Left */}
            <div className="diamond-box absolute top-1/2 left-0 -translate-y-1/2 w-[110px] h-[110px] md:w-[200px] md:h-[200px] rotate-45 rounded-[14px] sm:rounded-[24px] overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl">
              <img
                src={item.img2}
                alt=""
                className="w-full h-full object-cover -rotate-45 scale-150 hover:scale-[1.7] duration-700"
              />
            </div>

            {/* Right */}
            <div className="diamond-box absolute top-1/2 right-0 -translate-y-1/2 w-[110px] h-[110px] md:w-[200px] md:h-[200px] rotate-45 rounded-[14px] sm:rounded-[24px] overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl">
              <img
                src={item.img3}
                alt=""
                className="w-full h-full object-cover -rotate-45 scale-150 hover:scale-[1.7] duration-700"
              />
            </div>

            {/* Bottom */}
            <div className="diamond-box absolute bottom-0 left-1/2 -translate-x-1/2 w-[110px] h-[110px] md:w-[200px] md:h-[200px] rotate-45 rounded-[14px] sm:rounded-[24px] overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl">
              <img
                src={item.img4}
                alt=""
                className="w-full h-full object-cover -rotate-45 scale-150 hover:scale-[1.7] duration-700"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className={`text-box ${index % 2 !== 0 ? "md:order-1" : ""}`}>
            <div className="mt-10">
              <span className="inline-block px-4 py-2 rounded-full bg-amber-400/10 text-amber-400 text-xs sm:tracking-[0.25em]">
                TRUSTED SERVICE
              </span>
            </div>

            <h3 className="text-4xl md:text-6xl font-bold leading-tight mt-5">
              {item.title}
            </h3>

            <p className="text-slate-500 text-lg leading-8 mt-6 max-w-xl">
              {item.desc}
            </p>

            <p className="text-slate-400 mt-5 leading-8 max-w-xl">
              We focus on timely execution, premium quality standards and
              customer satisfaction through reliable solutions tailored for every
              requirement.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}