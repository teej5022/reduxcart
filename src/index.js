import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes, A } from 'hookrouter';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import './styles/index.scss';

import Home from './pages/home';
import Cart from './pages/cart';

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
    products: productsReducer
});

const store = createStore(rootReducer);

const routes = {
    "/": () => <Home />,
    "/cart": () => <Cart />
}



const App = () => {
    return (
        <div Classname="app">
            <A href="/">Home</A>
            <A href="/cart">Cart</A>
            {useRoutes(routes)}
        </div>
    )
}




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


