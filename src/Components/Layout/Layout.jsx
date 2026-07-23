import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Outlet } from "react-router-dom";

export default function layout() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
