//

import Image from "next/image"

const Button = () => {
  return (
    <button className="h-[36px] w-full rounded-md bg-market-pink text-white">
      <div className="flex flex-row gap-1 justify-center items-center">
        <Image src='./add-to-cart.svg' width={20} height={20} alt="basket" />
        <p className="hidden sm:block">add in cart</p>
      </div>
    </button>
  )
}

export default Button