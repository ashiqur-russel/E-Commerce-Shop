import React, { useState, useEffect, createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //Cart state
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
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
  //Remove from cart
  const removeItem = (id) => {
    console.log("Item remove : ", id);
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  console.log(cart);
  return (
    <CartContext.Provider value={{ addToCart, cart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
