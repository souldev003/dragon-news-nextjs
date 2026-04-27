/* eslint-disable @next/next/no-img-element */
import LeftSidebar from "@/components/Home/News/LeftSidebar";
import RightSidebar from "@/components/Home/News/RightSidebar";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";

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

        <div className="md:col-span-2">
          <h2 className="text-[#403F3F] text-xl font-bold mb-5 italic">
            Dragon News Home
          </h2>

          <div className="flex flex-col gap-8">
            {news.length > 0 ? (
              news.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <div className="flex items-center justify-between p-4 bg-gray-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.author?.img}
                        alt="author"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-gray-800 leading-none">
                          {item.author?.name || "Unknown"}
                        </p>
                        <small className="text-gray-500">
                          {item.author?.published_date?.split(" ")[0] ||
                            "No Date"}
                        </small>
                      </div>
                    </div>
                    <div className="flex gap-2 text-gray-500 cursor-pointer">
                      <FaRegBookmark />
                      <FaShareAlt />
                    </div>
                  </div>

                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 hover:text-orange-500 transition-colors cursor-pointer leading-tight">
                      {item.title}
                    </h2>
                    <div className="relative w-full h-75 mb-4">
                      <img
                        src={item.image_url}
                        alt="news-thumbnail"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.details.slice(0, 250)}...
                    </p>
                    <Link
                      href={`/news/${item._id}`}
                      className="text-orange-500 font-bold hover:underline"
                    >
                      Read More
                    </Link>

                    <hr className="my-5 border-gray-200" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-orange-400">
                        <div className="flex">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <span className="text-gray-600 font-medium">
                          {item.rating?.number}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <FaRegEye className="text-lg" />
                        <span className="font-medium">
                          {item.total_view || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-10 text-center border rounded-lg bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-400 italic">
                  No news found in this category!
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="">
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
