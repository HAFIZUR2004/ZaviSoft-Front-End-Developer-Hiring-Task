"use client";

import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProductSlider from "../components/product/ProductSlider";
import { Rubik } from "next/font/google";
import Loader from "../components/ui/Loader";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function ProductLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // কন্টেন্ট লোড হওয়ার জন্য ছোট একটি ডিলে
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // যদি লোডিং হয়, তবে শুধু লোডার দেখাবে
  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center bg-[#e9e9e1] ${rubik.className}`}>
        <Loader />
      </div>
    );
  }

  // লোডিং শেষ হলে মেইন লেআউট দেখাবে
  return (
    <div className={rubik.className}>
      <Navbar />
      <div className="max-w-[1320px] md:px-6 mx-auto">
        {children}
        <ProductSlider />
      </div>
      <Footer />
    </div>
  );
}