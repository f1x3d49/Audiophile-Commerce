//React Router Imports
import { Routes, Route } from "react-router-dom";

// Routes
import Home from "./pages/Home";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";

function App() {
  return (
    <div className="App font-primary w-full h-full flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </div>
  );
}

export default App;
