/* eslint-disable @next/next/no-img-element */
import LeftSidebar from "@/components/Home/News/LeftSidebar";
import RightSidebar from "@/components/Home/News/RightSidebar";
import React from "react";
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar } from "react-icons/fa";
import Link from "next/link";

const getCategoriesData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  return res.json();
};

const getNewsData = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  return res.json();
};

const CategoryPage = async ({ params }) => {
  const { id } = await params;

  const [categoriesData, newsData] = await Promise.all([
    getCategoriesData(),
    getNewsData(id),
  ]);

  const categories = categoriesData.data.news_category;
  const news = newsData.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto px-4 py-6">
      {/* বাম পাশ: LeftSidebar */}
      <div className="md:col-span-1">
        <LeftSidebar categories={categories} activeCategory={id} />
      </div>

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
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h2>
                  <img
                    src={item.image_url}
                    alt="thumbnail"
                    className="w-full h-75 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 text-sm mb-4">
                    {item.details.slice(0, 250)}...
                  </p>
                  <Link
                    href={`/news/${item._id}`}
                    className="text-orange-500 font-bold"
                  >
                    Read More
                  </Link>
                  <hr className="my-5 border-gray-200" />
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center gap-2 text-orange-400">
                      <FaStar /> {item.rating?.number}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegEye /> {item.total_view || 0}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center border rounded-lg">
              No news found in this category!
            </div>
          )}
        </div>
      </div>

      <div className="md:col-span-1">
        <RightSidebar />
      </div>
    </div>
  );
};

export default CategoryPage;
