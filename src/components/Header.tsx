import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-row justify-center sm:justify-around bg-blue-red-gradient text-white p-4">
      <Link href="/">Market</Link>
      <div className="hidden sm:flex">
        <Link href="/cart" className="ml-4">Cart</Link>
        <Link href="/profile" className="ml-4">Profile</Link>
      </div>
    </header>
  )
}

export default Header;