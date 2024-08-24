// src/components/Card.tsx
import Image from 'next/image';
import Button from './ui/Button';

interface CardProps {
  title: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ title, price }) => {
    return (
    <div className="flex flex-col justify-between max-w-[320px] bg-white p-4 shadow-lg rounded-lg">
      <div className='pb-3'>
      <div className="h-[216px] w-full bg-blue-red-gradient rounded-lg"></div>
      <h2 className="font-bold lg:text-xl text-market-red mt-2 text-lg">{price}</h2>
      <h2 className="text-market-blue mt-1 text-lg">{title}</h2>
      </div>
      <Button />
    </div>
  );
};

export default Card;
