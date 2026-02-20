import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ProductSlider from "../components/product/ProductSlider";

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