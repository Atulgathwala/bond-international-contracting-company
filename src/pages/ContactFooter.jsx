import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function ContactFooter() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="contact" className="pt-24 px-4 md:px-10 text-white overflow-hidden">
      <div
        ref={ref}
        className="max-w-7xl mx-auto rounded-[36px] border border-[var(--color-accent)]/20 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-[#060b14] overflow-hidden shadow-2xl"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* LEFT SIDE */}
          <div className="p-8 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
            <p className="text-[var(--color-accent)] tracking-[0.35em] text-sm">
              CONTACT US
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Let's Build Something{" "}
              <span className="text-[var(--color-accent)]">Great</span>
            </h2>

            <p className="text-slate-300 mt-6 text-lg leading-8">
              Connect with our team for manpower, fabrication, heavy lifting,
              construction and industrial solutions tailored to your project
              needs.
            </p>

            <div className="space-y-5 mt-10">
              <div className="flex items-start gap-4">
                <Phone className="text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                 <a href="tel:+966544792862"> <p className="text-slate-400">+966 54 479 2862</p></a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a href="tel:+966550081047"><p className="text-slate-400">+966 55 008 1047</p></a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-400">info@bondinternationalksa.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-400">
                    Street Ibn Al Jawzi, Al Dana Dist.P.O Box 35514 Al Jubail Kimgdom of Saudi Arabia
                   
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-slate-400">
                    Mon - Sat : 8:00 AM to 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="p-6 md:p-10">
            <div className="rounded-[28px] overflow-hidden border border-white/10 h-full min-h-[450px] shadow-xl">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56883.53843500808!2d49.60579806388671!3d26.991553159377542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a1001a2047d1%3A0xd00a673f2c7446fa!2sAl-Dana%20Building!5e0!3m2!1sen!2sin!4v1776768867049!5m2!1sen!2sin" className="h-full w-full"  loading="lazy" ></iframe>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-slate-400 text-sm">
            © 2026 Your Company. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
            >
              <FaSquareInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}