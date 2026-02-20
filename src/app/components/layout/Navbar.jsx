"use client";

import { Search, User, Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="py-4 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 relative">

        <div className="flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-sm">

          {/* ================= DESKTOP LEFT ================= */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#">New Drops 🔥</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
          </div>

          {/* ================= MOBILE LEFT (Dropdown Button) ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* ================= LOGO ================= */}
          <div className="text-2xl font-extrabold tracking-wide md:static absolute left-1/2 transform -translate-x-1/2 md:transform-none">
            KICKS
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-4">

            {/* Search only Desktop */}
            <Search className="w-5 h-5 cursor-pointer hidden md:block" />

            {/* Profile always visible */}
            <User className="w-5 h-5 cursor-pointer" />

            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>

          </div>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
        {open && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow p-4 space-y-4 text-sm">
            <a href="#" className="block">New Drops 🔥</a>
            <a href="#" className="block">Men</a>
            <a href="#" className="block">Women</a>
          </div>
        )}

      </div>
    </nav>
  );
}