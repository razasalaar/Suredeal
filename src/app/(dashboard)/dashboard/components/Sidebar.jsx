"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquareQuote,
  Users,
  Package2,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkClasses = (path) =>
    `flex items-center justify-start pl-4 text-[13px] py-3 gap-2 transition-all duration-50 ${
      isActive(path) ? "bg-[#218C7D] text-white font-semibold" : "text-gray-600"
    }`;

  const iconClass = (path) =>
    `w-6 h-6 ${isActive(path) ? "text-white" : "text-[#218C7D]"}`;

  return (
    <div className="bg-white h-screen mt-4">
      <div className="flex justify-center mb-5 max-md:hidden">
        <Image
          src="/images/logo.png"
          alt="SureDeal Logo"
          width={140}
          height={40}
          className="object-contain "
        />
      </div>

      <nav className="flex flex-col gap-20 mt-20">
        <div className="space-y-4 items-center text-center">
          <Link href="/dashboard" className={linkClasses("/dashboard")}>
            <LayoutDashboard className={iconClass("/dashboard")} />
            <span className="text-[16px]">Dashboard</span>
          </Link>

          <Link
            href="/dashboard/quotations"
            className={linkClasses("/dashboard/quotations")}
          >
            <MessageSquareQuote
              className={iconClass("/dashboard/quotations")}
            />
            <span className="text-[16px]">Quotations</span>
          </Link>

          <Link
            href="/dashboard/customers"
            className={linkClasses("/dashboard/customers")}
          >
            <Users className={iconClass("/dashboard/customers")} />
            <span className="text-[16px]">Customers</span>
          </Link>

          <Link
            href="/dashboard/products"
            className={linkClasses("/dashboard/products")}
          >
            <Package2 className={iconClass("/dashboard/products")} />
            <span className="text-[16px]">Products</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
