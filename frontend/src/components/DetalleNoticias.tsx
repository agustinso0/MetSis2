import React from "react";
import type { DetalleNoticiasProps } from "../types/components";
import { CheckCircle, Clock } from "lucide-react";
import { Button, Badge } from "./ui";
import { formatDate } from "../utils";

const DetalleNoticias: React.FC<DetalleNoticiasProps> = ({
  noticia,
  onClose,
  onBack,
}) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Barra superior con botones de navegacion */}
      <div className="bg-gray-800/30 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {onBack && (
                <Button
                  variant="secondary"
                  onClick={onBack}
                  className="flex items-center"
                  aria-label="Volver a la lista"
                >
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span className="text-sm font-medium">Volver</span>
                </Button>
              )}
              <div className="text-sm text-gray-400">
                <span>Portal de Noticias</span>
              </div>
            </div>

            {/* Boton X para cerrar si se necesita */}
            {onClose && (
              <Button
                variant="outline"
                onClick={onClose}
                className="p-2"
                aria-label="Cerrar detalle"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <article className="bg-gray-800 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
          {/* Solo mostrar la imagen si existe - evita espacios vacios raros */}
          {noticia.imagen && (
            <div className="relative h-56 md:h-72 overflow-hidden">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Si la imagen falla al cargar, la ocultamos para que no se vea rota
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              {/* Overlay oscuro sobre la imagen - ayuda a que el badge se lea mejor */}
              <div className="absolute inset-0 bg-gray-900/80"></div>

              {/* Badge de estado sobre la imagen */}
              <div className="absolute top-4 left-4">
                <Badge
                  variant={noticia.publicado ? "success" : "warning"}
                  size="md"
                  className="backdrop-blur-sm flex items-center space-x-1"
                >
                  {noticia.publicado ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Publicado</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4" />
                      <span>Borrador</span>
                    </>
                  )}
                </Badge>
              </div>
            </div>
          )}

          <header className="p-6 md:p-8">
            {/* Si no hay imagen, mostrar el badge arriba del titulo */}
            {!noticia.imagen && (
              <div className="mb-4">
                <Badge
                  variant={noticia.publicado ? "success" : "warning"}
                  size="md"
                  className="flex items-center space-x-1"
                >
                  {noticia.publicado ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Publicado</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4" />
                      <span>Borrador</span>
                    </>
                  )}
                </Badge>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {noticia.titulo}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 border-t border-gray-700/50 pt-4">
              {/* Informacion del autor con iconito circular */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
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
                </div>
                <div>
                  <p className="text-xs text-gray-500">Autor</p>
                  <p className="font-semibold text-gray-200 text-sm">
                    {noticia.autor}
                  </p>
                </div>
              </div>

              {/* Fecha de ultima actualizacion - ayuda a saber que tan actual es */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Fecha</p>
                  <p className="font-semibold text-gray-200 text-sm">
                    {formatDate(noticia.updated_at)}
                  </p>
                </div>
              </div>

              {/* Indicador de longitud - da una idea rapida del contenido */}
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">ID</p>
                  <p className="font-semibold text-gray-200 text-sm">
                    #{noticia.id}
                  </p>
                </div>
              </div>
            </div>
          </header>

          <div className="px-6 md:px-8 pb-6">
            <div className="prose prose-base prose-invert max-w-none">
              <div className="text-base text-gray-300 leading-relaxed whitespace-pre-wrap">
                {noticia.contenido}
              </div>
            </div>
          </div>

          <footer className="px-6 md:px-8 py-4 bg-gray-800/50 border-t border-gray-700/50">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="text-sm text-gray-500">
                <p>Artículo #{noticia.id} • Portal de Noticias</p>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default DetalleNoticias;
