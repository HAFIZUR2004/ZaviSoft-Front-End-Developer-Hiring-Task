"use client";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}) {
  const baseStyle =
    "px-5 py-2 rounded-md font-medium transition duration-200";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-blue-600 text-white hover:bg-blue-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
