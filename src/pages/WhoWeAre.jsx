import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBuilding, FaHardHat, FaUsersCog } from "react-icons/fa";
import fleetICON from "../assets/images/excavatorfleet.png";

gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
  const textRef = useRef([]);
  const circleRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // LEFT TEXT ANIMATION
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 80%",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });

    // RIGHT HEADING ANIMATION
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 80%",
      },
      y: -30,
      opacity: 0,
      duration: 1,
    });

    // CIRCLES ANIMATION
    gsap.from(circleRef.current, {
      scrollTrigger: {
        trigger: "#who-we-are",
        start: "top 75%",
      },
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section
      id="who-we-are"
      className="min-h-screen w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-20 bg-[var(--color-light)]"
    >
      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6">
        <p
          ref={(el) => (textRef.current[0] = el)}
          className="text-lg font-semibold text-[var(--color-accent)] tracking-wider"
        >
          WHO WE ARE
        </p>

        <h2
          ref={(el) => (textRef.current[1] = el)}
          className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] leading-snug"
        >
          Powering Projects with{" "}
          <span className="text-[var(--color-accent)]">
            Reliable Equipment & Workforce
          </span>
        </h2>

        <p
          ref={(el) => (textRef.current[2] = el)}
          className="text-gray-600 leading-relaxed"
        >
          At BIC Infrastructure, we provide complete construction support
          solutions including heavy equipment rental, manpower supply,
          transportation, and material handling services. Our modern fleet
          ensures efficiency, safety, and reliability on every project site.
        </p>

        <p
          ref={(el) => (textRef.current[3] = el)}
          className="text-gray-600 leading-relaxed"
        >
          From small-scale operations to large infrastructure projects, we are
          committed to timely delivery and high performance. Our experienced
          team and well-maintained machinery make us a trusted partner for
          long-term success.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 mt-16 md:mt-0 flex flex-col items-center justify-center relative h-[600px]">

        {/* HEADING */}
        <div
          ref={headingRef}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            Our Strength in Numbers
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Delivering excellence with strong workforce, projects & machinery
          </p>
        </div>

        {/* TRIANGLE */}
        <div className="relative w-full h-full flex justify-center items-center">

          {/* Circle 1 */}
          <div
            ref={(el) => (circleRef.current[0] = el)}
            className="absolute left-10 md:left-20 top-20 w-44 md:w-48 h-44 md:h-48 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            style={{
              background:
                "linear-gradient(to top right, var(--color-dark), var(--color-primary))",
            }}
          >
            <FaUsersCog size={34} />
            <p className="mt-2 font-bold text-lg">500+</p>
            <p className="text-xs text-center px-3">
              Skilled Workforce
            </p>
          </div>

          {/* Circle 2 */}
          <div
            ref={(el) => (circleRef.current[1] = el)}
            className="absolute right-10 md:right-20 top-20 w-44 md:w-48 h-44 md:h-48 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            style={{
              background:
                "linear-gradient(to top right, var(--color-primary), var(--color-accent))",
            }}
          >
            <FaHardHat size={34} />
            <p className="mt-2 font-bold text-lg">1000+</p>
            <p className="text-xs text-center px-3">
              Projects Delivered
            </p>
          </div>

          {/* Circle 3 */}
          <div
            ref={(el) => (circleRef.current[2] = el)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 md:w-52 h-48 md:h-52 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
            style={{
              background:
                "linear-gradient(to top right, var(--color-dark), var(--color-accent))",
            }}
          >
            <img src={fleetICON} className="h-[45px] md:h-[50px]" alt="" />
            <p className="mt-2 font-bold text-lg">50+</p>
            <p className="text-xs text-center px-3">
              Equipment Fleet
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;