"use client";
import { IoSearchSharp } from "react-icons/io5";
export default function SearchBar() {
  return (
    <div className="flex  shadow rounded-full p-1 w-full max-w-sm max-sm:w-[50px]  ">
      <button className=" text-[20px] px-4 py-2 rounded cursor-pointer max-md:px-2">
        <IoSearchSharp />
      </button>
      <input
        type="text"
        // value={value}
        // onChange={(e) => onChange(e.target.value)}
        placeholder="Search "
        className="w-full max-w-sm outline-none text-[15px] ml-2 "
      />
    </div>
  );
}
