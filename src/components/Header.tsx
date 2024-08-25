'use client';

import { useBalanceStore } from "@/store/store";
import Link from "next/link";

const Header = () => {
  const { dollars, coins} = useBalanceStore()
  return (
    <header className="flex flex-row justify-center sm:justify-around bg-blue-red-gradient text-white p-4">
      <Link href="/">Market</Link>
      <div className="hidden sm:flex">
        <Link href="/cart" className="ml-4">Cart</Link>
        <Link href="/profile" className="mx-4">Profile</Link>
        <div className="flex flex-row gap-2">
        <p>$ {dollars}</p>
        <p>Coin {coins}</p>
        </div>
      </div>
    </header>
  )
}

export default Header;