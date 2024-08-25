"use client";

import Button from "@/components/ui/Button";
import { useProductsStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const toggleCart = useProductsStore((state) => state.toggleCart);
  const { products } = useProductsStore();

  const handleClick = () => {
    toggleCart(parseInt(params.id));
  };

  const product = products.find((p) => p.id === parseInt(params.id));

  console.log("product", product);
  
  if (!product) return null;

  return (
    <main>
      <div>
      <h2>On this page you can view your product in more detail</h2>
      <div className="flex items-center justify-center ">
        <div className="max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
          <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
          <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">{product.price}</h2>
          <h2 className="text-market-blue mt-1 text-lg">{product.title}</h2>
          <Button onClick={handleClick} inCart={product.inCart} />
        </div>
      </div>
      </div>
    </main>
  );
}