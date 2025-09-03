"use client"
import Link from 'next/link';
import React, {useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';




export default function Hero() {

    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">

  <video
    src="/bg.mp4"  
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  <div data-aos="slide-right" className="relative z-20 top-40 text-[whitesmoke] text-xl w-[80%] mx-auto flex flex-col gap-4">
    <p className='font-bold text-[24px] text-[#F5DEB3]'>Because Every Home Deserves a Friend</p>
     <div className='w-[50%]'>
      <span>A pet is more than just a companion — it’s family. From wagging tails to gentle purrs, they bring laughter, comfort, and endless memories. Whether you’re looking for playful energy or calm affection, the perfect friend is waiting for you here.</span>
    
    <div className='flex gap-6 mt-2 items-center'>
      <Link href="/shop"><button className='bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-2xl cursor-pointer py-[10px] px-[20px] hover:text-[#F5DEB3]'>Explore more</button></Link>
    </div>

     </div>
  </div>





    </div>
  );
}


// https://www.uidesigndaily.com/posts/figma-billing-page-payment-day-1585
// https://pngtree.com
// https://www.freepik.com
