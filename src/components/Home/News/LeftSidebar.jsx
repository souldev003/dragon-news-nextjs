import Link from "next/link";
import React from "react";

const LeftSidebar = ({ categories, activeCategory }) => {
  return (
    <div>
      <h1 className="text-[#403F3F] text-xl font-semibold mb-3">
        All Categories
      </h1>

      <ul className="flex flex-col gap-3 p-2">
        {categories.map((category) => (
          <li key={category.category_id}>
            <Link
              className={`text-[#706F6F] hover:text-[#D72050] block rounded-xl text-xl text-center font-semibold cursor-pointer py-2 ${activeCategory === category.category_id && "bg-[#D72050] text-white hover:text-white"}`}
              href={`/categories/${category.category_id}`}
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
