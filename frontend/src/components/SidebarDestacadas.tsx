import React from "react";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "./ui";
import { useNoticiasRecientes } from "../hooks";
import { APP_CONFIG } from "../constants";

interface SidebarDestacadasProps {
  maxItems?: number;
}

const SidebarDestacadas: React.FC<SidebarDestacadasProps> = ({ 
  maxItems = APP_CONFIG.SIDEBAR.MAX_ITEMS 
}) => {
  const { noticias: destacadas, loading, error } = useNoticiasRecientes(maxItems);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <LoadingSpinner className="w-6 h-6" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4">
        <p className="text-red-400 text-sm">Error al cargar destacadas</p>
      </div>
    );
  }

  if (destacadas.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-sm">No hay noticias disponibles</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {destacadas.map((noticia, index) => (
        <Link
          key={noticia.id}
          to={`/detalle/${noticia.id}`}
          className="block group"
        >
          <article className="p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 hover:bg-gray-600/70 hover:border-blue-500/50 transition-all duration-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  #{index + 1}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                  {noticia.titulo}
                </h4>

                <div className="mt-2 flex items-center text-xs text-gray-400">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="truncate">{noticia.autor}</span>
                </div>
              </div>
            </div>

            {/* Barrita azul que aparece cuando haces hover */}
            <div className="mt-2 h-0.5 bg-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </article>
        </Link>
      ))}

      <div className="pt-3 border-t border-gray-700">
        <Link
          to="/"
          className="flex items-center justify-center w-full py-2 px-3 text-xs font-medium text-blue-300 hover:text-blue-200 hover:bg-blue-600/20 rounded-lg transition-all duration-200"
        >
          <span>Ver todas las noticias</span>
          <svg
            className="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SidebarDestacadas;
