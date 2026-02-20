"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/Hero";
// import ProductCard from "./components/product/ProductCard";
import ProductGrid from "./components/product/ProductGrid";
import CategoryItem from "./components/category/CategoryItem";
import CategoryList from "./components/category/CategoryList";
import ReviewSection from "./components/product/ReviewSection";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
     <Navbar />
      <Hero/>
      {/* <ProductCard/> */}
      <ProductGrid/>
      <CategoryItem/>
      <CategoryList/>
      <ReviewSection/>
      <Footer/>
      {/* <ProductSection products={products} /> */}
    </>
  );
}
