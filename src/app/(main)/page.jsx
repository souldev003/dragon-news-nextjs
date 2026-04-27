import Link from "next/link";
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
        <h1 className="text-[#403F3F] text-xl font-semibold mb-3">
          All Categories
        </h1>

        <ul className="flex flex-col gap-3">
          {categories.map((category) => (
            <li key={category.category_id}>
              <Link
                className="text-[#403F3F] block rounded-xl text-xl text-center font-semibold cursor-pointer bg-gray-100 py-2"
                href={`/news/${category.category_id}`}
              >
                {category.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-green-300 col-span-2">
        <h1 className="text-[#403F3F] text-xl font-semibold">
          Dragon News Home
        </h1>
      </div>

      <div className="bg-red-300">
        <h1 className="text-[#403F3F] text-xl font-semibold">Login With</h1>
      </div>
    </div>
  );
};

export default page;
