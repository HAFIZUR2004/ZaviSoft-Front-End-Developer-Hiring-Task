import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Rubik } from "next/font/google";
import ClientWrapper from "./components/ClientWrapper";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Website",
  description: "Next.js + Tailwind + Rubik Font",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.className} antialiased`}
      >
        <CartProvider>
          {/* ClientWrapper ব্যবহার করা হয়েছে যাতে Metadata নষ্ট না হয় */}
          <ClientWrapper rubikClass={rubik.className}>
            <div className="max-w-[1320px] mx-auto">
              {children}
            </div>
          </ClientWrapper>
        </CartProvider>
      </body>
    </html>
  );
}