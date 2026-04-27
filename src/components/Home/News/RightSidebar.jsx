import React from "react";
import {
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playGroundImg from "@/assets/playground.png";

import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className="p-4 space-y-8 bg-gray-50 rounded-lg">
      {" "}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Login With</h2>
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full py-2 px-4 border-2 border-blue-400 text-blue-500 rounded-lg font-medium transition-all hover:bg-blue-50 active:scale-95">
            <FaGoogle />
            <span>Login with Google</span>
          </button>

          <button className="flex items-center justify-center gap-2 w-full py-2 px-4 border-2 border-gray-800 text-gray-800 rounded-lg font-medium transition-all hover:bg-gray-800 hover:text-white active:scale-95">
            <FaGithub />
            <span>Login with GitHub</span>
          </button>
        </div>
      </div>
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-gray-800">Find Us On</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            <div className="bg-gray-100 p-2 rounded-full text-blue-600">
              <FaFacebookF />
            </div>
            Facebook
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-50 text-gray-700"
          >
            <div className="bg-gray-100 p-2 rounded-full text-blue-400">
              <FaTwitter />
            </div>
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-4 hover:bg-gray-50 text-gray-700"
          >
            <div className="bg-gray-100 p-2 rounded-full text-pink-600">
              <FaInstagram />
            </div>
            Twitter
          </a>
        </div>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg space-y-5">
        <h2 className="text-xl font-semibold text-gray-800">Q-Zone</h2>

        <div className="bg-white p-2 rounded-lg shadow-sm border-t-2 border-blue-500 relative">
          <Image
            src={swimmingImg}
            alt="Swimming"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-20 border-l border-gray-300 -z-10 rotate-12"></div>{" "}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-32 h-20 border-l border-gray-300 -z-20 rotate-6"></div>{" "}
        </div>

        {/* Class Card */}
        <div className="bg-white p-2 rounded-lg shadow-sm relative">
          <Image
            src={classImg}
            alt="Class"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-20 border-l border-gray-300 -z-10 rotate-12"></div>{" "}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-32 h-20 border-l border-gray-300 -z-20 rotate-6"></div>{" "}
        </div>

        <div className="bg-white p-2 rounded-lg shadow-sm relative">
          <Image
            src={playGroundImg}
            alt="Play Ground"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-20 border-l border-gray-300 -z-10 rotate-12"></div>{" "}
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-32 h-20 border-l border-gray-300 -z-20 rotate-6"></div>{" "}
        </div>
      </div>
      <div className="h-125 rounded-lg bg-linear-to-tr from-[#D72050] to-[#612132] flex items-center justify-center p-8 text-center text-white">
        <div className="space-y-5">
          <h3 className="text-3xl font-extrabold leading-tight">
            Create an Amazing Newspaper
          </h3>
          <p className="text-lg opacity-80">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="bg-[#D72050] px-6 py-3 font-semibold rounded-md text-xl hover:bg-red-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
