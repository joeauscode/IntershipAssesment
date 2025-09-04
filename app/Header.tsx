"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const Goto = () => {
    window.location.href = "/";
  };

  const [display, setDisplay] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const shownav = () => {
    setDisplay((prev) => !prev);
  };

  const Menu = () => {
    setMobileNav(prev => !prev)
  }

  return (
    <div className="bg-[#1f2937] text-[#F5DEB3] hover:bg-[#374151] transition-colors duration-300 shadow-md fixed top-0 right-0 left-0 z-50">
      
      
      <div className="flex justify-between w-[90%] mx-auto items-center p-4">
      

        <div className="cursor-pointer" onClick={Goto}>
          <Image
            onClick={() => setDisplay(false)}
            src="/image/logofooter.png"
            alt="Logo"
            width={120}
            height={50}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

       
        <div className="hidden md:flex gap-10 items-center">
          <Link onClick={() => setDisplay(false)} href="/" className="hover:text-white">
            Home
          </Link>

          <div className="flex flex-col text-center relative">
            <span onClick={shownav} className="hover:text-white cursor-pointer">
              Shop
            </span>

            {display && (
              <ul className="list-none absolute top-[170%] left-[-84%] w-[120px] bg-[#1f2937] flex flex-col gap-2.5 text-[#F5DEB3]">
                <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}>
                  <Link href="/dog">Dogs</Link>
                </li>
                <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}>
                  <Link href="/">Cats</Link>
                </li>
                <li className="hover:text-[#F9F5E9]" onClick={() => setDisplay(false)}>
                  <Link href="/">Birds</Link>
                </li>
                <li className="hover:text-[#F9F5E9] mb-4" onClick={() => setDisplay(false)}>
                  <Link href="/">Small Pets</Link>
                </li>
              </ul>
            )}
          </div>

          <Link onClick={() => setDisplay(false)} href="/about" className="hover:text-white">
            About
          </Link>
          <Link onClick={() => setDisplay(false)} href="/blog" className="hover:text-white">
            Blog
          </Link>
        </div>

        <div className="hidden md:flex gap-5">
          <Link
            href="/signup"
            className="cursor-pointer hover:text-white"
            onClick={() => setDisplay(false)}
          >
            Sign Up
          </Link>
          |
          <Link
            href="/login"
            className="hover:text-white"
            onClick={() => setDisplay(false)}
          >
            Log-In
          </Link>
        </div>

 
        <button
          className="md:hidden text-2xl"
          onClick={Menu}
        >
          ☰
        </button>
      </div>

 
      {mobileNav && (
        <div className="md:hidden flex flex-col gap-4 p-4 bg-[#1f2937]">
          <Link onClick={() => setMobileNav(false)} href="/" className="hover:text-white">
            Home
          </Link>
          <span onClick={shownav} className="hover:text-white cursor-pointer">
            Shop
          </span>
          {display && (
            <ul className="list-none flex flex-col gap-2 text-[#F5DEB3]">
              <li>
                <Link href="/dog" onClick={() => setMobileNav(false)}>
                  Dogs
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setMobileNav(false)}>
                  Cats
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setMobileNav(false)}>
                  Birds
                </Link>
              </li>
              <li>
                <Link href="/" onClick={() => setMobileNav(false)}>
                  Small Pets
                </Link>
              </li>
            </ul>
          )}
          <Link onClick={() => setMobileNav(false)} href="/about" className="hover:text-white">
            About
          </Link>
          <Link onClick={() => setMobileNav(false)} href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link onClick={() => setMobileNav(false)} href="/signup" className="hover:text-white">
            Sign Up
          </Link>
          <Link onClick={() => setMobileNav(false)} href="/login" className="hover:text-white">
            Log-In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
