"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ product }) {
  const router = useRouter();
  const { addToCart } = useCart(); // ✅ add this

  const handleAddToCart = () => {
    addToCart(product);   // ✅ FIRST add to cart
    router.push("/cart"); // ✅ THEN go to cart page
  };

  return (
    <div className="container mx-auto px-6 py-16 text-black">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-[400px] object-contain rounded-lg shadow mb-6"
          />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>
        </div>

      </div>
    </div>
  );
}