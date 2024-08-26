"use client";

import Card from "@/components/Card";
import { useProductsStore } from "@/store/store";
import { useEffect } from "react";

export default function Home() {
  const { products, isLoading, errors, fetchProducts } = useProductsStore();

  if (isLoading) return <div>Loading...</div>;
  if (errors.length > 0) return <div>Error: {errors.join(", ")}</div>;

  return (
    <main>
      <div>
        <h2 className="bg-black text-white inline-block rounded-md p-1">here you can add the product to the basket</h2>
        <div className="flex items-center mt-5 justify-center">
          <div className="grid grid-cols-1 super-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 mb-32">
            {products.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                inCart={card.inCart}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}