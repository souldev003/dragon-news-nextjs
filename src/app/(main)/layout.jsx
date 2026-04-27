import BreakingNews from "@/components/shared/BreakingNews";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayoutPage = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayoutPage;
