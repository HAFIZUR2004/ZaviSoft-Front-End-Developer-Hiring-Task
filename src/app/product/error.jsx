'use client';

import { useEffect } from 'react';
import ErrorState from "@/app/components/ui/ErrorState";
export default function Error({ error, reset }) {
  
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error("Critical Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4">
      {/* Container to give it some breathing space */}
      <div className="max-w-md w-full">
        <ErrorState 
          message="Oops! Something went wrong while loading the products." 
          onRetry={() => reset()} 
        />
        
        {/* Optional: A subtle hint for the user */}
        <p className="mt-4 text-sm text-gray-400 text-center">
          If the problem persists, please check your internet connection or try again later.
        </p>
      </div>
    </div>
  );
}