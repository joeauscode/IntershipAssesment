"use client";
import React from "react";


const Login = () => {


  return (
    <div className="min-h-screen bg-black/40  flex flex-col border-1 border-[white]">

  
      <div className="flex-grow flex items-center justify-center px-4 py-10 mt-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full">
          <div className="mb-6 text-center">
            <p className="text-2xl font-bold text-gray-800">
              Create your account
            </p>
            <span className="text-gray-500">Registration is easy.</span>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address *
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name *
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name *
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password1"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="password2"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500">
              By clicking Register, you agree to Terms of Use and
              Privacy Policy.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow-md transition"
            >
              Register
            </button>

            <p className="text-xs text-gray-400">
              PetSite may send you communications; you may change your
              preferences in your account settings.  never post without
              your permission.
            </p>
          </form>
        </div>
      </div>



    </div>
  );
};

export default Login;
