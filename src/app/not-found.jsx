// app/not-found.js
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-center px-4">
      <h1 className="text-6xl md:text-8xl font-extrabold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}