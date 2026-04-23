import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Handshake, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

let constructionVideo =
  "https://res.cloudinary.com/dasa3kzyf/video/upload/f_auto,q_auto:low,w_1280/o9gr4t7ggpcf51p3oynp.mp4";

import logo1 from "../assets/clients/img1.jpeg";
import logo2 from "../assets/clients/img2.jpeg";
import logo3 from "../assets/clients/img3.jpeg";
import logo4 from "../assets/clients/img4.png";
import logo5 from "../assets/clients/img5.png";
import logo6 from "../assets/clients/img6.png";
import logo7 from "../assets/clients/img7.png";
import logo8 from "../assets/clients/img8.png";
import logo9 from "../assets/clients/img9.png";
import logo10 from "../assets/clients/img10.png";
import logo11 from "../assets/clients/img11.png";
import logo12 from "../assets/clients/img12.png";
import logo13 from "../assets/clients/img13.png";
import logo14 from "../assets/clients/img14.png";
import logo15 from "../assets/clients/img15.png";
import logo16 from "../assets/clients/img16.png";
import logo17 from "../assets/clients/img17.png";
import logo18 from "../assets/clients/img18.png";
import logo19 from "../assets/clients/img19.png";
import logo20 from "../assets/clients/img20.png";
import logo21 from "../assets/clients/img21.png";
import logo22 from "../assets/clients/img22.png";
import logo23 from "../assets/clients/img23.png";
import logo24 from "../assets/clients/img24.png";
import logo25 from "../assets/clients/img25.png";
import logo26 from "../assets/clients/img26.png";
import logo27 from "../assets/clients/img27.png";
import logo28 from "../assets/clients/img28.png";
import logo29 from "../assets/clients/img29.png";
import logo30 from "../assets/clients/img30.png";
import logo31 from "../assets/clients/img31.png";
import logo32 from "../assets/clients/img32.png";
import logo33 from "../assets/clients/img33.png";
import logo34 from "../assets/clients/img34.png";
import logo35 from "../assets/clients/img35.png";
import logo36 from "../assets/clients/img36.png";
import logo37 from "../assets/clients/img37.png";
import logo38 from "../assets/clients/img38.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19,
  logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28,
  logo29, logo30, logo31, logo32, logo33, logo34, logo35, logo36, logo37,
  logo38,
];

const HappyClients = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#clients",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#clients",
          start: "top 75%",
        },
      }
    );

    gsap.to(marqueeRef1.current, {
      xPercent: -50,
      repeat: -1,
      duration: 45,
      ease: "linear",
    });

    gsap.to(marqueeRef2.current, {
      xPercent: 50,
      repeat: -1,
      duration: 45,
      ease: "linear",
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      id="clients"
      className="relative overflow-hidden py-24 min-h-screen"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={constructionVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#071020]/90 via-[#0c1c38]/85 to-black/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <div ref={titleRef} className="text-center">
          <p className="text-[#C9A14A] tracking-[0.35em] text-sm uppercase">
            Trusted Worldwide
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white mt-3">
            Our Happy <span className="text-[#C9A14A]">Clients</span>
          </h2>

          <p className="text-slate-300 mt-5 max-w-2xl mx-auto text-lg leading-8">
            Proudly serving companies with transportation, heavy equipment,
            manpower, material supply, portable cabins and rental solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {[
            { icon: Building2, num: "38+", txt: "Companies" },
            { icon: Handshake, num: "100+", txt: "Projects" },
            { icon: Star, num: "5★", txt: "Service Rating" },
            { icon: Building2, num: "24/7", txt: "Support" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center"
              >
                <Icon className="mx-auto text-[#C9A14A]" size={28} />
                <h3 className="text-white text-3xl font-bold mt-3">
                  {item.num}
                </h3>
                <p className="text-slate-300 text-sm mt-1">{item.txt}</p>
              </div>
            );
          })}
        </div>

        {/* Row 1 */}
      <div className="overflow-hidden mt-16">
  <div ref={marqueeRef1} className="flex gap-8 w-max items-center">
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        className="w-40 h-24 bg-white rounded-2xl shadow-xl border border-white/20 flex items-center justify-center px-4 hover:scale-105 transition duration-300"
      >
        <img
          src={logo}
          alt="client"
          className="max-h-14 max-w-full object-contain"
        />
      </div>
    ))}
  </div>
</div>

        {/* Row 2 */}
       <div className="overflow-hidden mt-8">
  <div
    ref={marqueeRef2}
    className="flex gap-8 w-max items-center -translate-x-1/2"
  >
    {[...logos, ...logos].map((logo, i) => (
      <div
        key={i}
        className="w-40 h-24 bg-white rounded-2xl shadow-xl border border-white/20 flex items-center justify-center px-4 hover:scale-105 transition duration-300"
      >
        <img
          src={logo}
          alt="client"
          className="max-h-14 max-w-full object-contain"
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