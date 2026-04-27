import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";
import Loading from "./loading";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default MainLayoutPage;
