import { Facebook, Instagram, Plus, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 max-w-[1320px] mx-auto px-4">
      
      {/* 1. Top Blue Section: Newsletter */}
      <div className="bg-[#4a69ff] rounded-t-[32px] px-8 md:px-16 py-16 -mb-11 text-white flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* Left Side Text */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter">
            JOIN OUR KICKSPLUS <br /> CLUB & GET 15% OFF
          </h2>
          <p className="mt-4 text-[15px] font-semibold text-blue-100 uppercase tracking-wide">
            Sign up for free! Join the community.
          </p>
          
          {/* Email Input Field */}
          <div className="mt-8 flex gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-xl bg-transparent border border-white/50 text-white placeholder-white/70 focus:outline-none focus:border-white transition"
            />
            <button className="bg-[#232321] px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-black transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Right Side: Small K+ Logo */}
        <div className="hidden md:block">
           <div className="relative">
              <img src="/footerlogo.png" alt="Logo" className="w-[351px] h-[88px]" /> 
              {/* উপরে ছোট হলুদ ডট টা ইমেজে লোগোর সাথেই থাকার কথা, নাহলে নিচের div টি ব্যবহার করুন */}
              <div className="absolute -top-1 -right-4 bg-yellow-400 w-6 h-6 rounded-full border-2 border-[#4a69ff] flex items-center justify-center">
  <Plus size={14} className="text-[#4a69ff] stroke-[4px]" />
      </div>
           </div>
        </div>
      </div>

      {/* 2. Bottom Dark Section */}
      <div className="bg-[#232321] text-white mt-[-32px] pt-32 pb-6 px-8 md:px-16 rounded-[48px] relative overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          
          {/* About Us */}
          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase tracking-tighter mb-6">
              About us
            </h3>
            <p className="text-gray-300 text-sm font-medium leading-relaxed max-w-[280px]">
              We are the biggest hyperstore in the universe. We got you all cover with our exclusive collections and latest drops.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase tracking-tighter mb-6">
              Categories
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm font-semibold uppercase tracking-tight">
              <li className="hover:text-yellow-400 cursor-pointer transition">Runners</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Sneakers</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Basketball</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Outdoor</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Golf</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Hiking</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase tracking-tighter mb-6">
              Company
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm font-semibold uppercase tracking-tight">
              <li className="hover:text-yellow-400 cursor-pointer transition">About</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Contact</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Blogs</li>
            </ul>
          </div>

          {/* Social Links (ইমেজের মতো ডান পাশে) */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-yellow-400 font-extrabold text-xl uppercase tracking-tighter mb-6">
              Follow us
            </h3>
            <div className="flex space-x-5">
              <Facebook className="text-white hover:text-yellow-400 cursor-pointer transition" size={20} />
              <Instagram className="text-white hover:text-yellow-400 cursor-pointer transition" size={20} />
              <Twitter className="text-white hover:text-yellow-400 cursor-pointer transition" size={20} />
              {/* ইমেজে একটি টিকটক আইকনও দেখা যাচ্ছে */}
              <span className="font-bold hover:text-yellow-400 cursor-pointer transition">𝅘𝅥𝅮</span> 
            </div>
          </div>
        </div>

        {/* 3. Huge KICKS Logo (একদম নিচ থেকে লেগে থাকবে) */}
        <div className="mt-10 mr-[40px] flex justify-center w-full">
          <img
            src="/foot.png" 
            alt="KICKS Big Logo"
            className="w-full h-auto object-contain select-none translate-y-6 md:translate-y-12" 
          />
        </div>
      </div>

      {/* 4. Copyright Section */}
      <div className="py-6 flex justify-center">
        <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>

    </footer>
  );
}