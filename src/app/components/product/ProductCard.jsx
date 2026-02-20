"use client";
import Link from "next/link";

export default function ProductCard({ id, title, image, price }) {

  const safeImage =
    image && image.startsWith("http")
      ? image
      : "https://picsum.photos/300/300";

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer">
        
        <img
  src={image || "https://picsum.photos/300/300"}
  alt={title}
  onError={(e) => {
    e.target.src = "https://picsum.photos/300/300";
  }}
  className="w-full h-40 object-contain"
/>

        <h3 className="mt-2 font-semibold">{title}</h3>
        <p className="text-blue-600 font-bold">${price}</p>

        <div className="mt-2 bg-black text-white py-1 text-xs text-center rounded">
          VIEW PRODUCT - ${price}
        </div>
      </div>
    </Link>
  );
}