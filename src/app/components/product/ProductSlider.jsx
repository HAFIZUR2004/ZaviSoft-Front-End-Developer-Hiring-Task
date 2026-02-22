"use client";

import { useRef, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";

export default function ProductSlider() {
  const { products, loading, error } = useProducts();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, offsetWidth } = sliderRef.current;
      // offsetWidth এখন অটোমেটিক স্ক্রিন সাইজ অনুযায়ী ২ বা ৪টি কার্ডের মাপ নিবে
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  if (loading || error) return null;

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = container.offsetWidth; 

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToSlide = (index) => {
    const container = sliderRef.current;
    container.scrollTo({
      left: index * container.offsetWidth,
      behavior: "smooth",
    });
  };

  // ডটস ক্যালকুলেশন: মোবাইলে ২টা করে হলে ডট বাড়বে, ডেস্কটপে ৪টা করে হলে কমবে
  // আমরা একটা এভারেজ ডট সংখ্যা রাখতে পারি অথবা নিচের লজিক ব্যবহার করতে পারি
  const displayProducts = products.slice(0, 12);

  return (
    <section className="bg-[#ececec] py-16">
      <div className="w-full mx-auto md:px-0 px-4">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black">You may also like</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="w-9 h-9 bg-gray-300 rounded-md flex items-center justify-center hover:bg-black hover:text-white transition">‹</button>
            <button onClick={() => scroll("right")} className="w-9 h-9 bg-black text-white rounded-md flex items-center justify-center hover:bg-gray-800 transition">›</button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayProducts.map((product) => (
            <div
              key={product.id}
              /* মোবাইলে (ডিফল্ট): ২টা কার্ড (50% - gap) */
              /* ডেস্কটপে (md): ৪টা কার্ড (25% - gap) */
              className="w-[calc(50%-8px)] md:w-[calc(25%-18px)] flex-shrink-0 snap-start"
            >
              <Link href={`/product/${product.id}`} className="block w-full">
                <div className="flex flex-col gap-[10px] w-full">
                  <div className="relative w-full aspect-[318/350] rounded-[20px] md:rounded-[28px] p-[6px] md:p-[8px] bg-[#f3f3f3] overflow-hidden">
                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] md:text-xs px-2 md:px-4 py-1 md:py-2 rounded-br-[15px] md:rounded-br-[20px] rounded-tl-[15px] md:rounded-tl-[20px] z-10">New</span>
                    <img
                      src={product.images?.[0] || "https://picsum.photos/300/300"}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-[15px] md:rounded-[20px]"
                    />
                  </div>
                  <h3 className="font-semibold text-[13px] md:text-sm leading-snug text-black line-clamp-1">{product.title}</h3>
                  <button className="w-full bg-black text-white py-2 rounded-md text-[12px] md:text-sm uppercase">Add to Cart - ${product.price}</button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {/* আমরা এখানে ডট ফিক্সড করে দিচ্ছি যাতে ডিজাইন ক্লিন থাকে */}
          {[...Array(3)].map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                activeIndex === i ? "w-8 bg-black" : "w-1.5 bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}