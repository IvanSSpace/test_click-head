"use client";

import { useProductsStore } from "@/store/store";
import { useEffect } from "react";


const InitializeState = () => {
  const fetchProducts = useProductsStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return null;
};

export default InitializeState;