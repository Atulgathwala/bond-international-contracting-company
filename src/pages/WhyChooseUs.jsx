import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import affordablePrice from "../assets/iconss/affordablePrice.png"
import h24x7support from "../assets/iconss/h24x7support.png"
import fastdelivery from "../assets/iconss/fastdelivery.png"
import modernequipment from "../assets/iconss/modernequipment.png"
import safetyfirst from "../assets/iconss/safetyfirst.png"
import expertoperators from "../assets/iconss/expertoperators.png"

const features = [
  {
    title: "Modern Equipment",
    desc: "Latest heavy machinery ensuring efficiency, safety, and performance.",
    img:modernequipment
  },
  {
    title: "Expert Operators",
    desc: "Highly trained and certified professionals for smooth execution.",
     img:expertoperators
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock service to ensure zero downtime in your projects.",
    img:h24x7support
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive rates with high-quality service and reliability.",
    img:affordablePrice
  },
  {
    title: "Quick Delivery",
    desc: "Fast logistics and deployment across all major project sites.",
    img:fastdelivery
  },
  {
    title: "Safety First",
    desc: "Strict adherence to safety and international standards.",
    img:safetyfirst
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // SECTION TITLE ANIMATION
    gsap.fromTo(
      ".why-title",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // CARDS ANIMATION (STAGGER)
    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" py-24 px-6"
    >
      {/* 🔥 TITLE */}
      <div className="text-center mb-16">
        <h2 className="why-title text-5xl md:text-6xl font-bold text-[var(--color-primary)]">
          Why{" "}
          <span className="text-[var(--color-accent)]">
            Choose Us
          </span>
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
          Delivering excellence in heavy equipment rental, transportation, and
          infrastructure support across the region.
        </p>
      </div>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="
            p-8 rounded-2xl 
            bg-[var(--color-primary)] 
            border border-[var(--color-accent)]/20 
            hover:border-[var(--color-accent)]
            hover:shadow-[0_0_25px_rgba(201,161,74,0.35)]
            transition duration-300
            group
            relative
            "
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--color-accent)] text-black font-bold mb-6">
              {index + 1}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--color-accent)] transition">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
            <img src={item.img} alt={item.title} className="absolute h-[100px] top-5 right-4" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;