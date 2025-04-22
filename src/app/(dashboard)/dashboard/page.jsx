"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
export default function DashboardPage() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const loadSession = async () => {
    const sess = await supabase.auth.getSession();
    setSession(sess.data.session);
    if (!sess.data.session) {
      router.push("/login");
    } else {
      const userData = sess.data.session.user;
      setUser(userData);
    }
  };
  useEffect(() => {
    loadSession();
  }, []);

  return (
    <div className=" text-[#173C36]  w-full  px-6 py-8 bg-[#FFFFFF] h-screen md:rounded-2xl  ">
      <h1 className="font-bold  text-xl">Dashboard</h1>
      <div className="grid  grid-cols-2 md:grid-cols-4 mt-10 gap-4">
        <div className="bg-[#F7FAFF] p-4 rounded-md ">
          <h1 className="text-[16px]">Total Quote Value</h1>
          <h1 className="text-[34px]">$ 1.2m</h1>
        </div>
        <div className="bg-[#F7FAFF] p-4 rounded-md  ">
          <h1 className="text-[16px]">Revenue Won</h1>
          <h1 className="text-[34px]">$ 60K</h1>
        </div>
        <div className="bg-[#F7FAFF] p-4 rounded-md  ">
          <h1 className="text-[16px]">Revenue Expired</h1>
          <h1 className="text-[34px]">$ 70K</h1>
        </div>
        <div className="bg-[#F7FAFF] p-4 rounded-md  ">
          <h1 className="text-[16px]">Revenue Lost</h1>
          <h1 className="text-[34px]">$ 90K</h1>
        </div>
      </div>
    </div>
  );
}
