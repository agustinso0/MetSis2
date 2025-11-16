import React from "react";
import { Link } from "react-router-dom";
import type { ListaNoticiasProps } from "../types/components";
import { LoadingState, ErrorState, Card, Badge, Button } from "./ui";
import { Newspaper, CheckCircle, Clock, User } from "lucide-react";
import { useNoticias } from "../hooks";

const ListaNoticias: React.FC<ListaNoticiasProps> = ({ limit }) => {
  // Configurar filtros basado en los props que recibimos
  const filters = limit ? { limit } : undefined;
  const { noticias, loading, error, retry } = useNoticias(filters);

  const displayNoticias = noticias;

  if (loading) {
    return (
      <LoadingState
        title="Cargando noticias"
        description="Obteniendo las últimas actualizaciones..."
      />
    );
  }

  if (error) {
    return (
      <ErrorState
        title="Error al cargar noticias"
        description="No se pudieron cargar las noticias en este momento."
        onRetry={retry}
      />
    );
  }

  if (displayNoticias.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-6">
          <svg
            className="w-10 h-10 text-gray-400"
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
        <h3 className="text-xl font-semibold text-white mb-2 font-heading">
          No hay noticias disponibles
        </h3>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          No se encontraron artículos en este momento. Vuelve más tarde para ver
          nuevas publicaciones.
        </p>
        <Button variant="primary" onClick={retry}>
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
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Actualizar
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 font-heading">
              Últimas Noticias
            </h2>
            <p className="text-gray-400">
              {noticias.length}{" "}
              {noticias.length === 1
                ? "artículo disponible"
                : "artículos disponibles"}
            </p>
          </div>
          <Button variant="secondary" onClick={retry} size="sm">
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Actualizar
          </Button>
        </div>
        <div className="w-16 h-0.5 bg-blue-500 rounded-full"></div>
      </div>

      {/* Grid de noticias */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {displayNoticias.map((noticia) => (
          <Link key={noticia.id} to={`/detalle/${noticia.id}`}>
            <Card
              hover
              padding="none"
              className="group overflow-hidden animate-slide-up"
            >
              {/* Imagen de la noticia */}
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
                  <div className="absolute inset-0 bg-gray-900/80"></div>
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="primary"
                      size="sm"
                      className="flex items-center space-x-1"
                    >
                      <Newspaper className="w-3 h-3" />
                      <span>Noticia</span>
                    </Badge>
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={noticia.publicado ? "success" : "warning"}
                      size="sm"
                      className="flex items-center space-x-1"
                    >
                      {noticia.publicado ? (
                        <>
                          <CheckCircle className="w-3 h-3" />
                          <span>Publicado</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3" />
                          <span>Borrador</span>
                        </>
                      )}
                    </Badge>
                  </div>
                </div>
              )}

              <div className="p-6">
                <header className="mb-4">
                  {!noticia.imagen && (
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="primary"
                        size="sm"
                        className="flex items-center space-x-1"
                      >
                        <Newspaper className="w-3 h-3" />
                        <span>Noticia</span>
                      </Badge>
                      <Badge
                        variant={noticia.publicado ? "success" : "warning"}
                        size="sm"
                        className="flex items-center space-x-1"
                      >
                        {noticia.publicado ? (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            <span>Publicado</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3" />
                            <span>Borrador</span>
                          </>
                        )}
                      </Badge>
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight line-clamp-2 font-heading">
                    {noticia.titulo}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-600/30 rounded-full flex items-center justify-center mr-2">
                        <User
                          className="w-3 h-3 text-blue-400"
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
                        </User>
                      </div>
                      <span className="text-gray-300 font-medium truncate">
                        {noticia.autor}
                      </span>
                    </div>
                    <Badge variant="secondary" size="sm">
                      ID: {noticia.id}
                    </Badge>
                  </div>
                </header>

                {/* Contenido */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed line-clamp-3 text-sm">
                    {noticia.contenido}
                  </p>
                </div>

                {/* Footer de la tarjeta */}
                <footer className="flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    className="group-hover:bg-blue-500"
                  >
                    <span>Leer más</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform"
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
                  </Button>
                </footer>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListaNoticias;
