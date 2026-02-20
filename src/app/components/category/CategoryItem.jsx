"use client";

export default function CategoryItem({ title, image }) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-contain"
      />
      <div className="absolute bottom-4 left-4 font-semibold">
        {title}
      </div>
    </div>
  );
}
