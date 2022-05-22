import React from "react";
import { useQuery } from "react-query";
import { fetchAllProducts } from "../services/products";

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface ProductContext {
  products?: Product[];
  isLoadingProducts?: boolean;
}

const initialValue: ProductContext = {
  products: undefined,
};

const ProductContext = React.createContext(initialValue);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: products, isLoading: isLoadingProducts } = useQuery(
    "products",
    fetchAllProducts
  );

  return (
    <ProductContext.Provider value={{ products, isLoadingProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const context = React.useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};

export { useProducts, ProductProvider, ProductContext };
