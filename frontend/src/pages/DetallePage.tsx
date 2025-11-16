import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DetalleNoticias from "../components/DetalleNoticias";
import Layout from "../components/layout";
import { useNoticia } from "../hooks";

const DetallePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Convertir el ID de string a numero y validar
  const noticiaId = id ? parseInt(id, 10) : 0;
  const { noticia, loading, error } = useNoticia(noticiaId);

  // Chequear si el ID es valido antes de mostrar algo
  if (!id || isNaN(noticiaId) || noticiaId <= 0) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center max-w-lg px-6">
            <div className="text-red-400 text-xl mb-4 font-heading">
              404 - Artículo no encontrado
            </div>
            <p className="text-gray-400 mb-8">ID de noticia inválido.</p>
            <button
              onClick={() => navigate("/noticias")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Ver noticias
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-white mb-2 font-heading">
              Cargando artículo
            </h2>
            <p className="text-gray-400">
              Obteniendo los detalles de la noticia...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center max-w-lg px-6">
            <div className="text-red-400 text-xl mb-4 font-heading">
              Error al cargar la noticia
            </div>
            <p className="text-gray-400 mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (!noticia) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center max-w-lg px-6">
            <div className="text-red-400 text-xl mb-4 font-heading">
              Noticia no encontrada
            </div>
            <p className="text-gray-400 mb-8">
              La noticia solicitada no existe.
            </p>
            <button
              onClick={() => navigate("/noticias")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Ver noticias
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DetalleNoticias noticia={noticia} />
    </Layout>
  );
};

export default DetallePage;
