import React from "react";
import Nav from "./components/Navbar";
import Meme from "./components/Meme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/app/login" />} />

          <Route path="app/login" element={<Meme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
