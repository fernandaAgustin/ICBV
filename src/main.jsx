import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal.jsx";
import MinisterioJovenes from "./components/MinisterioJovenes.jsx";
import Conocenos from "./components/Conocenos.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/jovenes" element={<MinisterioJovenes />} />  
      <Route path="/conocenos" element={<Conocenos />} />  


    </Routes>
  </BrowserRouter>
);