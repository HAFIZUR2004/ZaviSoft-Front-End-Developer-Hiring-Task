"use client";

export default function Hero() {
  return (
    <section className="relative">
      <div className="w-full mx-auto px-4">

        {/* Big Heading */}
        <h1 className="text-5xl md:text-[100px] font-extrabold text-center text-black mt-10">
          DO IT <span className="text-[#4A69E2]">RIGHT</span>
        </h1>

        {/* Hero Card */}
        <div className="relative mt-12 rounded-3xl overflow-hidden shadow-xl">

          {/* Large Responsive Image */}
          <img
            src="/shoe1.png"
            alt="Nike Air Max"
            className="w-full h-[400px] md:h-[750px] lg:h-[900px] object-cover rounded-3xl"
          />
          {/* className="w-full h-[400px] md:h-[750px] lg:h-[900px] object-cover rounded-3xl" */}

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Left Vertical Label */}
          {/* <div className="absolute left-3 top-1/3 -translate-y-1/2 bg-amber-700 text-white px-4 py-5 rotate-[-90deg] origin-left rounded-md text-xs md:text-sm">
            Nike product of the year
   </div> */}
          <div className="absolute left-2 md:left-4 top-1/2 md:top-1/3 -translate-y-1/2 bg-black text-white text-[12px] md:text-[16px] px-2 md:px-3 py-3 md:py-4 rotate-[-90deg] origin-left rounded-md whitespace-nowrap">
            Nike product of the year
          </div>

          {/* Bottom Left Text */}
          <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 text-white max-w-[300px] md:max-w-xl">
            <h2 className="text-[24px] md:text-[76px] font-bold md:max-w-lg lg:max-w-xl">
              NIKE AIR MAX
            </h2>            <p className="mt-1 text-xs md:text-[24px] text-[14px] text-gray-200">
              Nike introducing the new air max for
              everyone's comfort
            </p>

            <button className="mt-3 md:mt-4 bg-[#4A69E2] md:px-[32px]  px-[16px] py-2 rounded-md text-xs md:text-sm hover:bg-blue-700 transition">
              SHOP NOW
            </button>
          </div>

          {/* Right Small Preview Images */}
          <div className="absolute right-3 md:right-6 bottom-6 md:bottom-10 flex flex-col gap-2 md:gap-4">
            <img
              src="/shoe2.png"
              alt="preview1"
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-white object-cover cursor-pointer"
            />
            <img
              src="/shoe3.png"
              alt="preview2"
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-white object-cover cursor-pointer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}