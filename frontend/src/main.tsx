import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NoticiasPage from "./pages/NoticiasPage";
import DetallePage from "./pages/DetallePage";
import { AdminPage } from "./pages/AdminPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/noticias" replace />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/detalle/:id" element={<DetallePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
