"use client";

import { useCart } from "@/context/CartContext";

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
    <div className="container mx-auto px-6 py-16 text-black">

      <h1 className="text-3xl font-bold mb-10">Your Bag</h1>

      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 border-b pb-6">

                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>

                  <div className="flex gap-4 mt-3 items-center">

                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="border px-2 py-1"
                    >
                      {[1,2,3,4,5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>

                  </div>
                </div>

                <div className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="border p-6 rounded-lg h-fit">

            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800 transition">
              Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}