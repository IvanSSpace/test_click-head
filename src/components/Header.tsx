'use client';

import { useBalanceStore } from "@/store/store";
import { useProductsStore } from "@/store/store";
import Link from "next/link";

const Header = () => {
  const { dollars, coins } = useBalanceStore()

  return (
    <header className="flex flex-row justify-between bg-blue-red-gradient text-white px-8 p-4">
      <Link className="bg-black rounded-md px-2" href="/">Market</Link>
      <div className="flex flex-row gap-2">
      <div className="hidden sm:flex">
        <Link href="/cart" className="ml-4 bg-black rounded-md px-2">Cart</Link>
        <Link href="/profile" className="mx-4 bg-black rounded-md px-2">Profile</Link>
      </div>
        <p className="hidden sm:block">Balance: </p>
        <p>$ {dollars} |</p>
        <p>Coin {coins}</p>
        </div>
    </header>
  )
}

export default Header;