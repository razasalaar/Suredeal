"use client";

import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md p-8 bg-[linear-gradient(180deg,_#F4FBF9_-37.08%,_#F0FFFB_55.83%,_#EDFFFB_170.44%)] rounded-xl  border  ">
      <h3 className="text-xl font-bold text-[#173C36] mb-10 text-center">
        Login
      </h3>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#173C36] mb-2"
        >
          Username/Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
        />
      </div>

      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-[#173C36] mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="text-right mb-6">
        <a
          href="#"
          className="text-sm font-semibold text-[#173C36] hover:underline "
        >
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-[#007D6E] hover:bg-[#007D6E] cursor-pointer text-white font-semibold py-2 rounded-md transition"
      >
        Login
      </button>

      <div className="text-center mt-4 text-sm text-{#173C36}">
        Don’t have an account?{" "}
        <a href="#" className="text-[#173C36] font-bold underline">
          Signup Now
        </a>
      </div>

      <div className="my-4 flex items-center justify-center gap-3">
        <div className="flex-grow h-px bg-[#173C36]" />
        <span className="text-[#173C36] text-sm">or</span>
        <div className="flex-grow h-px bg-[#173C36]" />
      </div>
      <h3 className="text-center text-[13px] text-[#173C36] mb-4 font-semibold">
        Continue with
      </h3>
      <div className="flex justify-center gap-4">
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          <FaFacebookF className="text-blue-600" />
        </button>
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
