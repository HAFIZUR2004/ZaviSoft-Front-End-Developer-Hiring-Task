"use client";

export default function EmptyState({ title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-gray-400 text-5xl mb-4">📦</div>
      <h2 className="text-xl font-semibold text-gray-800">
        {title || "No Data Found"}
      </h2>
      <p className="text-gray-500 mt-2">
        {description || "There is nothing to display here."}
      </p>
    </div>
  );
}
