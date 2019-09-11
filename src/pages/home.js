import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

const Home = props => {
  const products = useSelector(state => state.products.products);
  const cart = useSelector(state => state.products.cart);

  const renderItems = () => {
    return products.map(product => {
      return (
        <ProductCard
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          description={product.description}

        />
      );
    });
  };

  return (
    <div className="home">
      <h1>Home</h1>
      <div className="products">{renderItems()}</div>
    </div>
  );
};

export default Home;