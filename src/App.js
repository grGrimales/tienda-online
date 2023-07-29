import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicRoutes from './publicRoutes';
import privateRoutes from './privateRoutes';
import Navbar from './share/navbar/Navbar';
import './index.css';

function App() {
  return (

    <Router>
     <Navbar /> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {/* Agregar componente de autenticación aquí para verificar si el usuario está autenticado */}
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </Router>

  );
}

export default App;



