/* eslint-disable react/prop-types */
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as Page from "./pages";
import ContextProvider from "./context/ContextProvider";

const App = () => {
  return (
    <div className="bg-coldGray950 min-h-screen w-full text-gray-200 justify-center relative  ">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page.Home />} />
            <Route path="search/channel/:channelId" element={<Page.Channel />} />
            <Route path="/search" element={<Page.Search />} />
            <Route path="/video/:id" element={<Page.WatchVideo />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App;
