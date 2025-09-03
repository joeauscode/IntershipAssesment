"use client";
import React from "react";
import Img from "next/image";
import Link from "next/link";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#2D2D2D] text-[#F9F5E9] py-10">
      <div className="w-[90%] mx-auto flex items-center text-center justify-between mb-5 text-xl">
        <Img
          src="/image/logofooter.png"
          alt="Logo"
          width={120}
          height={50}
          priority
        />
        <p>
          Because pets are family — everything they need, all in one place.”
        </p>
      </div>

      <div className="flex justify-between w-[90%] mx-auto">
        
        <div>
          <p className="mb-3 text-xl font-bold">Shop</p>
          <ul className="flex flex-col gap-2 list-none">
            <li className="hover:text-[#F5DEB3]"><Link href="/">Dogs</Link></li>
           <li className="hover:text-[#F5DEB3]"> <Link href="/">Cats</Link></li>
            <li className="hover:text-[#F5DEB3]"><Link href="/">Birds</Link></li>
            <li className="hover:text-[#F5DEB3]"><Link href="/">Small Pets</Link></li>
            <li className="hover:text-[#F5DEB3]"><Link href="/">New Arrivals</Link></li>
            <li className="hover:text-[#F5DEB3]"><Link href="/">Best Sellers</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xl font-bold">Customer Care</p>
          <ul className="flex flex-col gap-2 list-none">
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
          <p className="mb-3 text-xl font-bold">Connect With Us</p>
     
          <div className="flex flex-col gap-5">
            
          <ul className="flex flex-col gap-2 list-none">
            <li>support@petstore.com</li>
            <li>+1 (800) 555-PETS</li>
            <li>123 Pet Street, Happy Town, USA</li>
          </ul>

          <div className="flex flex-col gap-1.5">
           <p> Secure Payments </p>
            <div className="flex gap-3.5">
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
