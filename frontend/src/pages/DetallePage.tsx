import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetalleNoticias from "../components/DetalleNoticias";
import type { Noticia } from "../types/noticia";
import { NoticiasService } from "../services/NoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import Layout from "../components/layout";

const noticiasService = new NoticiasService(new NoticiasApiRepository());

const DetallePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarNoticia = async () => {
      if (!id) {
        setError("ID de noticia no válido");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const noticiaData = await noticiasService.getById(Number(id));
        setNoticia(noticiaData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar la noticia"
        );
      } finally {
        setLoading(false);
      }
    };

    cargarNoticia();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-full mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500 border-t-transparent"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Cargando artículo
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Obteniendo los detalles de la noticia seleccionada...
          </p>
          <div className="mt-8">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto opacity-50"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-8">
            <svg
              className="w-10 h-10 text-red-400"
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
          <h1 className="text-3xl font-bold text-white mb-4">
            Error al cargar la noticia
          </h1>
          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6 mb-8">
            <p className="text-red-300 font-medium mb-2">
              No se pudo obtener el artículo
            </p>
            <p className="text-red-400 text-sm">{error}</p>
          </div>
          <button
            onClick={() => navigate("/noticias")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Volver a noticias
          </button>
        </div>
      </div>
    );
  }

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-700/50 rounded-full mb-8">
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
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <h2 className="text-xl text-gray-300 mb-6">Artículo no encontrado</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Lo sentimos, no pudimos encontrar la noticia que estás buscando. Es
            posible que haya sido movida o eliminada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/noticias")}
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Volver a noticias
            </button>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <DetalleNoticias
        noticia={noticia}
        onBack={() => navigate("/noticias")}
        onClose={() => navigate("/noticias")}
      />
    </Layout>
  );
};

export default DetallePage;
