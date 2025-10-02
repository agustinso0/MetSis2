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



  // Prueba visual de Tailwind
  const tailwindTest = <div className="bg-red-500 text-white p-4 mb-4">PRUEBA TAILWIND</div>;

  if (loading) return <div className="text-center text-gray-500 py-8">Cargando noticias...</div>;
  if (error) return (
    <div className="text-center py-8">
      {tailwindTest}
      <div className="text-red-500 font-bold">Error: {error}</div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Noticias</h2>
      <ul className="space-y-6">
        {noticias.map((noticia) => (
          <li key={noticia.id} className="border rounded p-4 hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{noticia.titulo}</h3>
            <p className="mb-2 text-gray-700">{noticia.contenido}</p>
            <p className="mb-2 text-sm text-gray-500">
              <b>Autor:</b> {noticia.autor}
            </p>
            {noticia.imagen && (
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="max-w-xs rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNoticias;
