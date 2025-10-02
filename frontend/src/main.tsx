import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App.tsx';
import NoticiasPage from './pages/NoticiasPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/noticias" replace />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/demo" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
