import axios from "axios";
import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsStore {
  products: Product[];
  isLoading: boolean;
  errors: string[];
  fetchProducts: () => void;
}

const useProductsStore = create<ProductsStore>((set) => ({
  products: [],
  isLoading: false,
  errors: [],
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const products = response.data.products.map((item: any) => {
        const { id, title, price } = item;
        return { id, title, price };
      });
      set({ products, isLoading: false, errors: [] });
    } catch (error) {
      set({ errors: ["Failed to fetch products"], isLoading: false });
    }
  },
}));

export { useProductsStore };