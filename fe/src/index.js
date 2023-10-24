import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import CartProvider from "./context/cart";
import AuthProvider from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
  </AuthProvider>
);