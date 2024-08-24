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

export { useProductsStore };