import { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* User button */}
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="flex items-center space-x-2 rounded-lg p-2   transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden">
          <img
            src="/api/placeholder/32/32"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-medium text-[#173C36]">John Doe</span>
        <ChevronDown
          size={16}
          className={`text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu with exact same width as button */}
      {isOpen && (
        <div className="absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
          <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User size={16} className="mr-2" />
            Profile
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
