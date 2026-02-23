"use client";

import { Search, User, Menu, X, ShoppingCart, Flame } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="py-4 ">
      <div className="w-full mx-auto px-4 relative">

        <div className="flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-sm">

          {/* ================= DESKTOP LEFT ================= */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

            <a href="#" className="flex items-center gap-1 hover:text-black transition">
              New Drops
              <Flame size={16} className="text-orange-500" />
            </a>

            <a href="#" className="hover:text-black transition">
              Men
            </a>

            <a href="#" className="hover:text-black transition">
              Women
            </a>

          </div>

          {/* ================= MOBILE LEFT (Dropdown Button) ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#232321]"
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* ================= LOGO ================= */}
          <div className="text-2xl font-extrabold tracking-wide md:static absolute left-1/2 transform -translate-x-1/2 md:transform-none">
            <Link href="/">
              <Image
                src="/navlogo.png"
                alt="Logo"
                width={128}
                height={36}
                className="cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex text-[#232321] items-center gap-4">

            {/* Search only Desktop */}
            <Search className="w-5 h-5 cursor-pointer hidden md:block" />

            {/* Profile always visible */}
            <User className="w-5 h-5 cursor-pointer" />

            {/* Cart */}
            <div className="relative cursor-pointer">
              {/* Shopping Cart Icon bad diye amra ekhane shudhu circle-ti rakhchi */}
              <div
                className="w-7 h-7 flex items-center justify-center rounded-full text-[#232321] "
                style={{ backgroundColor: '#FFA52F' }}
              >
                {totalItems || 0}
              </div>
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