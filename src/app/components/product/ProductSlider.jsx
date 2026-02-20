"use client";

import { useRef } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";

export default function ProductSlider() {
  const { products, loading, error } = useProducts();
  const sliderRef = useRef(null);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-6 py-16">

      {/* 🔥 Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-black">
          You may also like
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center border rounded-full hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      {/* 🔥 Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[260px] flex-shrink-0">
            <ProductCard
              id={product.id}
              title={product.title}
              image={product.images?.[0]}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}