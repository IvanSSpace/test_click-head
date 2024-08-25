"use client";

import { useState } from "react";
import { useBalanceStore } from "@/store/store";

const BalanceComponent = () => {
  const {
    dollars,
    coins,
    addDollars,
    buyWithDollars,
    convertDollarsToCoins,
  } = useBalanceStore();

  const [dollarAmount, setDollarAmount] = useState("");
  const [coinAmount, setCoinAmount] = useState("");

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    if (!isNaN(Number(value))) {
      setter(value);
    }
  };

  const handleAddDollars = () => {
    const amount = parseFloat(dollarAmount);
    if (amount > 0) {
      addDollars(amount);
      setDollarAmount("");
    } else {
      alert("Please enter a valid amount.");
    }
  };

  const handleBuyWithDollars = () => {
    const amount = parseFloat(dollarAmount);
    if (amount > 0 && dollars >= amount) {
      buyWithDollars(amount);
      setDollarAmount("");
    } else {
      alert("Insufficient dollars or invalid amount.");
    }
  };

  const handleConvertDollarsToCoins = () => {
    const amount = parseFloat(dollarAmount);
    if (amount > 0 && dollars >= amount) {
      convertDollarsToCoins(amount);
      setDollarAmount("");
    } else {
      alert("Insufficient dollars or invalid amount.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 pb-32">
      <div className="max-w-[400px] w-full bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Balance Management</h2>

        <div className="mb-4">
          <p className="text-lg">Dollars: <span className="font-semibold">{dollars}</span></p>
          <p className="text-lg">Coins: <span className="font-semibold">{coins}</span></p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter dollars amount"
            value={dollarAmount}
            onChange={(e) => handleInputChange(setDollarAmount, e.target.value)}
            className="w-full h-10 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-market-pink"
          />
          
            <button
              onClick={handleAddDollars}
              className="w-full h-10 bg-market-pink text-white rounded-md hover:bg-market-pink-dark"
            >
              Add Dollars
            </button>
        

          <button
            onClick={handleConvertDollarsToCoins}
            className="w-full h-10 bg-market-pink text-white rounded-md hover:bg-market-pink-dark"
          >
            Convert Dollars to Coins
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceComponent;
