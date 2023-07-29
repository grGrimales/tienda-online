import React from 'react';
import { Cart } from './components/private/cart/Cart';
import { AdminDashboard } from './components/private/admin/AdminDashboard';
import { AdminProductList } from './components/private/admin/AdminProductList';

const privateRoutes = [
  { path: '/cart', element: <Cart /> },
  { path: '/admin', element: <AdminDashboard /> },
  { path: '/admin/products', element: <AdminProductList /> },
];

export default privateRoutes;
