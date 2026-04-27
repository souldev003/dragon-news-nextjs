/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaRegEye,
  FaStar,
  FaCalendarAlt,
  FaShareAlt,
} from "react-icons/fa";

const getSingleNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

const NewsDetails = async ({ params }) => {
  const { id } = await params;
  const newsData = await getSingleNews(id);
  const singleNews = newsData.data[0];

  const { title, details, image_url, category_id, author, total_view, rating } =
    singleNews;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
        <div className="space-y-2">
          <span className="bg-red-100 text-[#D72050] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Exclusive News
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.1]">
            {title}
          </h1>
        </div>
        <Link
          href={`/categories/${category_id}`}
          className="flex items-center gap-2 text-gray-500 hover:text-[#D72050] transition-all font-medium text-sm whitespace-nowrap border px-4 py-2 rounded-md hover:border-[#D72050]"
        >
          <FaArrowLeft /> Back to Category
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={image_url}
              alt={title}
              width={800}
              height={500}
              unoptimized
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4">
              <img
                src={author?.img}
                alt="author"
                className="w-14 h-14 rounded-full ring-4 ring-white shadow-md"
              />
              <div>
                <h4 className="font-bold text-gray-800">
                  {author?.name || "Unknown Author"}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaCalendarAlt />{" "}
                  <span>{author?.published_date || "Jan 12, 2026"}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
              <div className="text-center">
                <div className="flex items-center gap-1 text-orange-400 font-bold">
                  <FaStar /> <span>{rating?.number || 0}</span>
                </div>
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">
                  Rating
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 text-blue-500 font-bold">
                  <FaRegEye /> <span>{total_view || 0}</span>
                </div>
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">
                  Views
                </p>
              </div>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-[#D72050] hover:text-white transition-colors">
                <FaShareAlt />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#D72050] first-letter:mr-3 first-letter:float-left leading-relaxed text-justify mb-6">
              {details}
            </p>

            <div className="space-y-4 text-gray-600 italic border-l-4 border-gray-200 pl-4 py-2">
              "Dragon News provides the most authentic updates from across the
              globe, ensuring our readers stay ahead with verified information."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
