"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Heart } from "lucide-react";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";
export default function ProductDetails({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]);
  const [isLoading, setIsLoading] = useState(true);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

 useEffect(() => {
    if (product) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [product]);

  const handleAddToCart = () => {
   if (!selectedSize) {
  toast.error("Please select a size first!");
  return;
}
    addToCart({ ...product, selectedSize });
    router.push("/cart"); 
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
     toast.error("Please select a size first!");
      return;
    }
    addToCart({ ...product, selectedSize });
    toast.success("Added to cart successfully!");
    router.push("/cart");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#e9e9e1]">
        <Loader /> 
      </div>
    );
  }

  return (
    <div className="bg-[#e9e9e1] min-h-screen py-6 md:py-12">
      <div className="w-full mx-auto md:px-0 px-4 ">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          
          {/* ================= LEFT SIDE: IMAGE GRID ================= */}
          <div className="space-y-4">
            
            <div className="hidden lg:grid grid-cols-2 gap-[6px]">
              {product.images?.slice(0, 4).map((img, idx) => (
                <div 
                  key={idx} 
                  className={`overflow-hidden flex items-center justify-center
                    ${idx === 0 ? "aspect-square rounded-tl-[48px]" : ""} 
                    ${idx === 1 ? "aspect-[4/5] rounded-tr-[48px]" : ""}
                    ${idx === 2 ? "aspect-[4/5] rounded-bl-[48px]" : ""}
                    ${idx === 3 ? "aspect-square rounded-br-[48px]" : ""}`}
                >
                  <img
                    src={img}
                    alt={`product-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile: Corner rounding 16px and Indicators on top of big image */}
            <div className="lg:hidden space-y-4">
              {/* Main Image with 16px border radius on all sides */}
              <div className="relative overflow-hidden aspect-square flex items-center justify-center rounded-[16px]">
                <img
                  src={selectedImage}
                  alt="product"
                  className="w-full h-full object-cover"
                />
                
                {/* Dots indicator OVER the big image at the bottom */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {product.images?.slice(0, 5).map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all ${selectedImage === product.images[idx] ? "w-6 bg-black" : "w-1.5 bg-gray-400/70"}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnail row with 6px gap and 12px rounding */}
              <div className="flex gap-[6px] overflow-x-auto no-scrollbar px-2 md:px-0 py-2">
                {product.images?.map((img, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`min-w-[80px] h-[80px] cursor-pointer transition-all  overflow-hidden rounded-[12px]
                      ${selectedImage === img ? "ring-2 ring-black ring-offset-2" : "opacity-70"}`}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: DETAILS ================= */}
          <div className="flex flex-col">
            <div>
              <span className="bg-[#4d69ff] text-white text-[10px] uppercase font-bold px-3 py-1.5 rounded-br-xl rounded-tl-xl tracking-wider">
                New Release
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 text-[#1a1a1a] uppercase leading-tight">
              {product.title}
            </h1>

            <p className="text-2xl font-bold text-[#4d69ff] mt-2">
              ${product.price}.00
            </p>

            {/* COLOR SECTION */}
            <div className="mt-8">
              <p className="font-bold text-xs uppercase tracking-widest text-gray-500 mb-3">Color</p>
              <div className="flex gap-3">
                <button className="w-8 h-8 rounded-full bg-[#2a2d36] ring-2 ring-offset-2 ring-black"></button>
                <button className="w-8 h-8 rounded-full bg-[#6b7c6a] hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all"></button>
              </div>
            </div>

            {/* SIZE SECTION */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <p className="font-bold text-xs uppercase tracking-widest text-gray-500">Size</p>
                <button className="text-[10px] font-bold underline uppercase">Size Chart</button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg text-sm font-bold transition-all border
                      ${selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-200 hover:border-black"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-10 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all"
              >
                Add to Cart
              </button>
              <button className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50">
                <Heart size={20} />
              </button>
            </div>

            <button
            onClick={handleBuyNow}
             className="w-full mt-3 bg-[#4d69ff] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#3d56d9] transition-all">
              Buy It Now
            </button>

            {/* ABOUT THE PRODUCT */}
            <div className="mt-12 pt-8 border-t border-gray-300">
              <h3 className="font-extrabold text-sm uppercase tracking-widest mb-4">About the Product</h3>
              <p className="text-gray-500 text-[13px] font-medium mb-4">Shadow Navy / Army Green</p>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-6 space-y-2 text-[13px] text-gray-600 font-medium">
                <li>• This product is excluded from all promotional discounts.</li>
                <li>• Pay over time in interest-free installments.</li>
                <li>• Join adiClub to get unlimited free shipping.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}