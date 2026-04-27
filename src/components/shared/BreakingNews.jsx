import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const BreakingNews = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/category/01",
  );
  const data = await res.json();
  const news = data.data || [];

  return (
    <div className="flex items-center justify-between bg-gray-400 px-4 py-3 mt-8">
      <button className="bg-[#D72050] text-white px-7 py-3 font-bold rounded-sm hover:bg-[#b01a42] transition-all transform shrink-0">
        Latest News
      </button>

      <Marquee
        className="text-2xl md:text-3xl font-bold text-[#403F3F] uppercase tracking-tighter border-b-4 border-[#D72050] pb-1"
        speed={60}
        pauseOnHover
      >
        {news.length > 0 ? (
          news.map((item) => (
            <Link
              key={item._id}
              href={`/news/${item._id}`}
              className="text-[#403F3F] mx-10 hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          ))
        ) : (
          <p className="text-[#403F3F] mx-10">Loading Latest News Updates...</p>
        )}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
