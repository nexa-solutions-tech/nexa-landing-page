import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { AssinarPage } from "./pages/Assinar";
import { CadastroPage } from "./pages/Cadastro";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/assinar" element={<AssinarPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
