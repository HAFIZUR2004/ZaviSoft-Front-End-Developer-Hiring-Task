"use client";

export default function ErrorState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-red-500 text-4xl mb-4">⚠️</div>
      <h2 className="text-xl font-semibold text-gray-800">
        {message || "Something went wrong."}
      </h2>
      <p className="text-gray-500 mt-2">Please try again later.</p>
    </div>
  );
}
