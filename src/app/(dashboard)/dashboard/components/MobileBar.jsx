"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import UserDropdown from "./ProfileMenu";
import Sidebar from "./Sidebar";

export default function MobileBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="bg-white px-4 py-2 rounded  md:hidden shadow">
        <div className="flex items-center justify-between">
          <button onClick={toggleSidebar} className="cursor-pointer">
            {isSidebarOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 mt-3 text-gray-700" />
            )}
          </button>

          <Image
            src="/images/logo.png"
            alt="SureDeal Logo"
            width={140}
            height={20}
            className="object-contain mb-2"
          />

          <UserDropdown />
        </div>
      </nav>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black opacity-50" />

          <div
            ref={sidebarRef}
            className={`relative bg-white w-64  h-full shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button onClick={toggleSidebar} className="cursor-pointer">
              {isSidebarOpen ? (
                <X className="w-6 h-6 text-gray-700 ml-4 mt-6 " />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>

            <div className="mb-0">
              <Sidebar onLinkClick={toggleSidebar} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
