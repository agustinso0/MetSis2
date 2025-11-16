import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarDestacadas from "./SidebarDestacadas";
import type { LayoutProps } from "../types/ui";
import { Newspaper, Settings } from "lucide-react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname === "/admin";

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-gray-800/95 backdrop-blur-sm border-b border-gray-700 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link
              to="/noticias"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity py-2"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Newspaper className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight whitespace-nowrap">
                Portal de Noticias
              </span>
            </Link>

            {/* Navegación de administración */}
            <nav className="flex space-x-4">
              <Link
                to="/noticias"
                className={
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
                  (!isAdminPage
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700")
                }
              >
                Noticias
              </Link>
              <Link
                to="/admin"
                className={
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-2 " +
                  (isAdminPage
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-700")
                }
              >
                <Settings className="w-4 h-4" />
                <span>Admin</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {!isAdminPage && (
          <aside className="hidden lg:flex lg:flex-col lg:w-80 bg-gray-800 border-r border-gray-700">
            <div className="flex-1 p-6">
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Noticias Destacadas
                </h2>
                <SidebarDestacadas maxItems={5} />
              </div>
            </div>
          </aside>
        )}

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto">
          <div className="min-h-full">{children}</div>
        </main>
      </div>

      <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Newspaper className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-300 font-medium">
                © 2025 Portal de Noticias 
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
