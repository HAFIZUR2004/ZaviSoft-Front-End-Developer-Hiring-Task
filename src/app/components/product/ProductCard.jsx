"use client";
import Link from "next/link";

export default function ProductCard({ id, title, image, price }) {
  return (
    <Link href={`/product/${id}`} className="block w-full">

      <div className="cursor-pointer flex flex-col gap-[10px] w-full">

        {/* Image Box */}
        <div
          className="
            relative
            w-full
            aspect-[318/350]
            rounded-[28px]
            p-[8px]
            bg-[#f3f3f3]
            overflow-hidden
          "
        >

          {/* New Badge */}
          <span
            className="
              absolute top-2 left-2
              bg-blue-600 text-white
              text-xs px-4 py-2
              rounded-br-[20px]
              rounded-tl-[20px]
              z-10
            "
          >
            New
          </span>

          <img
            src={image || "https://picsum.photos/300/300"}
            alt={title}
            onError={(e) => {
              e.target.src = "https://picsum.photos/300/300";
            }}
            className="
              w-full
              h-full
              object-cover
              rounded-[20px]
            "
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm leading-snug text-black">
          {title}
        </h3>

        {/* Button */}
        <button className="w-full bg-black text-white py-2 rounded-md text-sm">
          VIEW PRODUCT - ${price}
        </button>

      </div>

    </Link>
  );
}