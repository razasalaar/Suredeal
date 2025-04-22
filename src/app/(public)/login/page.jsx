"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { ImAppleinc } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });

    setLoading(false);

    if (error) {
      console.error("Google sign-in error:", error.message);
      setError("An error occurred while signing in with Google.");
    }
  };
  const handleLogin = async () => {
    setError("");
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  const redirectToSignup = () => {
    router.push("/signup");
  };

  if (!isClient) return null;

  return (
    <>
      <div className="flex justify-center mb-5 max-md:hidden">
        <Image
          src="/images/logo.png"
          alt="SureDeal Logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="w-full max-w-md py-4 px-6 bg-[linear-gradient(180deg,_#F4FBF9_-37.08%,_#F0FFFB_55.83%,_#EDFFFB_170.44%)] rounded-xl border">
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="text-right mb-6">
          <button
            type="button"
            className="text-sm font-semibold text-[#173C36] hover:underline"
          >
            Forgot Password?
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <button
          type="submit"
          onClick={handleLogin}
          className="w-full bg-[#007D6E] hover:bg-[#00695e] cursor-pointer text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>

        <div className="text-center mt-4 text-sm text-[#173C36]">
          Don’t have an account?{" "}
          <button
            onClick={redirectToSignup}
            className="text-[#173C36] font-bold underline cursor-pointer"
          >
            Signup Now
          </button>
        </div>

        <div className="my-4 flex items-center justify-center gap-3">
          <div className="flex-grow h-px bg-[#173C36]" />
          <span className="text-[#173C36] text-sm">or</span>
          <div className="flex-grow h-px bg-[#173C36]" />
        </div>

        <h3 className="text-center text-[13px] text-[#173C36] mb-4 font-semibold">
          Continue with
        </h3>

        <div className="flex justify-center gap-3">
          <button className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
            <FaFacebook size={28} className="text-blue-600" />
          </button>

          <button className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110">
            <ImAppleinc size={28} />
          </button>

          <button
            onClick={handleGoogleLogin}
            className="p-2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110"
          >
            <FcGoogle size={28} />
          </button>
        </div>
      </div>
    </>
  );
}
