"use client";

export default function Hero() {
  return (
    <section className=" ">
      <div className="container mx-auto ">

        {/* Big Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-center text-black mt-10">
          DO IT <span className="text-[#4A69E2]">RIGHT</span>
        </h1>

        {/* Hero Card */}
        <div className="relative mt-12 rounded-3xl overflow-hidden shadow-xl border-4 border-green-500">
          
          {/* Background Image */}
          <img
            src="/shoe1.png"alt="Nike Air Max"
            className="w-full h-[500px] object-cover"
          />

          {/* Left Vertical Label */}
          <div className="absolute left-0 top-1/3 -translate-y-1/2 bg-black text-white px-3 py-6 rotate-[-90deg] origin-left rounded-md">
            Nike product of the year
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-bold">NIKE AIR MAX</h2>
            <p className="mt-2 text-sm text-gray-200 max-w-sm">
              Nike introducing the new air max for every on  e's comfort
            </p>

            <button className="mt-4 bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700 transition">
              SHOP NOW
            </button>
          </div>

          {/* Right Small Preview Images */}
          <div className="absolute right-6 bottom-10 flex flex-col gap-4">
            <img
              src="/shoe2.png"
              alt="preview1"
              className="w-20 h-20 rounded-xl border-2 border-purple-500 object-cover cursor-pointer"
            />
            <img
              src="/shoe3.png"
              alt="preview2"className="w-20 h-20 rounded-xl border-2 border-white object-cover cursor-pointer"/>
          </div>

        </div>

      </div>
    </section>
  );
}
