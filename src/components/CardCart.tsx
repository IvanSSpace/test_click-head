// src/components/CardCart.tsx
import Image from 'next/image';
import { useBalanceStore, useBoughtStore, useProductsStore } from '@/store/store';

interface CardProps {
  title: string;
  price: number;
  id: number;
}

const CardCart: React.FC<CardProps> = ({ title, price, id }) => {
  const removeFromCart = useProductsStore((state) => state.removeFromCart);
  const { buyWithDollars, buyWithCoins, dollars, coins } = useBalanceStore();
  const { buyProduct } = useBoughtStore();

  const  handleBuyUseDollars = () => {
    if (dollars > price) {
      buyWithDollars(price)
      buyProduct(id)
    } else {
      console.log('Not enough dollars');
      
    }
  }

  const handleBuyUseCoins = () => {
    if (coins > price) {
      buyWithCoins(price)
      buyProduct(id)
    } else {
      console.log('Not enough coins');
      
    }
  } 

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
        onClick={handleBuyUseDollars}
        className={`h-[36px] w-full rounded-md bg-market-green text-white`}
      >
        <div className="flex flex-row gap-1 sm:px-6 justify-center items-center">
          <Image className="sm:mr-6" src='./dollar.svg' width={20} height={20} alt="basket" />
          <p className="hidden sm:block text-nowrap">buy use $</p>
        </div>
      </button>
      <button
        onClick={handleBuyUseCoins}
        className={`h-[36px] w-full rounded-md bg-blue-red-gradient text-white`}
      >
        <div className="flex flex-row gap-1 sm:px-6 justify-center items-center">
          <Image className="sm:mr-6" src='./buy.svg' width={20} height={20} alt="basket" />
          <p className="hidden sm:block text-nowrap">buy use Coin</p>
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