import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages";
import { About } from "./pages/about";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
