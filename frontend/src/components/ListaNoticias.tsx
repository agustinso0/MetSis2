import type { Noticia } from "../types/noticia";
import { NoticiasService } from "../services/NoticiasService";
import type { INoticiasService } from "../interfaces/INoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ListaNoticiasProps {
  service?: INoticiasService;
}

const defaultService: INoticiasService = new NoticiasService(
  new NoticiasApiRepository()
);

const ListaNoticias: React.FC<ListaNoticiasProps> = ({
  service = defaultService,
}) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    service
      .getAll()
      .then((data) => {
        setNoticias(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [service]);

  if (loading)
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-500 border-t-transparent"></div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Cargando noticias
        </h3>
        <p className="text-gray-400">
          Obteniendo las últimas actualizaciones...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.732 15.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Error al cargar
        </h3>
        <div className="bg-red-900/50 border border-red-700/50 text-red-300 px-6 py-4 rounded-lg max-w-md mx-auto">
          <p className="font-medium">No se pudieron cargar las noticias</p>
          <p className="text-sm text-red-400 mt-1">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Últimas Noticias</h2>
        <p className="text-gray-400">
          {noticias.length}{" "}
          {noticias.length === 1
            ? "artículo disponible"
            : "artículos disponibles"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {noticias.map((noticia) => (
          <article
            key={noticia.id}
            className="group relative bg-gradient-to-br from-gray-800 to-gray-800/90 border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
          >
            {noticia.imagen && (
              <div className="relative h-44 overflow-hidden">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-blue-100 px-3 py-1 rounded-full text-sm font-medium">
                    Noticia
                  </span>
                </div>
              </div>
            )}

            <div className="p-5">
              <header className="mb-4">
                {!noticia.imagen && (
                  <div className="mb-3">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      Noticia
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
                  {noticia.titulo}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
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
                    <span className="text-gray-300 font-medium truncate">
                      {noticia.autor}
                    </span>
                  </div>
                  <span className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300 shrink-0">
                    ID: {noticia.id}
                  </span>
                </div>
              </header>

              <div className="mb-4">
                <p className="text-gray-300 leading-relaxed line-clamp-3 text-sm">
                  {noticia.contenido}
                </p>
              </div>

              <footer className="flex justify-end">
                <Link
                  to={`/detalle/${noticia.id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors group-hover:bg-blue-500"
                >
                  <span>Leer más</span>
                  <svg
                    className="w-4 h-4 ml-2"
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
              </footer>
            </div>
          </article>
        ))}
      </div>

      {noticias.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-6">
            <svg
              className="w-10 h-10 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No hay noticias disponibles
          </h3>
          <p className="text-gray-400 max-w-md mx-auto">
            No se encontraron artículos en este momento. Vuelve más tarde para
            ver nuevas publicaciones.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListaNoticias;
