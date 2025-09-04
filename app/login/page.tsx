"use client"
import React from "react";
import Link from "next/link";



export default function about() {

const gotoRegister = () => {
    window.location.href="/signup"
}
  return (
  
   <>
           <div className=" border-1 border-[black/40] bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-[90%] max-w-md mt-30 mb-20 ">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-bold text-gray-800">Sign in</p>
              <span
               onClick={gotoRegister}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Register
              </span>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="login-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-md transition"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
   </>

  );
}
