import React, { useState, useEffect, createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //Cart state
  const [cart, setCart] = useState([]);
  //Add to Cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    //check if item is already exists in the cart
    const cartItem = cart.find((item) => item.id === newItem.id);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
