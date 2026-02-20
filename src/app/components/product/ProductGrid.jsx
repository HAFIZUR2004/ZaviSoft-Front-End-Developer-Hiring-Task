"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function ProductGrid() {
  const { products, loading, error } = useProducts();
  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div className="container mx-auto px-6 py-12">

      {/* 🔥 Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[74px] text-[#232321] font-bold">
          Don’t miss out <br /> new drops
        </h2>

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#4A69E2] rounded-[#8px] text-white px-5 py-2 rounded hover:bg-gray-800 transition"
          >
          Shop New Drops
          </button>
        )}
      </div>

      {/* 🔥 Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
