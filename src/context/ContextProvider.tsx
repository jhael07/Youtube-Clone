import React, { useState, createContext } from "react";

export const context = createContext({});

const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <context.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
