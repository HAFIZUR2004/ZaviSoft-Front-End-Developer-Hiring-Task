"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0]
  );

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Select a size");
      return;
    }

    addToCart({ ...product, selectedSize });
    router.push("/cart");
  };

  return (
    <div className="bg-[#f5f5f5] py-10">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14">

          {/* ================= LEFT SIDE ================= */}
          <div>

  {/* Desktop Grid */}
  <div className="hidden lg:grid grid-cols-2 gap-6">

  <img
    src={product.images?.[0]}
    alt="product"
    className="w-full h-[300px] object-contain rounded-tl-[48px]"
  />

  <img
    src={product.images?.[1]}
    alt="product"
    className="w-full h-[300px] object-contain rounded-tr-[48px]"
  />

  <img
    src={product.images?.[2]}
    alt="product"
    className="w-full h-[300px] object-contain rounded-bl-[48px]"
  />

  <img
    src={product.images?.[3]}
    alt="product"
    className="w-full h-[300px] object-contain rounded-br-[48px]"
  />

</div>

  {/* Mobile Single Image */}
  <div className="lg:hidden">
    <img
      src={selectedImage}
      alt="product"
      className="w-full h-[350px] object-contain rounded-xl"
    />

    {/* Thumbnail Row */}
    <div className="flex gap-3 mt-4 overflow-x-auto">
      {product.images?.map((img, index) => (
        <img
          key={index}
          src={img}
          onClick={() => setSelectedImage(img)}
          className="w-20 h-20 object-contain cursor-pointer rounded-xl"
        />
      ))}
    </div>
  </div>

</div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              New Release
            </span>

            <h1 className="text-2xl lg:text-3xl font-bold mt-4">
              {product.title}
            </h1>

            <p className="text-xl lg:text-2xl font-semibold text-blue-600 mt-4">
              ${product.price}
            </p>

            {/* COLOR */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Color</p>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                <div className="w-6 h-6 bg-green-700 rounded-full"></div>
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-6">
              <p className="font-semibold mb-3">Size</p>

              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border text-sm ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 space-y-4">

              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
              >
                ADD TO CART
              </button>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                BUY IT NOW
              </button>

            </div>

            {/* ABOUT */}
            <div className="mt-10">
              <h3 className="font-bold mb-3">ABOUT THE PRODUCT</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}