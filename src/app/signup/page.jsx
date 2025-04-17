"use client";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
export default function signupPage() {
  return (
    <>
      <div className="flex justify-center mb-5 mt-2  max-md:hidden">
        <Image
          src="/images/logo.png"
          alt="SureDeal Logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="w-full max-w-md py-4 px-6 bg-[linear-gradient(180deg,_#F4FBF9_-37.08%,_#F0FFFB_55.83%,_#EDFFFB_170.44%)] rounded-xl  border  ">
        <h3 className="text-xl font-bold text-[#173C36] mb-10 text-center">
          Sign Up
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
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DCCBF] bg-white"
          />
        </div>

        <div className="mb-4">
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
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DCCBF]"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#173C36] mb-2"
          >
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#8DCCBF]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#007D6E] hover:bg-[#007D6E] cursor-pointer text-white font-semibold py-2 rounded-md transition"
        >
          Sign up
        </button>

        <div className="my-4 flex items-center justify-center gap-3">
          <div className="flex-grow h-px bg-[#173C36]" />
          <span className="text-[#173C36] text-sm">or</span>
          <div className="flex-grow h-px bg-[#173C36]" />
        </div>
        <h3 className="text-center text-[13px] text-[#173C36] mb-4 font-semibold">
          Continue with
        </h3>
        <div className="flex justify-center gap-3">
          <button className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 ">
            <FaFacebook size={28} className="text-blue-600" />
          </button>

          <button className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
            <ImAppleinc size={28} />
          </button>

          <button className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 ">
            <FcGoogle size={28} />
          </button>
        </div>
      </div>
    </>
  );
}
