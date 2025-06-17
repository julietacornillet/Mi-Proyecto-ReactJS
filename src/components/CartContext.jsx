import React, { createContext, useState } from 'react';

// mi global donde creo el contexto
export const CartContext = createContext();

// Provider = proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Agrego libros al carrito
  const agregarAlCarrito = (book) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find(item => item.id === book.id);
      if (existe) {
        // Si ya existe, sumo la cantidad
        return prevCarrito.map(item =>
          item.id === book.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      // Si no existe, agrego 1
      return [...prevCarrito, { ...book, cantidad: 1 }];
    });
  };

  // Elimino el book x ID
  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
  };

  // Vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider value={{carrito, setCarrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
