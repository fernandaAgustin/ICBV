import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal.jsx";
import NuestraHistoria from "./components/NuestraHistoria.jsx";
import MinisterioJovenes from "./components/MinisterioJovenes.jsx";
import MinisterioNinos from "./components/MinisterioNinos.jsx";
import IglesiaInfo from "./components/IglesiaInfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
      <Route path="/jovenes" element={<MinisterioJovenes />} />   
      <Route path="/nuestra-historia" element={<NuestraHistoria />} />
      <Route path="/ninos" element={<MinisterioNinos />} />
      <Route path="/conocenos" element={<IglesiaInfo />} />


    </Routes>
  </BrowserRouter>
);