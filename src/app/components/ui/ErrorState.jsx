"use client";

export default function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all">
      {/* Modern Icon Design */}
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <span className="text-red-500 text-3xl">⚠️</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Unexpected Error
      </h2>
      
      <p className="text-gray-600 mb-8 max-w-[250px] leading-relaxed">
        {message || "We encountered a technical issue. Our team has been notified."}
      </p>

      {onRetry && (
        <button 
          onClick={onRetry}
          className="w-full py-3 px-6 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
        >
          Try Refreshing
        </button>
      )}
    </div>
  );
}