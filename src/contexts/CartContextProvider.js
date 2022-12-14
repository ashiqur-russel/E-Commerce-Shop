import React, { useState, useEffect, createContext } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  //Cart state
  const [cart, setCart] = useState([]);
  //Item amount state
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //Update item amount
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

    const price = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount * currentItem.price;
    }, 0);

    setTotalPrice(price);

    setItemAmount(amount);
  }, [cart]);
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

  // Increase item amount

  const increaseItem = (id) => {
    console.log("Amount increased : ", id);

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    addToCart(cartItem, id);
  };

  const decreaseItem = (id) => {
    console.log("Amount decreased : ", id);
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount <= 1) {
      removeItem(id);
    }
  };

  //Decrease item amount

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeItem,
        clearCart,
        increaseItem,
        decreaseItem,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
