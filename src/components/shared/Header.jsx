import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center mt-12 space-y-4">
      <Image
        className="mx-auto max-w-117.75 max-h-15"
        src={logo}
        width={471}
        height={60}
        alt="logo"
      />

      <h1 className="text-[#706F6F] text-lg">
        Journalism Without Fear or Favour
      </h1>

      <p className="text-[#706F6F] font-medium text-xl">
        {format(new Date(), "EEEE, MMM dd yyyy")}
      </p>
    </div>
  );
};

export default Header;
