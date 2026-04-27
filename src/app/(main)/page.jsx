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

const getNewsData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const page = async () => {
  const categoriesData = await getCategoriesData();

  const categories = categoriesData.data.news_category;

  // console.log(categories);

  const newsData = await getNewsData("01");

  const news = newsData.data;
  // console.log(news);

  return (
    <div className="grid grid-cols-4 container mx-auto">
      <div className="">
        <LeftSidebar categories={categories} activeCategory={"01"} />
      </div>

      <div className="col-span-2">
        <h1 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {news.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
