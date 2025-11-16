import { useState } from "react";
import { Button, Card, LoadingSpinner, ErrorState } from "../ui";
import { useNoticias, useNoticiasActions } from "../../hooks";
import type { Noticia } from "../../types/noticia";

interface AdminNoticiasListProps {
  onEditClick: (noticia: Noticia) => void;
  onCreateClick: () => void;
}

export const AdminNoticiasList = ({
  onEditClick,
  onCreateClick,
}: AdminNoticiasListProps) => {
  const { noticias, loading, error, retry } = useNoticias();
  const { eliminar, loading: deleteLoading } = useNoticiasActions();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number, titulo: string) => {
    const confirmed = window.confirm(
      `¿Está seguro que desea eliminar la noticia "${titulo}"?`
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);
      await eliminar(id);
      retry(); // Refrescar la lista
    } catch (error) {
      alert(
        error instanceof Error ? error.message : "Error al eliminar la noticia"
      );
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorState error={error} onRetry={retry} />;

  return (
    <div className="space-y-6 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold font-heading text-white">
          Administrar Noticias
        </h1>
        <Button onClick={onCreateClick} variant="primary">
          Crear Nueva Noticia
        </Button>
      </div>

      {noticias.length === 0 ? (
        <Card className="bg-gray-800 border-gray-700">
          <div className="p-6 text-center">
            <p className="text-gray-400 mb-4">No hay noticias registradas</p>
            <Button onClick={onCreateClick} variant="primary">
              Crear Primera Noticia
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-4">
          {noticias.map((noticia) => (
            <Card key={noticia.id} className="bg-gray-800 border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-2 truncate font-heading">
                      {noticia.titulo}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span>
                        <strong className="text-gray-300">Autor:</strong>{" "}
                        {noticia.autor}
                      </span>
                      {noticia.updated_at && (
                        <span>
                          <strong className="text-gray-300">
                            Última actualización:
                          </strong>{" "}
                          {new Date(noticia.updated_at).toLocaleDateString(
                            "es-ES"
                          )}
                        </span>
                      )}
                      <span>
                        <strong className="text-gray-300">Estado:</strong>{" "}
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            noticia.publicado
                              ? "bg-green-900/30 text-green-400 border border-green-700/50"
                              : "bg-gray-900/30 text-gray-400 border border-gray-700/50"
                          }`}
                        >
                          {noticia.publicado ? "Publicada" : "Borrador"}
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-300 line-clamp-3">
                      {noticia.contenido.length > 200
                        ? `${noticia.contenido.substring(0, 200)}...`
                        : noticia.contenido}
                    </p>
                  </div>
                  {noticia.imagen && (
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0 border border-gray-700"
                      loading="lazy"
                    />
                  )}
                </div>

                <div className="flex gap-2 mt-4 pt-4 border-t border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEditClick(noticia)}
                    className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(noticia.id, noticia.titulo)}
                    loading={deletingId === noticia.id}
                    disabled={deleteLoading || deletingId === noticia.id}
                    className="border-red-700 text-red-400 hover:text-red-300 hover:bg-red-900/30"
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
