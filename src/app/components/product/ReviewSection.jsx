"use client";
import Image from "next/image";
import { Star } from "lucide-react";
export default function ReviewSection() {
  const reviews = [
    {
      id: 1,
      image: "/pro1.png",
      avatar: "/profile1.jpg",
    },
    {
      id: 2,
      image: "/pro2.png",
      avatar: "/profile2.png",
    },
    {
      id: 3,
      image: "/pro3.png",
      avatar: "/profile2.png",
    },
  ];

  return (
    <section className="bg-[#E7E7E3] md:px-4 py-16">
      <div className="w-full mx-auto md:px-0 px-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-[#232321] tracking-wide">REVIEWS</h2>
          <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-md">
            SEE ALL
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Top Content */}
              <div className="p-5">

                {/* Title + Avatar */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-[#232321] text-lg">
                      Good Quality
                    </h3>
                    <p className="text-xs text-[#232321]">
                      I highly recommend shopping from kicks
                    </p>
                  </div>

                  <Image
                    src={review.avatar}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full w-10 h-10 border-full object-cover"
                  />
                </div>

                {/* Rating */}
                <div className="flex items-center text-orange-500 text-sm mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}

                  <span className="text-black font-medium ml-2 text-xs font-medium">
                    5.0
                  </span>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="">
                <Image
                  src={review.image}
                  alt="review"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-rb-xl"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}