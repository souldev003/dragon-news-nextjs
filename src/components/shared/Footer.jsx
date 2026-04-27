/* eslint-disable react/jsx-key */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-16 pb-8 mt-20 border-t-4 border-[#D72050]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white italic tracking-tighter">
              DRAGON<span className="text-[#D72050]">NEWS</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Delivering the most reliable and up-to-the-minute news from across
              the globe. Stay ahead with verified journalism and deep-dive
              analysis.
            </p>
            <div className="flex gap-3">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaInstagram />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-md bg-gray-800 flex items-center justify-center hover:bg-[#D72050] hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Top Categories
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D72050]"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  World Politics
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Sports Arena
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Tech Innovations
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white hover:translate-x-1 transition-all inline-block"
                >
                  Business Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D72050]"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D72050] mt-1 shrink-0" />
                <span>32 Dhanmondi, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#D72050] shrink-0" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#D72050] shrink-0" />
                <span>contact@dragonnews.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-[#D72050]"></span>
            </h3>
            <p className="text-sm mb-4">
              Get the latest headlines delivered to your inbox daily.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#D72050] outline-none text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#D72050] text-white px-3 rounded-md hover:bg-red-700 transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[2px] text-gray-500">
          <p>© 2026 Dragon News Portal. Built for the Truth.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
