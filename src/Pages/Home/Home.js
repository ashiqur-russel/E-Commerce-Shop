import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductProvider";
import Products from "../Products/Products";

const Home = () => {
  //get products from product context provider
  const { products } = useContext(ProductContext);
  //Filter men's and wom's product
  const filterdProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 p-3 gap-3 mx-w-sm mx-auto md:max-w-none overflow-x-scroll">
            {filterdProducts.map((product) => (
              <Products key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
