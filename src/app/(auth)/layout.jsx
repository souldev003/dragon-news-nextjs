import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";
import Footer from "@/components/shared/Footer";

const AuthLayoutPage = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayoutPage;
