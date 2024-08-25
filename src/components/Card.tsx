// src/components/Card.tsx
import Image from 'next/image';
import Button from './ui/Button';
import { useProductsStore } from '@/store/store';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  price: number;
  id: number;
  inCart: boolean;
}

const Card: React.FC<CardProps> = ({ title, price, id, inCart }) => {
  const toggleCart = useProductsStore((state) => state.toggleCart);
  const router = useRouter();

  const handleClick = () => {
    toggleCart(id);
  };

  const handleDivClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="flex flex-col justify-between max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
      <div className='pb-3' onClick={handleDivClick}>
        <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
        <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">{price}</h2>
        <h2 className="text-market-blue mt-1 text-lg">{title}</h2>
      </div>
      <Button onClick={handleClick} inCart={inCart} />
    </div>
  );
};

export default Card;