import Image from "next/image";
import Link from "next/link";

// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="fixed sm:hidden bottom-0 left-0 w-full text-white bg-gray-800">
      <div className="bg-blue-red-gradient text-white flex flex-row justify-around items-center p-4">
          <Link href="/"><Image src='./main.svg' width={30} height={30} alt="main" /></Link>
          <Link href="/cart"><Image src='./cart.svg' width={35} height={35} alt="cart" /></Link>
          <Link href="/profile"><Image src='./profile.svg' width={35} height={35} alt="profile" /></Link>
        </div>
    </footer>
  );
};

export default Footer;
