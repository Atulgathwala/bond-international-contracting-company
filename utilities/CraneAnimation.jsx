import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function JCBAnimation(){
  const [step,setStep]=useState(0);
  useEffect(()=>{
    const timers=[1000,2500,4000,5500].map((t,i)=>setTimeout(()=>setStep(i+1),t));
    return ()=>timers.forEach(clearTimeout);
  },[]);

  const Letter=({char,index})=>{
    const active=step>index;
    return <motion.div initial={{y:0,rotate:90}} animate={active?{y:-220,rotate:0}:{y:0,rotate:90}} transition={{duration:1}} className='w-16 h-16 bg-yellow-400 border-4 border-black rounded-md flex items-center justify-center text-4xl font-bold absolute bottom-10' style={{left:120+index*90}}>{char}</motion.div>
  }

  return <div className='w-full h-screen bg-gradient-to-b from-sky-300 to-green-300 relative overflow-hidden'>
    <div className='absolute bottom-0 w-full h-24 bg-gray-700'></div>
    <motion.div className='absolute bottom-24 left-10 w-64 h-24' animate={{x: step>0?80:0}} transition={{duration:1}}>
      <div className='absolute bottom-0 left-0 w-40 h-16 bg-yellow-500 rounded-md border-4 border-black'></div>
      <div className='absolute bottom-10 left-28 w-20 h-12 bg-yellow-500 rounded-md border-4 border-black'></div>
      <motion.div className='absolute bottom-20 left-36 w-24 h-4 bg-yellow-500 origin-left border-2 border-black' animate={{rotate: step>0?-55:0}} transition={{duration:1}}></motion.div>
      <div className='absolute bottom-0 left-5 w-10 h-10 bg-black rounded-full'></div>
      <div className='absolute bottom-0 left-28 w-10 h-10 bg-black rounded-full'></div>
      <div className='absolute bottom-0 left-48 w-10 h-10 bg-black rounded-full'></div>
      <motion.div className='absolute bottom-[-120px] left-[245px] w-1 bg-black' animate={{height: step>0?140:30}} transition={{duration:1}}></motion.div>
    </motion.div>
    <Letter char='B' index={0}/>
    <Letter char='I' index={1}/>
    <Letter char='C' index={2}/>
  </div>
}
