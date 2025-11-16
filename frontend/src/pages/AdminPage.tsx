import { useState } from "react";
import Layout from "../components/layout";
import { AdminNoticiasList } from "../components/admin/AdminNoticiasList";
import { FormularioNoticia } from "../components/admin/FormularioNoticia";
import { useNoticiasActions } from "../hooks";
import type { Noticia } from "../types/noticia";
import type { CreateNoticiaDto, UpdateNoticiaDto } from "../types/dtos";

type ViewMode = "list" | "create" | "edit";

export const AdminPage = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("list");
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const { crear, actualizar, loading, error } = useNoticiasActions();

  const handleCreateClick = () => {
    setSelectedNoticia(null);
    setCurrentView("create");
  };

  const handleEditClick = (noticia: Noticia) => {
    setSelectedNoticia(noticia);
    setCurrentView("edit");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedNoticia(null);
    setRefreshTrigger((prev) => prev + 1); // Trigger refresh de la lista
  };

  const handleSubmit = async (data: CreateNoticiaDto | UpdateNoticiaDto) => {
    try {
      if (currentView === "create") {
        await crear(data as CreateNoticiaDto);
      } else if (currentView === "edit" && selectedNoticia) {
        await actualizar(selectedNoticia.id, data as UpdateNoticiaDto);
      }

      handleBackToList();
    } catch {
      // El error se maneja en el hook useNoticiasActions
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          {currentView === "list" && (
            <AdminNoticiasList
              key={refreshTrigger}
              onCreateClick={handleCreateClick}
              onEditClick={handleEditClick}
            />
          )}

          {(currentView === "create" || currentView === "edit") && (
            <div className="max-w-4xl mx-auto">
              <FormularioNoticia
                noticia={selectedNoticia || undefined}
                onSubmit={handleSubmit}
                onCancel={handleBackToList}
                loading={loading}
              />

              {error && (
                <div className="mt-4 p-4 bg-red-900/30 border border-red-700/50 rounded-lg">
                  <p className="text-red-300 font-medium">Error:</p>
                  <p className="text-red-400">{error}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
