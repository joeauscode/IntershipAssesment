"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";




const Header = () => {

  const Goto = () => {
   window.location.href="/"
  }


  const [display, setDisplay] = useState(false)

  const  shownav = () => {
    setDisplay(prev => !prev)
  }

  

  return (
    <div className='bg-[#1f2937] text-[#F5DEB3] hover:bg-[#374151] transition-colors duration-300 shadow-md fixed top-0 right-0 left-0 z-50' >
      <div className="flex justify-between w-[85%] mx-auto align-middle text-xl p-5 items-center">

        <div className="cursor-pointer" onClick={Goto}>
           <Image onClick={() => setDisplay(false)} src="/image/logofooter.png" 
            alt="Logo" 
            width={120} 
            height={50} 
             style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

      <div className="flex gap-10 ml-10 items-center">
       <Link onClick={() => setDisplay(false)} href="/" className='hover:text-white'>Home</Link>
        <div className="flex justify-center flex-col text-center relative">
       <span onClick={shownav} className='hover:text-white cursor-pointer'>Shop</span>
       
       {display && (
    
        <ul className='list-none absolute top-[170%] left-[-84%]  w-[120px] bg-[#1f2937] flex flex-col gap-2.5 text-[#F5DEB3]' >
          <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}><Link href="/dog">Dogs</Link></li>
           <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}> <Link href="/">Cats</Link></li>
            <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}><Link href="/">Birds</Link></li>
            <li className="hover:text-[#F9F5E9] mb-4 " onClick={() => setDisplay(false)}><Link href="/">Small Pets</Link></li>
        </ul>
       
       )}
  </div>
       <Link onClick={() => setDisplay(false)} href="about" className='hover:text-white'>About</Link>
       <Link  onClick={() => setDisplay(false)} href="/blog" className='hover:text-white'>Blog</Link>
       
      </div>


      <div className="flex gap-5">
         <div className="Signup">
          <Link href='/signin'className='cursor-pointer hover:text-white'  onClick={() => setDisplay(false)}>Sign Up</Link>
         </div>
            |
         <div className="Login">
            <Link href='/signin' className='hover:text-white' onClick={() => setDisplay(false)}>Log-In</Link>
         </div>
      </div>

      </div>
    </div>
  )
}

export default Header
