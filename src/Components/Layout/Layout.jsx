import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="App overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
