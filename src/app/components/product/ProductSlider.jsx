"use client";

import { useRef } from "react";
import { useProducts } from "@/hooks/useProducts";

export default function ProductSlider() {
  const { products } = useProducts();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    container.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#ececec] py-16">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-black">
            You may also like
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 bg-gray-300 rounded-md flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 bg-black text-white rounded-md flex items-center justify-center"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar"
        >
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="min-w-[300px] flex-shrink-0"
            >
              {/* Card */}
              <div>

                {/* Image Box */}
                <div className="bg-[#f5f5f5] rounded-3xl p-6 relative">

                  {/* New Badge */}
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    New
                  </span>

                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="w-full h-44 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-sm">
                  {product.title}
                </h3>

                {/* Button */}
                <button className="mt-4 w-full bg-black text-white py-2 rounded-md text-sm">
                  VIEW PRODUCT - ${product.price}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}