import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Changed to a sleeker icon
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-5 px-4">
      {/* 1. Left Spacer (keeps nav links centered) */}
      <div className="hidden md:block w-[150px]"></div>

      {/* 2. Central Navigation Links */}
      <ul className="flex items-center gap-6 text-[#706F6F] font-medium">
        <li className="hover:text-[#D72050] transition-colors">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="hover:text-[#D72050] transition-colors">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="hover:text-[#D72050] transition-colors">
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      {/* 3. Right Side: Profile & Login */}
      <div className="flex items-center gap-4">
        {/* Unique Profile Icon with subtle ring */}
        <div className="cursor-pointer group relative">
          <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200 group-hover:border-[#D72050] transition-all duration-300 shadow-sm overflow-hidden">
            <FaUserCircle className="text-gray-600 text-3xl group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Login Button with Link */}
        <Link href="/login">
          <button className="relative inline-flex rounded-xl items-center justify-center px-10 py-2.5 overflow-hidden font-bold text-white transition-all bg-[#403F3F] group active:scale-95">
            <span className="absolute w-0 h-0 transition-all rounded-xl duration-500 ease-out bg-[#D72050] group-hover:w-full group-hover:h-full"></span>
            <span className="relative">Login</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
