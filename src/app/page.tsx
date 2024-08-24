"use client"
import Card from "@/components/Card";
import { useProductsStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { products, isLoading, errors, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) return <div>Loading...</div>;
  if (errors.length > 0) return <div>Error: {errors.join(", ")}</div>;

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 super-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 mb-32">
          {products.map((card) => (
            <Card key={card.id} title={card.title} price={card.price} />
          ))}
        </div>
      </div>
    </main>
  );
}