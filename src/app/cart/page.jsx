"use client";

import { useCart } from "@/context/CartContext";
import { Heart, Trash2, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    subtotal,
    delivery,
    total,
  } = useCart();

  return (
    <div className="bg-[#e9e9e1] min-h-screen py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        
        {/* Top Sale Banner Style */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Saving to celebrate</h2>
          <p className="text-gray-600 text-sm mt-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <div className="mt-2 text-sm">
            <Link href="/login" className="underline font-bold">Join us</Link> or <Link href="/login" className="underline font-bold">Sign-in</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start">
          
          {/* LEFT SIDE: YOUR BAG */}
          <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-sm">
            <h1 className="text-3xl font-extrabold mb-8 uppercase tracking-tight">Your Bag</h1>

            {cartItems.length === 0 ? (
              <div className="py-10 text-center">
                <p className="text-gray-500 italic">Items in your bag not reserved- check out now to make them yours.</p>
                <Link href="/" className="inline-block mt-4 text-sm font-bold underline uppercase">Continue Shopping</Link>
              </div>
            ) : (
              <div className="space-y-10">
                <p className="text-sm text-gray-500 mb-6 italic">Items in your bag not reserved- check out now to make them yours.</p>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-6 pb-10 border-b border-gray-100 last:border-0">
                    {/* Product Image */}
                    <div className="bg-[#f3f3f3] rounded-2xl p-2 w-full md:w-44 aspect-square flex items-center justify-center overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-black uppercase text-[#232321] leading-tight tracking-tight">{item.title}</h2>
                          <p className="text-[#232321] text-sm mt-1 font-medium">Men's Road Running Shoes</p>
                          <p className="text-[#232321] text-xs mt-0.5">Enamel Blue/ University White</p>
                        </div>
                        <div className="text-xl font-bold text-[#4d69ff]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-6 mt-6">
                        {/* Size Selector */}
                        <div className="flex items-center gap-2 text-sm font-bold text-[#232321]">
                          <span>Size {item.selectedSize || "10"}</span>
                          <ChevronDown size={16} />
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#232321] uppercase">Quantity</span>
                          <select
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                            className="bg-transparent text-[#232321] border-none text-sm font-bold cursor-pointer focus:ring-0"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4 mt-6">
                        <button className="hover:text-red-500 text-[#232321] transition-colors">
                          <Heart size={20} />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="hover:text-red-500 text-[#232321] transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <div className="space-y-6">
            <div className="p-2 h-fit">
              <h2 className="text-2xl font-black uppercase mb-8 tracking-tight">Order Summary</h2>

              <div className="space-y-4 text-[15px] font-medium text-gray-700">
                <div className="flex justify-between">
                  <span>{cartItems.length} ITEM{cartItems.length > 1 ? 'S' : ''}</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Sales Tax</span>
                  <span>-</span>
                </div>

                <div className="flex justify-between font-black text-xl text-black pt-4 border-t border-gray-300">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[2px] hover:bg-black transition-all flex items-center justify-center gap-2">
                Checkout
              </button>
              
              <div className="mt-6">
                <button className="text-sm font-bold underline uppercase tracking-tight">
                  Use a promo code
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}