import type { Noticia } from "../types/noticia";
import { NoticiasService } from "../services/NoticiasService";
import type { INoticiasService } from "../interfaces/INoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import React, { useEffect, useState } from "react";

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
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Cargando noticias...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-8">
        <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-lg">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {noticias.map((noticia) => (
          <article
            key={noticia.id}
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:bg-gray-750 hover:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <header className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                {noticia.titulo}
              </h3>
              <div className="flex items-center text-sm text-gray-400 mb-3">
                <span className="bg-blue-600 text-blue-100 px-2 py-1 rounded-full text-xs font-medium mr-3">
                  Noticia
                </span>
                <span>
                  Por:{" "}
                  <strong className="text-gray-300">{noticia.autor}</strong>
                </span>
              </div>
            </header>

            <div className="mb-4">
              <p className="text-gray-300 leading-relaxed">
                {noticia.contenido}
              </p>
            </div>

            {noticia.imagen && (
              <div className="mt-4">
                <img
                  src={noticia.imagen}
                  alt={noticia.titulo}
                  className="w-full max-w-md rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>
            )}

            <footer className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>ID: {noticia.id}</span>
                <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  Leer más →
                </button>
              </div>
            </footer>
          </article>
        ))}
      </div>

      {noticias.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">📰</div>
          <p className="text-gray-400">
            No hay noticias disponibles en este momento.
          </p>
        </div>
      )}
    </div>
  );
};

export default ListaNoticias;
