import React, { useState, createContext } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear el componente proveedor
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));    
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* Cambiar a ThemeContext.Provider */}
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
