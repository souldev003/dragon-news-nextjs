import { id } from "date-fns/locale";
import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      title: "Breaking News 1",
    },
    {
      id: 2,
      title: "Breaking News 2",
    },
    {
      id: 3,
      title: "Breaking News 3",
    },
    {
      id: 4,
      title: "Breaking News 4",
    },
    {
      id: 5,
      title: "Breaking News 5",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-400 px-4 py-3 mt-8">
      <button className="bg-[#D72050] text-white px-7 py-3 font-bold rounded-sm hover:bg-[#b01a42] transition-all transform ">
        Latest News
      </button>
      <Marquee
        className="text-2xl md:text-3xl font-bold text-[#403F3F] uppercase tracking-tighter border-b-4 border-[#D72050] pb-1"
        speed={60}
        pauseOnHover
      >
        {" "}
        {news.map((item) => (
          <p className="text-[#403F3F] mx-10" key={item.id}>
            {item.title}
          </p>
        ))}{" "}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
