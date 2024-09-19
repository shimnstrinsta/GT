import React, { useState, createContext } from 'react';

// Crear el contexto
const CartContext = createContext();

// Crear el componente proveedor
export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {       
    const productIds = cartItems.map((item) => item.id);

    if (!productIds.includes(product.id)){
        setCartItems((prevCart) => [...prevCart, product]);
        alert("Producto añadido al carrito!")
    }
    
    
  };

  const removeFromCart = (IDProduct) => {    
    setCartItems((prevCart) => (cartItems.filter(product => product.id != IDProduct)));    
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}> 
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
