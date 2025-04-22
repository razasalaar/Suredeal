"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "../lib/supabaseClient";

export default function AuthRedirectHandler() {
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        router.push("/dashboard");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return null;
}
