"use client";
import { useInCartCount } from "@/store/store";
import Image from "next/image";
import Link from "next/link";

// src/components/Footer.tsx
const Footer = () => {
  const inCartCount = useInCartCount()

  return (
    <footer className="fixed sm:hidden bottom-0 left-0 w-full text-white bg-gray-800 shadow-top shadow-gray-400">
      <div className="bg-blue-red-gradient text-white flex flex-row justify-around items-center p-4">
          <Link className="bg-black p-1 rounded-lg" href="/"><Image src='./main.svg' width={30} height={30} alt="main" /></Link>
          <Link className="relative bg-black p-1 rounded-lg" href="/cart"><Image src='./cart.svg' width={35} height={35} alt="cart" /><div className={`${inCartCount === 0 ? 'hidden' : ''} absolute text-center bg-red-700 w-6 h-6 rounded-full top-[-10px] right-[-10px]`}>{inCartCount}</div></Link>
          <Link className="bg-black p-1 rounded-lg" href="/profile"><Image src='./profile.svg' width={35} height={35} alt="profile" /></Link>
        </div>
    </footer>
  );
};

export default Footer;
