import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container mx-auto py-4">
      <div></div>

      <ul className="flex items-center gap-4 text-[#706F6F]">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
          <FaUser className="text-gray-700 text-2xl" />
        </div>
        <button className="btn px-8 text-white bg-[#D72050] border border-[#D72050]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
