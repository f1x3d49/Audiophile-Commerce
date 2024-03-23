import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App font-primary w-full h-full flex flex-col justify-center items-center">
      <Home />
    </div>
  );
}

export default App;
