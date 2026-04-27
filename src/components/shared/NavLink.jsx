"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    pathname === href || (href === "/" && pathname.startsWith("/categories"));

  return (
    <Link
      href={href}
      className={`relative py-1 transition-all duration-300 font-semibold ${
        isActive ? "text-[#D72050]" : "text-[#706F6F] hover:text-[#D72050]"
      }`}
    >
      {children}

      <span
        className={`absolute left-0 bottom-0 h-0.5 bg-[#D72050] transition-all duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
