import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let constructionVideo = "https://res.cloudinary.com/dasa3kzyf/video/upload/f_auto,q_auto:low,w_1280/o9gr4t7ggpcf51p3oynp.mp4";
import logo1 from "../assets/companieslogo/logo1.png";
import logo2 from "../assets/companieslogo/logo2.png";
import logo3 from "../assets/companieslogo/logo3.png";
import logo4 from "../assets/companieslogo/logo4.png";
import logo5 from "../assets/companieslogo/logo5.png";
import logo6 from "../assets/companieslogo/logo6.png";
import logo7 from "../assets/companieslogo/logo8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const HappyClients = () => {
  const textRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // TEXT ANIMATION
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#clients",
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // INFINITE MARQUEE
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });
  }, []);

  return (
    <section
      id="clients"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={constructionVideo} type="video/mp4" />
      </video>

      {/* 🌫 DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen py-24">
        
        {/* 🔥 TEXT */}
        <div ref={textRef} className="text-center px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our{" "}
            <span className="text-[var(--color-accent)]">
              Happy Clients
            </span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Trusted by leading construction and infrastructure companies across
            the Middle East.
          </p>
        </div>

        {/* 🔥 LOGO MARQUEE */}
        <div className="overflow-hidden mt-16">
          <div
            ref={marqueeRef}
            className="flex gap-12 w-max items-center"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                w-35 h-24 
                flex items-center justify-center 
                bg-[var(--color-dark)] 
                rounded-xl 
                border border-[var(--color-accent)]/30 
                hover:border-[var(--color-accent)] 
                hover:shadow-[0_0_25px_rgba(201,161,74,0.35)]
                transition duration-300
                "
              >
                <img
                  src={logo}
                  alt="client"
                  className="
                  rounded-md
                  h-20 object-contain 
                  grayscale opacity-70 
                  hover:grayscale-0 hover:opacity-100 
                  transition duration-300
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HappyClients;