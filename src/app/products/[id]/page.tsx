"use client";

import { useProductsStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { products } = useProductsStore();
  const router = useRouter();

  const product = products.find((p) => p.id === parseInt(params.id));

  // useEffect(() => {
  //   if (!product) {
  //     router.push("/");
  //   }
  // }, [product, router]);

  if (!product) return null;

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
          <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
          <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">{product.price}</h2>
          <h2 className="text-market-blue mt-1 text-lg">{product.title}</h2>
        </div>
      </div>
    </main>
  );
}