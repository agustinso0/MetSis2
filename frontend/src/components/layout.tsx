import React from "react";
import { Link } from "react-router-dom";
import SidebarDestacadas from "./SidebarDestacadas";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold tracking-wide">📰 MetSis Noticias</span>
        <nav className="flex gap-6 ml-8">
          <Link to="/noticias" className="hover:underline">Inicio</Link>
          <Link to="/categorias" className="hover:underline">Categorías</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </nav>
      </div>
    </header>
    <div className="flex flex-1">
      
      <aside className="w-64 bg-blue-800 text-white flex flex-col p-4">
        <div className="mb-6 text-lg font-semibold">Destacadas</div>
        <SidebarDestacadas />
        
        <div className="mt-auto pt-8">
          <button
            className="w-full bg-yellow-500 text-blue-900 font-semibold py-2 rounded hover:bg-yellow-600 transition"
            onClick={() => alert("Funcionalidad de admin próximamente")}
          >
            Iniciar sesión como admin
          </button>
        </div>
      </aside>
      
      <main className="flex-1 p-8">{children}</main>
    </div>
    
    <footer className="bg-gray-200 text-center py-4 text-gray-600">
      © 2025 MetSis | Contacto: meto2@gmail.com | Redes sociales
    </footer>
  </div>
);

export default Layout;