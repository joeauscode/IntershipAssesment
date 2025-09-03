"use client";
import React from "react";
import Img from "next/image";
import Link from "next/link";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#1f2937] text-[#F5DEB3] hover:bg-[#374151] py-10">
      <div className="w-[80%] mx-auto flex items-center text-center justify-between mb-5 text-xl">
        <Img
          src="/image/logofooter.png"
          alt="Logo"
          width={120}
          height={50}
          priority
           style={{ width: "auto", height: "auto" }}
        />

      </div>

      <div className="flex justify-between w-[80%] mx-auto text-center">
        
        <div>
          <p className="mb-3 text-xl font-bold text-[white]">Shop</p>
          <ul className="flex flex-col gap-2 list-none text-center">
            <li className="hover:text-[#ffff]"><Link href="/">Dogs</Link></li>
           <li className="hover:text-[#ffff]"> <Link href="/">Cats</Link></li>
            <li className="hover:text-[#ffff]"><Link href="/">Birds</Link></li>
            <li className="hover:text-[#ffff]"><Link href="/">Small Pets</Link></li>
            <li className="hover:text-[#ffff]"><Link href="/">New Arrivals</Link></li>
            <li className="hover:text-[#ffff]"><Link href="/">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xl font-bold text-[white]">Customer Care</p>
          <ul className="flex flex-col gap-2 list-none text-center">
            <li className="hover:text-[#F5DEB3]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[#F5DEB3]">
              <Link href="/blog">Blog / Pet care tips</Link>
            </li>
            <li className="hover:text-[#F5DEB3]">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="hover:text-[#F5DEB3]"> 
              <Link href="/Shipping">Shipping & Delivery</Link>
            </li>
            <li className="hover:text-[#F5DEB3]">
              <Link href="/returns">Returns & Refunds</Link>
            </li>
            <li className="hover:text-[#F5DEB3]">
              <Link href="/contantus">Contact Us</Link>
            </li>

          </ul>
        </div>



        <div>
          <p className="mb-3 text-xl font-bold text-[white]">Connect With Us</p>
     
          <div className="flex flex-col gap-5 text-center">
            
          <ul className="flex flex-col gap-2 list-none text-center">
            <li>support@petstore.com</li>
            <li>+1 (800) 555-PETS</li>
            <li>123 Pet Street, Happy Town, USA</li>
          </ul>

          <div className="flex flex-col gap-1.5 text-center">
           <p> Secure Payments </p>
            <div className="flex gap-3.5 text-center justify-center">
            <span className="text-2xl text-blue-500"><FaCcVisa/></span>
           <span  className="text-2xl text-amber-400" ><FaCcMastercard/></span>
           <span  className="text-2xl text-blue-500"><FaPaypal /></span>
            </div>
           <p>Fast & Friendly Support</p>
          </div>

          </div>


        </div>


      </div>
    </div>
  );
}
