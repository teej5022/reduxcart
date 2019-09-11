import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/products";

import { ProductArray } from "../../mockdata";

const initialState = {
    products: ProductArray,
    cart: [],
    total: 0
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedItem = state.products.find(
                product => product.id === action.productId
            );
            console.log(action)
            return {
                ...state,
                cart: [...state.cart, addedItem],
                total: state.total + addedItem.price,
                products: state.products.filter(
                    product => product.id !== action.productId
                )
            };
        case REMOVE_FROM_CART:
            const removedItem = state.cart.find(
                product => product.id === action.productId
            );
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.productId),
                products: [...state.products, removedItem],
                total: state.total - removedItem.price
            };
        default:
            return state;
    }
};

export default productsReducer;