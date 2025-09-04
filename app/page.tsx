"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from "aos";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden border-1">
      <video
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div
  data-aos="slide-right"
  className="relative z-20 mt-24 sm:mt-40 md:mt-24 text-[whitesmoke] w-[90%] sm:w-[80%] mx-auto flex flex-col gap-4 px-4"
>
       
        <p className="font-bold text-lg sm: sm:text-xl md:text-2xl lg:text-3xl text-[#F5DEB3]">
          Because Every Home Deserves a Friend
        </p>

     
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] font-medium">
       
          <span className="text-sm sm:text-base md:text-lg">
            A pet is more than just a companion — it’s family. From wagging tails
            to gentle purrs, they bring laughter, comfort, and endless memories.
            Whether you’re looking for playful energy or calm affection, the
            perfect friend is waiting for you here.
          </span>

        
          <div className="flex gap-4 sm:gap-6 mt-4 items-center flex-wrap">
            <Link href="/shop">
            
              <button className="bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-2xl cursor-pointer py-2 px-4 sm:py-3 sm:px-6 hover:text-[#F5DEB3] text-sm sm:text-base">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
