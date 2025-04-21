import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal.jsx";
import MinisterioJovenes from "./components/MinisterioJovenes.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/jovenes" element={<MinisterioJovenes />} />   


    </Routes>
  </BrowserRouter>
);