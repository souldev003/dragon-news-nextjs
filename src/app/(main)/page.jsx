import LeftSidebar from "@/components/Home/News/LeftSidebar";
import RightSidebar from "@/components/Home/News/RightSidebar";
import React from "react";

const getCategoriesData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const page = async () => {
  const categoriesData = await getCategoriesData();

  const categories = categoriesData.data.news_category;

  console.log(categories);

  return (
    <div className="grid grid-cols-4 container mx-auto">
      <div className="">
        <LeftSidebar categories={categories} activeCategory={"01"} />
      </div>

      <div className="bg-green-300 col-span-2">
        <h1 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h1>
      </div>

      <div className="">
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
