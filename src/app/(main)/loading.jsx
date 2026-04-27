"use client";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-100 gap-4">
      <HashLoader color="#D72050" size={60} />
      <h2 className="text-xl font-semibold text-[#403F3F]">Please Wait...</h2>
    </div>
  );
};

export default Loading;
