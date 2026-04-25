import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-white px-4 font-serif">
      <div className="max-w-md w-full text-center">
        {/* Visual Element */}
        <div className="relative mb-10">
          <h1 className="text-[150px] font-black text-gray-100 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-[#403F3F] uppercase tracking-tighter border-b-4 border-[#D72050] pb-1">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-bold text-[#403F3F] mb-4 font-sans">
          THIS STORY IS MISSING
        </h2>
        <p className="text-gray-500 mb-8 font-sans leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <div className="font-sans">
          <Link
            href="/"
            className="inline-block bg-[#D72050] text-white px-10 py-3 font-bold rounded-sm hover:bg-[#b01a42] transition-all transform hover:-translate-y-1 active:translate-y-0"
          >
            GO BACK HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
