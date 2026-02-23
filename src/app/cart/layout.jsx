"use client";

import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProductSlider from "../components/product/ProductSlider";
import Loader from "../components/ui/Loader";

export default function CartLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e9e9e1]">
        <Loader />
      </div>
    );
  }

  // লোডিং শেষ হলে লেআউট দেখাবে
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-[1320px] mx-auto">
        {children}
      </main>

      <ProductSlider />
      <Footer />
    </div>
  );
}