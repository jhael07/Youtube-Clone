import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.Jsx";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="bg-coldGray950 min-h-screen w-full text-gray-200 justify-center relative  ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
