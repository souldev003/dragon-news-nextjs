"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={isActive ? "border-b-2 text-[#D72050] border-[#D72050]" : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;
