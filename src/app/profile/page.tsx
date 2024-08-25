'use client';

import BalanceComponent from "@/components/BalanceComponent";
import { useBoughtStore, useProductsStore } from "@/store/store";

export default function Cart () {
  const { bought } = useBoughtStore();
  const { products } = useProductsStore();

  // Создаем массив купленных продуктов с полной информацией
  const boughtProducts = bought.map((boughtItem) => {
    const product = products.find((p) => p.id === boughtItem.id);
    return {
      ...boughtItem,
      product,
    };
  }).filter((item) => item.product); // Фильтруем, чтобы убрать ненайденные продукты


  return (
    <div>
      <div>
      <h2>Bought Products</h2>
      {boughtProducts.length === 0 ? (
        <p>No products bought yet.</p>
      ) : (
        <div className="grid grid-cols-1 super-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8 mb-32">
          {boughtProducts.map((item) => (
            <div key={item.id} className="flex flex-col gap-4 justify-between max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
            <div className='pb-3'>
              <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
              <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">Price: ${item.product?.price}</h2>
              <h2 className="text-market-blue h-8 mt-1 text-lg">{item.product?.title}</h2>
              <h2 className="text-market-blue h-8 mt-1 pt-5 text-lg">Count {item.count}</h2>
            </div>
            
          </div>
          ))}
        </div>

      )}
    </div>
    
            <BalanceComponent/>

    </div>
  )
}