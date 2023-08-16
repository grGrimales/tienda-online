import React from 'react';
import { Home } from './components/public/Home';
import { ProductList } from './components/public/products/ProductList';
import { Product } from './components/public/products/Product';
import Login from './components/public/auth/Login';
import Register from './components/public/auth/Register';

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductList /> },
  { path: '/product/:id', element: <Product /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register />},

  { path: '/*', element: <Product /> },

];

export default publicRoutes;


