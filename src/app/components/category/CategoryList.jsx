"use client";

import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="py-12 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">CATEGORIES</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(cat => (
            <CategoryItem
              key={cat.id}
              title={cat.name}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
