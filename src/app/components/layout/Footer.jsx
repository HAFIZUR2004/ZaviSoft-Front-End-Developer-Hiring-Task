export default function Footer() {
  return (
    <footer className="mt-20">
      
      {/* Top Blue Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl px-8 md:px-16 py-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
            </h2>

            <p className="mt-3 text-sm text-gray-200">
              Sign up for free! Join the community.
            </p>

            {/* Email Input */}
            <div className="mt-6 flex max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 rounded-l-md bg-white/10 border border-white/30 text-white placeholder-gray-300 focus:outline-none"
              />
              <button className="bg-black px-6 py-3 rounded-r-md text-sm font-semibold hover:bg-gray-800 transition">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Right Big Logo */}
          <div className="flex justify-center md:justify-end">
            <h1 className="text-6xl md:text-8xl font-extrabold opacity-90">
              KICKS<span className="text-yellow-400 text-2xl align-top">+</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="bg-black text-white px-8 md:px-16 py-14 rounded-b-3xl relative overflow-hidden">
        
        <div className="grid md:grid-cols-4 gap-10 relative z-10">
          
          {/* About */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">
              About us
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We are the biggest hyperstore in the universe.
              We got you all cover with our exclusive
              collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Runners</li>
              <li>Sneakers</li>
              <li>Basketball</li>
              <li>Outdoor</li>
              <li>Golf</li>
              <li>Hiking</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Contact</li>
              <li>Blogs</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">
              Follow us
            </h3>
            <div className="flex space-x-4 text-gray-400">
              <span>🌐</span>
              <span>📷</span>
              <span>🐦</span>
              <span>🎵</span>
            </div>
          </div>
        </div>

        {/* Big Background Text */}
        <h1 className="absolute bottom-0 left-0 text-[120px] md:text-[200px] font-extrabold text-white/5 select-none">
          KICKS
        </h1>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs py-4 bg-gray-100">
        © All rights reserved
      </div>

    </footer>
  );
}
