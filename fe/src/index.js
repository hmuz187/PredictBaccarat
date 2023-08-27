import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CartProvider from "./context/cart";
import ProductsProvider from "./context/product";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductsProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </ProductsProvider>    
);