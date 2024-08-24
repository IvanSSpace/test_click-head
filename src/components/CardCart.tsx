// src/components/CardCart.tsx
import Image from 'next/image';
import { useProductsStore } from '@/store/store';

interface CardProps {
  title: string;
  price: number;
  id: number;
}

const CardCart: React.FC<CardProps> = ({ title, price, id }) => {
  const removeFromCart = useProductsStore((state) => state.removeFromCart);

  const handleRemoveClick = () => {
    removeFromCart(id);
  };

  return (
    <div className="flex flex-col gap-4 justify-between max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
      <div className='pb-3'>
        <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
        <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">{price}</h2>
        <h2 className="text-market-blue h-8 mt-1 text-lg">{title}</h2>
      </div>
      <button
        className={`h-[36px] w-full rounded-md bg-market-green text-white`}
      >
        <div className="flex flex-row gap-1 sm:px-6 justify-center items-center">
          <Image className="sm:mr-6" src='./add-to-cart.svg' width={20} height={20} alt="basket" />
          <p className="hidden sm:block text-nowrap">buy product</p>
        </div>
      </button>
      <button
        onClick={handleRemoveClick}
        className={`h-[36px] w-full rounded-md bg-market-red text-white`}
      >
        <div className="flex flex-row gap-1 sm:px-6 justify-center items-center">
          <Image className="sm:mr-6" src='./bin.svg' width={20} height={20} alt="basket" />
          <p className="hidden sm:block text-nowrap">remove product</p>
        </div>
      </button>
    </div>
  );
};

export default CardCart;