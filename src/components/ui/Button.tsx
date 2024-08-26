import Image from "next/image";
import { useRouter } from "next/navigation";

interface ButtonProps {
  onClick: () => void;
  inCart: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, inCart }) => {
  const router = useRouter();

  const handleClick = () => {
    if (inCart) {
      router.push("/cart");
    } else {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`h-[36px] w-full rounded-md ${inCart ? 'bg-market-green' : 'bg-market-pink'} text-white`}
    >
      <div className="flex flex-row gap-1 sm:px-6 justify-center items-center">
        <Image className="sm:mr-6" src='./add-to-cart.svg' width={20} height={20} alt="basket" />
        <p className="text-nowrap">{inCart ? 'In Cart' : 'Add to Cart'}</p>
      </div>
    </button>
  );
};

export default Button;