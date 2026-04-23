import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Building2,
  Users,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Images
import visionImg from "../assets/images/vision.png";
import backgroundImage from "../assets/images/scenary.png";

const Vision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    tl.from(".vision-image", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(
      ".vision-content",
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.from(
      ".vision-points",
      {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
      },
      "-=0.5"
    );

    tl.from(
      ".bottom-strip",
      {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative py-20 px-4 md:px-10 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Better Transparent Overlay */}
      <div className="absolute inset-0 bg-white/50"></div>

      {/* Golden Light Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#C9A14A]/10 via-transparent to-[#172E64]/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="vision-image flex justify-center">
            <img
              src={visionImg}
              alt="Saudi Vision 2030"
              className="w-[320px] md:w-[430px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Side */}
          <div className="vision-content">
            <p className="text-[#C9A14A] tracking-[0.35em] text-sm uppercase mb-4">
              Kingdom Future
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#172E64]">
              Supporting Saudi <br />
              <span className="text-[#C9A14A]">Vision 2030</span>
            </h2>

            <p className="text-slate-700 mt-6 text-lg leading-8">
              We proudly contribute to the Kingdom’s transformation by delivering
              trusted manpower, transportation, heavy equipment rental,
              industrial materials, and project support services aligned with
              Saudi Vision 2030 goals.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="vision-points rounded-2xl p-5 bg-[#172E64]/95 backdrop-blur-sm text-white shadow-xl">
                <h4 className="text-[#C9A14A] font-semibold text-lg">
                  Infrastructure Growth
                </h4>
                <p className="text-slate-300 mt-2 text-sm leading-7">
                  Supporting industrial and construction expansion projects.
                </p>
              </div>

              <div className="vision-points rounded-2xl p-5 bg-[#172E64]/95 backdrop-blur-sm text-white shadow-xl">
                <h4 className="text-[#C9A14A] font-semibold text-lg">
                  Skilled Workforce
                </h4>
                <p className="text-slate-300 mt-2 text-sm leading-7">
                  Reliable manpower solutions for every business sector.
                </p>
              </div>

              <div className="vision-points rounded-2xl p-5 bg-[#172E64]/95 backdrop-blur-sm text-white shadow-xl">
                <h4 className="text-[#C9A14A] font-semibold text-lg">
                  Logistics Support
                </h4>
                <p className="text-slate-300 mt-2 text-sm leading-7">
                  Transportation and equipment movement across projects.
                </p>
              </div>

              <div className="vision-points rounded-2xl p-5 bg-[#172E64]/95 backdrop-blur-sm text-white shadow-xl">
                <h4 className="text-[#C9A14A] font-semibold text-lg">
                  Long-Term Trust
                </h4>
                <p className="text-slate-300 mt-2 text-sm leading-7">
                  Building partnerships focused on growth and quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="bottom-strip mt-14 bg-[#172E64]/95 backdrop-blur-sm rounded-[26px] px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-5 gap-6 text-white shadow-2xl">
          <div className="flex items-center gap-3">
            <Building2 className="text-[#C9A14A]" />
            <span className="text-sm font-medium">Quality Commitment</span>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-[#C9A14A]" />
            <span className="text-sm font-medium">Experienced Team</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#C9A14A]" />
            <span className="text-sm font-medium">Safety First</span>
          </div>

          <div className="flex items-center gap-3">
            <Truck className="text-[#C9A14A]" />
            <span className="text-sm font-medium">On-Time Delivery</span>
          </div>

          <div className="flex items-center gap-3">
            <BadgeCheck className="text-[#C9A14A]" />
            <span className="text-sm font-medium">Trusted Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;