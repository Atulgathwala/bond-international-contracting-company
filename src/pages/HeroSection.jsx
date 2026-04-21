import React, { useEffect, useRef } from "react";
import indexImage from "../assets/images/landingPage.png";
import { gsap } from "gsap";

const HeroSection = () => {
  const titleRef = useRef();
  const textRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        textRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        btnRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      className="h-[95vh] w-full bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: `url(${indexImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 text-white max-w-3xl">

        {/* Top Label with Accent Line */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#C9A14A]"></div>
          <p className="text-sm tracking-wider uppercase text-[#C9A14A] font-semibold">
            Welcome to BIC
          </p>
        </div>

        {/* Heading */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Heavy Equipment <br />
          Solutions{" "}
          <span className="text-[#C9A14A]">
            For Every Project
          </span>
        </h1>

        {/* Description */}
        <p
          ref={textRef}
          className="mt-5 text-gray-200 max-w-xl"
        >
          We provide reliable contracting services including manpower,
          machinery rental, and material supply for projects of all sizes.
        </p>

        {/* Button */}
        <div ref={btnRef} className="mt-8">
          <button className="bg-[#C9A14A] text-black px-6 py-3 rounded-md hover:scale-105 transition font-semibold">
            Discover More →
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;