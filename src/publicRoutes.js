import React from 'react';
import { Home } from './components/public/Home';
import { ProductList } from './components/public/products/ProductList';
import { Product } from './components/public/products/Product';

const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductList /> },
  { path: '/products/:id', element: <Product /> },
  { path: '/*', element: <Product /> },

];

export default publicRoutes;


