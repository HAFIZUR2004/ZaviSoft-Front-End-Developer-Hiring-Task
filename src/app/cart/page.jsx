"use client";

import { useCart } from "@/context/CartContext";
import { Heart, Trash2, ChevronDown, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 

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
    <div className="w-full py-6 md:py-10">
      <div className="w-full ">
        
        {/* Top Sale Banner Style */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a]">Saving to celebrate</h2>
          <p className="text-gray-600 text-sm mt-1 max-w-2xl">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <div className="mt-2 text-sm">
            <Link href="/login" className="underline font-bold">Join us</Link> or <Link href="/login" className="underline font-bold">Sign-in</Link>
          </div>
        </motion.div>

<div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start justify-center">          
          {/* LEFT SIDE: YOUR BAG */}
<div className="bg-white rounded-[24px] p-6 md:p-10 shadow-sm w-full  ">            <h1 className="text-[24px] md:text-[32px] font-bold text-[#232321] mb-8 uppercase tracking-tight">Your Bag</h1>

            {cartItems.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center"
              >
                <ShoppingBag className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 italic">Items in your bag not reserved — check out now to make them yours.</p>
                <Link href="/" className="inline-block mt-4 text-sm font-bold underline uppercase">Continue Shopping</Link>
              </motion.div>
            ) : (
              <div className="space-y-10">
                <p className="text-sm text-gray-500 mb-6 italic">Items in your bag not reserved — check out now to make them yours.</p>
                
                {/* AnimatePresence helps with exit animations */}
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout // Smoothly moves other items up when one is deleted
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }} // ডিলিট করার সময় ডান দিকে স্লাইড হয়ে যাবে
                      className="flex flex-row md:gap-8 gap-4 pb-10 border-b border-gray-100 last:border-0"
                    >
                      
                      {/* Product Image */}
                      <div className="flex-shrink-0 bg-[#f3f3f3] rounded-[20px] md:rounded-[24px] w-[120px] h-[120px] md:w-44 md:h-44 flex items-center justify-center overflow-hidden">
                        <img
                          src={item.images?.[0]}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                          <div>
                            <h2 className="text-[16px] md:text-[24px] font-bold uppercase text-[#232321] leading-tight tracking-tight">
                              {item.title}
                            </h2>
                            <p className="text-gray-500 text-xs md:text-sm mt-1 font-medium italic">Men's Road Running Shoes</p>
                          </div>
                          <div className="text-[16px] md:text-[24px] font-black text-[#4d69ff]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                        </div>

                        {/* Selectors Section */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-8 mt-4">
                          <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#232321]">
                            <span className="text-gray-400 uppercase">Size</span>
                            <span className="flex items-center gap-1">{item.selectedSize || "10"} <ChevronDown size={14} /></span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm font-bold text-gray-400 uppercase">Qty</span>
                            <select
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                              className="bg-transparent text-[#232321] border-none text-xs md:text-sm font-bold cursor-pointer focus:ring-0 p-0"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-5 mt-6">
                          <button className="text-gray-400 hover:text-black transition-colors">
                            <Heart size={20} />
                          </button>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="sticky top-10"
          >
            <div className="bg-white md:bg-transparent rounded-[24px] p-8 shadow-sm">
              <h2 className="text-[24px] md:text-[32px] text-[#232321] font-semibold mb-8 tracking-tight">Order Summary</h2>

              <div className="space-y-4 text-[15px] font-bold text-gray-500">
                <div className="flex justify-between uppercase">
                  <span>{cartItems.length} ITEM{cartItems.length > 1 ? 'S' : ''}</span>
                  <span className="text-black">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-black">${delivery.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Sales Tax</span>
                  <span className="text-black">-</span>
                </div>

                <div className="flex justify-between font-semibold text-2xl text-gray-500 pt-6 border-t border-gray-100 mt-2">
                  <span className="">Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-[#1a1a1a] text-white py-4 md:py-5 rounded-xl font-bold text-[14px] tracking-[2px] hover:bg-[#4d69ff] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Checkout Now
              </motion.button>
              
              <div className="mt-1">
                <button className="text-xs font-bold underline text-gray-400 hover:text-black tracking-widest transition-colors">
                  Use a promo code
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}