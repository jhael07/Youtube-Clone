import React, { useState, createContext } from "react";

export const context = createContext({});

const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
