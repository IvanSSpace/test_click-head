import axios from "axios";
import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  inCart: boolean;
}

interface ProductsStore {
  products: Product[];
  isLoading: boolean;
  errors: string[];
  fetchProducts: () => void;
  toggleCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  isLoading: false,
  errors: [],
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        inCart: false,
      }));
      set({ products, isLoading: false, errors: [] });
    } catch (error) {
      set({ errors: ["Failed to fetch products"], isLoading: false });
    }
  },
  toggleCart: (id: number) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, inCart: !product.inCart } : product
      ),
    }));
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, inCart: false } : product
      ),
    }));
  },
}));

export const useInCartCount = () =>
  useProductsStore((state) => state.products.filter((product) => product.inCart).length);

// src/store/balanceStore.ts

interface BalanceStore {
  dollars: number;
  coins: number;
  addDollars: (amount: number) => void;
  buyWithCoins: (amount: number) => void;
  buyWithDollars: (amount: number) => void;
  convertDollarsToCoins: (amount: number) => void;
}

const useBalanceStore = create<BalanceStore>((set, get) => ({
  dollars: 10, // начальный баланс в долларах
  coins: 0, // начальный баланс в коинах
  addDollars: (amount: number) => {
    if (amount > 0) {
      set((state) => ({ dollars: state.dollars + amount }));
    }
  },
  buyWithDollars: (amount: number) => {
    const currentDollars = get().dollars;
    if (amount > 0 && currentDollars >= amount) {
      set((state) => ({ dollars: Math.round(state.dollars - amount) }));
    } else {
      if (amount <= 0) {
        console.warn("Amount must be greater than 0");
      } else {
        console.warn("Insufficient dollars to complete the purchase");
      }
    }
  },
  buyWithCoins: (amount: number) => {
    const currentCoins = get().coins;
    if (amount > 0 && currentCoins >= amount) {
      set((state) => ({ coins: Math.round(state.coins - amount) }));
    } else {
      if (amount <= 0) {
        console.warn("Amount must be greater than 0");
      } else {
        console.warn("Insufficient coins to complete the purchase");
      }
    }
  },
  convertDollarsToCoins: (amount: number) => {
    const currentDollars = get().dollars;
    if (amount > 0 && currentDollars >= amount) {
      set((state) => ({
        dollars: Math.round(state.dollars - amount),
        coins: state.coins + amount,
      }));
    } else {
      if (amount <= 0) {
        console.warn("Amount must be greater than 0");
      } else {
        console.warn("Insufficient dollars to convert to coins");
      }
    }
  },

}));


interface Bought {
  id: number;
  count: number;
}

interface PurchasedStore {
  bought: Bought[];
  buyProduct: (id: number) => void;
}

const useBoughtStore = create<PurchasedStore>((set) => ({
  bought: [],
  buyProduct: (id: number) => {
    set((state) => {
      const productIndex = state.bought.findIndex((item) => item.id === id);

      if (productIndex !== -1) {
        const updatedBought = [...state.bought];
        updatedBought[productIndex].count += 1;

        return { bought: updatedBought };
      } else {
        return { bought: [...state.bought, { id, count: 1 }] };
      }
    });
  },
}));


export { useProductsStore, useBalanceStore, useBoughtStore };