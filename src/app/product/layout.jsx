import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProductSlider from "../components/product/ProductSlider";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300","400","500","700","900"],
  display: "swap",
});

export default function ProductLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
            <ProductSlider/>
      
      <Footer />
    </>
  );
}