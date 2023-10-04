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
            <Route path="/channel/:channelId" element={<Page.Channel />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App;
