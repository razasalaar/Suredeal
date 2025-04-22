"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
export default function Customers() {
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
    <div className="flex flex-col  w-full px-6 py-8 bg-amber-50 h-screen rounded-2xl  ">
      <div>
        <h1 className="font-bold text-xl">Customers</h1>
      </div>
    </div>
  );
}
