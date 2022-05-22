import React, { Dispatch, SetStateAction } from "react";
import { Product } from "./ProductProvider";

export interface CartProduct extends Product {
  quantity: number;
}

export interface Cart {
  id?: number;
  total: number;
  products: CartProduct[];
}

interface CartContext {
  cart: Cart;
  updateCart?: Dispatch<SetStateAction<Cart>>;
  add?: (product: Product) => void;
}

const initialValue: CartContext = {
  cart: {
    products: [],
    total: 0,
  },
};

const CartContext = React.createContext(initialValue);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, updateCart] = React.useState<Cart>({ products: [], total: 0 });

  const add = (product: Product) => {
    const newCart = { ...cart };

    // Check if the product exists
    const existingProduct = newCart.products.find((p) => p.id === product.id);

    if (existingProduct) {
      // If it exists, increase the quantity
      existingProduct.quantity = existingProduct.quantity
        ? existingProduct.quantity + 1
        : 1;

      // replace existing product with updated product
      newCart.products = newCart.products.map((p) =>
        p.id === product.id ? existingProduct : p
      );

      // update total
      newCart.total = newCart.products.reduce(
        (total, p) => total + p.price * p.quantity,
        0
      );

      // newCart.products.push({ ...existingProduct });

      return updateCart(newCart);
    }

    // If it doesn't exist, add it
    newCart.products.push({ ...product, quantity: 1 });
    newCart.total = newCart.total + product.price;

    updateCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, add }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { useCart, CartProvider, CartContext };
