import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";

const Cart = props => {
    const productsInCart = useSelector(state => state.products.cart);
    const total = useSelector(state => state.products.total);

    const renderItems = () => {
        return productsInCart.map(product => {
            return (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    inCart
                />
            );
        });
    };

    return (
        <div className="cart">
            <h1>Cart</h1>
            <h3>Total: ${total.toFixed(2)}</h3>
            <div className="products">{renderItems()}</div>
        </div>
    );
};

export default Cart;
