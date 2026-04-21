import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


let construction = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764324/diugy4jle2iuussqeztd.avif"
let eavylifting = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764360/lifu82bbntfibbqjjfom.jpg"
let fabrication = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764289/qofgfuzovnd5yz01sgsc.avif"
let fencing = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764364/znjex31v6hvmckc12fqw.jpg"
let manpower = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764356/jszyznnwyfkduvwwowcq.jpg"
let portablecabin = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764361/p9vt2li27actihyunxsa.jpg"
let steel = "https://res.cloudinary.com/dasa3kzyf/image/upload/v1776764357/hitujzeoigbz6alsblha.avif"

const services = [
{ title:'Trading Material Supply', desc:'Complete supply of pipes, valves, fittings, safety products, electricals and industrial materials with reliable delivery and quality assurance for every project scale.', img:steel   },

{ title:'Fabrication Services', desc:'Professional fabrication solutions including steel structures, welding works, customized metal components and on-site installation support.', img:fabrication},
{ title:'Construction & Contracting', desc:'End-to-end contracting services covering civil execution, site supervision, manpower and quality-focused project delivery.', img:construction },
{ title:'Portable Cabin Services', desc:'Premium modular cabins for offices, accommodation, storage and temporary facilities with modern finishing.', img:portablecabin },
{ title:'Fencing Services', desc:'Secure chain-link fencing, perimeter walls and boundary solutions for commercial and industrial locations.', img:fencing },
{ title:'Heavy Lifting Services', desc:'Safe crane operations, rigging, machinery shifting and specialized lifting handled by experts.', img:eavylifting },
{ title:'Manpower Supply', desc:'Certified operators, technicians, welders, helpers and trained workforce available for urgent and long-term projects.', img:manpower }
];

export default function TrendyServicesShowcase(){
const refs = useRef([]);

useEffect(()=>{
 refs.current.forEach((card)=>{
   const img = card.querySelector('.img-box');
   const txt = card.querySelector('.text-box');
   gsap.fromTo(img,{x:-100,opacity:0,rotate:-8},{x:0,opacity:1,rotate:-8,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 80%'}});
   gsap.fromTo(txt,{x:100,opacity:0},{x:0,opacity:1,duration:1.1,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 80%'}});
 });
 return ()=>ScrollTrigger.getAll().forEach(t=>t.kill());
},[]);

return(
<section className='  text-[var(--color-primary)] py-20 px-4 md:px-10 overflow-hidden'>
 <div className='text-center mb-16'>
   <p className='text-[var(--color-accent)] tracking-[0.35em] text-sm'>OUR SERVICES</p>
   <h2 className='text-5xl md:text-7xl font-bold mt-3'>Industrial <span className='text-[var(--color-accent)]'>Solutions</span></h2>
 </div>

 {services.map((item,index)=>(
 <div key={index} ref={el=>refs.current[index]=el} className='relative max-w-7xl mx-auto min-h-screen border border-white/15 rounded-[32px] mb-14 px-6 md:px-14 py-10 grid md:grid-cols-2 items-center bg-white/[0.03] backdrop-blur-sm'>
   <div className={`img-box ${index%2!==0 ? 'md:order-2 md:ml-auto' : ''}`}>
     <div className='w-[220px] h-[220px] md:w-[320px] md:h-[320px] rotate-45 rounded-[36px] overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl mx-auto'>
       <img src={item.img} alt={item.title} className='w-full h-full object-cover -rotate-45 scale-150 hover:scale-[1.7] duration-700'/>
     </div>
   </div>

   <div className={`text-box ${index%2!==0 ? 'md:order-1' : ''}`}>
     <span className='inline-block px-4 py-2 rounded-full bg-amber-400/10 text-amber-400 text-xs tracking-[0.25em]'>TRUSTED SERVICE</span>
     <h3 className='text-4xl md:text-6xl font-bold leading-tight mt-5'>{item.title}</h3>
     <p className='text-slate-300 text-lg leading-8 mt-6 max-w-xl'>{item.desc}</p>
     <p className='text-slate-400 mt-5 leading-8 max-w-xl'>We focus on timely execution, premium quality standards and customer satisfaction through reliable solutions tailored for every requirement.</p>

     <div className='flex gap-4 mt-8 flex-wrap'>
       <button className='px-7 py-4 rounded-full bg-[var(--color-accent)]  text-[var(--color-primary)] font-semibold hover:scale-105 duration-300'>Explore More</button>
       {/* <button className='px-7 py-4 rounded-full border border-white/20 hover:bg-white/10 duration-300'>Get Quote</button> */}
     </div>
   </div>
 </div>
 ))}
</section>
)
}
