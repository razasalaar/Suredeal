"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import RevenueBarChart from "./components/RevenueBarChart";
import RatesDoughnutChart from "./components/RatesDoughnutChart";
import QuotesBarChart from "./components/QuotesBarChart";
export default function DashboardPage() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  // const loadSession = async () => {
  //   const sess = await supabase.auth.getSession();
  //   setSession(sess.data.session);
  //   if (!sess.data.session) {
  //     router.push("/login");
  //   } else {
  //     const userData = sess.data.session.user;
  //     setUser(userData);
  //   }
  // };
  // useEffect(() => {
  //   loadSession();
  // }, []);

  return (
    <>
      <div className=" text-[#173C36]  w-full  px-6 py-8 bg-[#FFFFFF]  md:rounded-2xl  ">
        <h1 className="font-bold   text-xl">Dashboard</h1>
        <div className="grid  grid-cols-2 font-semibold md:grid-cols-4 mt-10 gap-4">
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
        <div className="grid  grid-cols-1 md:grid-cols-3  mt-10 gap-4">
          <div className="bg-[#F7FAFF] p-4 rounded-md ">
            <h1 className="text-lg font-semibold mb-4 ">Revenue overview</h1>
            <RevenueBarChart />
          </div>
          <div className="bg-[#F7FAFF] p-4 rounded-md ">
            <h1 className="text-lg font-semibold mb-4 ">Rates overview</h1>
            <RatesDoughnutChart />
          </div>
          <div className="bg-[#F7FAFF] p-4 rounded-md ">
            <h1 className="text-lg font-semibold mb-4 ">Quotes by Status</h1>
            <QuotesBarChart />
          </div>
        </div>
        <div className=" text-[#173C36] mt-10  w-full  px-6 py-8 bg-[#F7FAFF]  md:rounded-2xl  ">
          <h1 className="font-bold  text-xl">Revenue overview</h1>
          <div className="grid  grid-cols-1 md:grid-cols-3 mt-10 gap-4">
            <div className="bg-[#FFFFFF] p-4 rounded-md ">
              <h1 className="text-lg font-semibold mb-6 "> By Top Regions</h1>
              <QuotesBarChart />
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-md ">
              <h1 className="text-lg font-semibold mb-6 ">
                {" "}
                By Top Salespeople
              </h1>
              <QuotesBarChart />
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-md ">
              <h1 className="text-lg font-semibold mb-6 "> By Top Products</h1>
              <QuotesBarChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
