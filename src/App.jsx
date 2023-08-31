import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <div className="bg-coldGray950 min-h-screen w-full text-gray-200 justify-center relative  ">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App;
