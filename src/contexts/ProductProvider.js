import React, { createContext, useState, useEffect } from "react";

//create context
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  //product state
  const [products, setProducts] = useState([]);

  //fetch product
  useEffect(() => {
    const fetchproducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchproducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
