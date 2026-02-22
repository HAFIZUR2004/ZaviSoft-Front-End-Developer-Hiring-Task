"use client";
import { useEffect, useState } from "react";

// --- CategoryItem Component ---
function CategoryItem({ title, image }) {
  return (
    /* h-[450px] কার্ডের হাইট এবং relative পজিশন ব্যবহার করা হয়েছে */
    <div className="relative w-full h-[450px] md:h-[500px] group overflow-hidden border-r border-gray-800">
      
      {/* Background Image: absolute inset-0 এবং object-cover দিয়ে পুরো কার্ড কভার করা হয়েছে */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay: টেক্সট স্পষ্ট করার জন্য একটি হালকা ডার্ক লেয়ার */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Content: টেক্সট এবং আইকন ইমেজের ওপরে পজিশন করা হয়েছে */}
      <div className="absolute inset-0 p-8 flex justify-between items-end">
        <h3 className="text-white text-3xl font-black leading-[0.9] uppercase break-words w-2/3 drop-shadow-lg">
          {title}
        </h3>
        
        {/* Arrow Icon */}
        <div className="bg-white text-black p-4 rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// --- Main CategoryList Component ---
export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const nextSlide = () => {
    // ডেক্সটপে ২টা কার্ড দেখালে (length - 2) পর্যন্ত স্লাইড হবে
    if (currentIndex < categories.length - 2) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
// flex
  return (
    <section className="bg-[#1a1a1a] pt-0 w-full   overflow-hidden">
      <div className=" md:w-full pl-8  ">
        
        {/* Header Section */}
        <div className="flex justify-between items-center py-6 mb-2"> 
          <h2 className="text-white text-[24px] md:text[76px] pl-5 font-semibold  tracking-tight uppercase leading-none">
            CATEGORIES
          </h2>
          
          <div className="flex gap-3 pr-6">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-3 rounded-md transition ${currentIndex === 0 ? 'opacity-20 bg-gray-700 cursor-not-allowed' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
            >
              ❮
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentIndex >= categories.length - 2}
              className={`p-3 rounded-md transition ${currentIndex >= categories.length - 2 ? 'opacity-20 bg-gray-700 cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
            >
              ❯
            </button>
          </div>
        </div>

        {/* Slider Container */}
        
{/* Grid Container
<div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-tl-[60px] md:rounded-tl-[100px]">
  {categories.map((cat) => (
    <CategoryItem key={cat.id} title={cat.name} image={cat.image} />
  ))}
</div> */}

        <div className="relative overflow-hidden rounded-tl-[80px]">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {categories.map((cat) => (
              /* min-w-[100%] করলে মোবাইলে ১টা এবং ডেক্সটপে md:min-w-[50%] করলে ২টা দেখাবে */
              <div key={cat.id} className="min-w-full md:min-w-[50%] flex-shrink-0"> 
                <CategoryItem title={cat.name} image={cat.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}