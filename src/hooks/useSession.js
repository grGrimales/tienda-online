import { useState, useEffect } from 'react';

export const useSession = () => {
  const [sessionIsActive, setSessionIsActive] = useState(false);

  // Función para iniciar sesión
  const login = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem("user", JSON.stringify(userId));
    setSessionIsActive(true);
    console.log(sessionIsActive)
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    setSessionIsActive(false);
  };

  // Inicializar el estado de la sesión
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setSessionIsActive(true);
      console.log(setSessionIsActive)
    }
  }, []);

  // Escuchar cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setSessionIsActive(Boolean(token));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    sessionIsActive,
    login,
    logout,
  };
};

 
