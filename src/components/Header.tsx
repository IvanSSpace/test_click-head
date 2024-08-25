'use client';

import { useBalanceStore, useInCartCount } from "@/store/store";
import { useProductsStore } from "@/store/store";
import Link from "next/link";

const Header = () => {
  const { dollars, coins } = useBalanceStore()
  const inCartCount = useInCartCount()

  return (
    <header className="flex flex-row justify-between bg-blue-red-gradient text-white px-8 p-4">
      <Link className="bg-black rounded-md px-2" href="/">Market</Link>
      <div className="flex flex-row gap-2">
      <div className="hidden sm:flex">
        <div className="relative bg-black rounded-md px-2">
        <Link href="/cart" className="">Cart</Link>
        <div className={`${inCartCount === 0 ? 'hidden' : ''} absolute text-center bg-red-700 w-6 h-6 rounded-full top-[-10px] right-[-10px]`}>{inCartCount}</div>
        </div>
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