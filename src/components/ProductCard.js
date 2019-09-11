import React from "react"
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../store/actions/products";



const ProductCard = props => {
    const dispatch = useDispatch();
    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img src={props.image} alt="" />
            </div>
            <div className="product-card-metadata">
                <div className="product-topline-metadata">
                    <p>{props.name}</p>
                    <p>{props.price.toFixed(2)}</p>
                </div>
                <p className="product-description">{props.description}</p>
                {props.inCart ? (
                    <button onClick={() => dispatch(removeFromCart(props.id))}>
                        Remove From Cart
                    </button>
                ) : (
                        <button onClick={() => dispatch(addToCart(props.id))}>
                            Add to Cart
                    </button>
                    )}
            </div>

        </div>
    )
}

export default ProductCard