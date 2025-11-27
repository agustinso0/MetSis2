import { useState } from "react";
import Layout from "../components/layout";
import { AdminNoticiasList } from "../components/admin/AdminNoticiasList";
import { FormularioNoticia } from "../components/admin/FormularioNoticia";
import { useNoticiasActions } from "../hooks";
import type { Noticia } from "../types/noticia";
import type { CreateNoticiaDto, UpdateNoticiaDto } from "../types/dtos";

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="mt-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg">
    <p className="text-red-300 font-medium">Error:</p>
    <p className="text-red-400">{message}</p>
  </div>
);

type ViewMode = "list" | "form";

export const AdminPage = () => {
 const [view, setView] = useState<ViewMode>("list");
  const [editingNoticia, setEditingNoticia] = useState<Noticia | null>(null);
  
  const { crear, actualizar, loading, error } = useNoticiasActions();

  // Handlers unificados
  const goToList = () => {
    setView("list");
    setEditingNoticia(null);
  };

  const handleCreate = () => {
    setEditingNoticia(null);
    setView("form");
  };

  const handleEdit = (noticia: Noticia) => {
    setEditingNoticia(noticia);
    setView("form");
  };

  const handleSubmit = async (data: CreateNoticiaDto | UpdateNoticiaDto) => {
    try {
      if (editingNoticia) {
        await actualizar(editingNoticia.id, data as UpdateNoticiaDto);
      } else {
        await crear(data as CreateNoticiaDto);
      }
      goToList();
    } catch {
    }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          
          {view === "list" ? (
            <AdminNoticiasList
              onCreateClick={handleCreate}
              onEditClick={handleEdit}
            />
          ) : (
            <div className="max-w-4xl mx-auto">
              <FormularioNoticia
                noticia={editingNoticia || undefined}
                onSubmit={handleSubmit}
                onCancel={goToList}
                loading={loading}
              />
              {error && <ErrorMessage message={error} />}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
};