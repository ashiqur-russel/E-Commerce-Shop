import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductProvider from "./contexts/ProductProvider";
import SidebarContextProvider from "./contexts/SidebarContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
//product provider
const root = ReactDOM.createRoot(document.getElementById("root"));
//sidebar context
root.render(
  <SidebarContextProvider>
    <CartContextProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartContextProvider>
  </SidebarContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
