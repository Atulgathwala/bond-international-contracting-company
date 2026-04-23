import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Ahmed Khan',
    role: 'Project Manager',
    text: 'Excellent transportation support with timely delivery of materials and equipment. Their team managed every movement professionally.'
  },
  {
    name: 'Rohit Sharma',
    role: 'Site Engineer',
    text: 'We hired heavy equipment and manpower services for our site project. Machines were well maintained and operators were highly skilled.'
  },
  {
    name: 'Faisal Ali',
    role: 'Operations Head',
    text: 'Reliable car rental and portable cabin solutions with quick setup and professional service. Highly recommended for industrial projects.'
  }
];

export default function Testimonials() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[var(--color-accent)] tracking-[0.35em] text-sm">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-3 text-[var(--color-primary)]">
            What Clients <span className="text-[var(--color-accent)]">Say</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Trusted for transportation, heavy equipment, manpower, rentals and
            industrial support services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {reviews.map((item, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="relative rounded-[30px] border border-[var(--color-accent)]/20 bg-[var(--color-primary)] backdrop-blur-md p-8 shadow-xl hover:-translate-y-3 hover:border-[var(--color-accent)] transition-all duration-300"
            >
              <div className="absolute top-5 right-6 text-7xl text-[var(--color-accent)] leading-none">
                “
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-bold text-xl flex items-center justify-center">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-8 text-lg">{item.text}</p>

              <div className="mt-6 text-[var(--color-accent)] text-xl tracking-wider">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}