"use client";

import { useState, useEffect } from "react";
import Loader from "./ui/Loader"; // যদি Loader ফাইলটি ui ফোল্ডারে থাকে

export default function ClientWrapper({ children, rubikClass }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center bg-[#e9e9e1] ${rubikClass}`}>
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
}