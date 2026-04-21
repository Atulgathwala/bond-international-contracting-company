import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner(){
  const ref = useRef(null);

  useEffect(()=>{
    const el = ref.current;
    gsap.fromTo(el,
      {y:100, opacity:0, scale:0.95},
      {
        y:0,
        opacity:1,
        scale:1,
        duration:1.1,
        ease:'power3.out',
        scrollTrigger:{trigger:el,start:'top 85%'}
      }
    );

    return ()=> ScrollTrigger.getAll().forEach(t=>t.kill());
  },[])

  return (
    <section className='py-24 px-4 md:px-10 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div
          ref={ref}
          className='relative overflow-hidden rounded-[36px] border border-[var(--color-accent)]/20 bg-gradient-to-r from-[var(--color-primary)] via-[#111827] to-[var(--color-primary)] p-10 md:p-16 shadow-2xl'
        >
          <div className='absolute -top-16 -right-16 w-52 h-52 bg-[var(--color-accent)]/10 rounded-full blur-3xl'></div>
          <div className='absolute -bottom-16 -left-16 w-52 h-52 bg-[var(--color-accent)]/10 rounded-full blur-3xl'></div>

          <div className='relative z-10 grid lg:grid-cols-2 gap-10 items-center'>
            <div>
              <p className='text-[var(--color-accent)] tracking-[0.35em] text-sm'>READY TO START?</p>
              <h2 className='text-4xl md:text-6xl font-bold text-white mt-4 leading-tight'>Build Your Next <span className='text-[var(--color-accent)]'>Project</span> With Experts</h2>
              <p className='text-slate-300 text-lg mt-6 leading-8 max-w-2xl'>Get reliable industrial solutions, skilled manpower, fabrication support and on-time project execution tailored to your business needs.</p>
            </div>

            <div className='flex flex-col sm:flex-row lg:justify-end gap-4'>
             <a href="#"> <button className='px-8 py-4 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] font-semibold hover:scale-105 transition duration-300'>Get Quote</button></a>
              <a href="tel:+966544792862"><button className='px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition duration-300'>Call Now</button></a>
              <a href='https://wa.me/+966544792862'><button className='px-8 py-4 rounded-full border border-green-400/40 text-green-400 hover:bg-green-400/10 transition duration-300'>WhatsApp</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}