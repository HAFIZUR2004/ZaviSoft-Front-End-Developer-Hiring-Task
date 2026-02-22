import ProductDetails from "@/app/components/product/ProductDetails";

const getSingleProduct = async (id) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
};

export default async function Page({ params }) {
  const { id } = await params;

  const product = await getSingleProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={product} />;
}
