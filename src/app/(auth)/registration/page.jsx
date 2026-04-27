"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-10 rounded-none shadow-xl border border-gray-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#403F3F]">
            Register your account
          </h2>
          <div className="h-1 w-20 bg-[#D72050] mx-auto mt-4"></div>
        </div>

        <form className="space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-[#403F3F] mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-4 bg-gray-100 border-none rounded-none focus:ring-2 focus:ring-[#D72050] outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#403F3F] mb-2">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Enter your photo URL"
                className="w-full px-4 py-4 bg-gray-100 border-none rounded-none focus:ring-2 focus:ring-[#D72050] outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#403F3F] mb-2">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-4 bg-gray-100 border-none rounded-none focus:ring-2 focus:ring-[#D72050] outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#403F3F] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Logic to toggle type
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-4 bg-gray-100 border-none rounded-none focus:ring-2 focus:ring-[#D72050] outline-none text-sm transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#D72050] transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 accent-[#D72050] cursor-pointer"
                required
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-500 cursor-pointer"
              >
                Accept{" "}
                <span className="font-bold text-[#706F6F]">
                  Term & Conditions
                </span>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold text-white bg-[#403F3F] hover:bg-[#2e2e2e] transition-all active:scale-[0.98]"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-gray-600">
            Already Have An Account?{" "}
            <Link
              href="/login"
              className="text-[#D72050] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
