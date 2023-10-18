import React, { useState, createContext } from "react";

export const context = createContext(null || {});

const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [watchVideoTitle, setWatchVideoTitle] = useState("");

  return (
    <context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        isLoading,
        setIsLoading,
        searchTerm,
        setSearchTerm,
        watchVideoTitle,
        setWatchVideoTitle,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
