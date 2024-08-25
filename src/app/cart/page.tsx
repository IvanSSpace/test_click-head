"use client";

import CardCart from "@/components/CardCart";
import { useProductsStore } from "@/store/store";

export default function Cart() {
  const { products } = useProductsStore();

  const cartProducts = products.filter((product) => product.inCart);

  return (
    <main>
      <div>
        <h2>Here you can pay for the goods in one of the offered currencies</h2>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 super-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-8 mb-32">
            {cartProducts.map((card) => (
              <CardCart key={card.id} id={card.id} title={card.title} price={card.price} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}