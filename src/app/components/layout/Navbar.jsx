"use client";

import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" shadow-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between bg-white rounded-full px-8 py-4">
        
        {/* Left Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#">New Drops 🔥</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
        </div>

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          KICKS
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />

          <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            0
          </div>
        </div>

      </div>
    </nav>
  );
}
