import "./App.css";
import Display1 from "./pages/Display1";
import { Route, Routes } from "react-router-dom";
import Display2 from "./pages/Display2";
import Display3 from "./pages/Display3";
import Display5 from "./pages/Display5";
import Navbar from "./components/Navbar";
import Display4 from "./pages/Display4";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Display1 />} />
        <Route exact path="/display2" element={<Display2 />} />
        <Route exact path="/display3" element={<Display3 />} />
        <Route exact path="/display4" element={<Display4 />} />
        <Route exact path="/display5" element={<Display5 />} />
      </Routes>
    </div>
  );
}

export default App;
