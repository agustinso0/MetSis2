import { useState, useEffect } from "react";
import { Button, Input, Textarea, Card } from "../ui";
import type { Noticia } from "../../types/noticia";
import type { CreateNoticiaDto, UpdateNoticiaDto } from "../../types/dtos";

interface FormularioNoticiaProps {
  noticia?: Noticia;
  onSubmit: (data: CreateNoticiaDto | UpdateNoticiaDto) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export const FormularioNoticia = ({
  noticia,
  onSubmit,
  onCancel,
  loading = false,
}: FormularioNoticiaProps) => {
  const [formData, setFormData] = useState({
    titulo: "",
    contenido: "",
    autor: "",
    imagen: "",
    publicado: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (noticia) {
      setFormData({
        titulo: noticia.titulo,
        contenido: noticia.contenido,
        autor: noticia.autor,
        imagen: noticia.imagen || "",
        publicado: noticia.publicado ?? true,
      });
    }
  }, [noticia]);

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.titulo.trim()) errs.titulo = "Título requerido";
    if (!formData.contenido.trim()) errs.contenido = "Contenido requerido";
    if (!formData.autor.trim()) errs.autor = "Autor requerido";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await onSubmit(formData);
    } catch {
      // El error se maneja en el componente padre
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Limpiar el error del campo cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6 font-heading">
          {noticia ? "Editar Noticia" : "Crear Nueva Noticia"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Título *
            </label>
            <Input
              id="titulo"
              value={formData.titulo}
              onChange={(e) => handleChange("titulo", e.target.value)}
              placeholder="Ingrese el título de la noticia"
              error={errors.titulo}
              className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500"
            />
            {errors.titulo && (
              <p className="text-red-400 text-sm mt-1">{errors.titulo}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Autor *
            </label>
            <Input
              id="autor"
              value={formData.autor}
              onChange={(e) => handleChange("autor", e.target.value)}
              placeholder="Nombre del autor"
              error={errors.autor}
              className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500"
            />
            {errors.autor && (
              <p className="text-red-400 text-sm mt-1">{errors.autor}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              URL de Imagen
            </label>
            <Input
              id="imagen"
              value={formData.imagen}
              onChange={(e) => handleChange("imagen", e.target.value)}
              placeholder="https://ejemplo.com/imagen.jpg"
              type="url"
              className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="publicado"
              className="flex items-center text-sm font-medium text-gray-300 mb-2"
            >
              <input
                type="checkbox"
                id="publicado"
                checked={formData.publicado}
                onChange={(e) => handleChange("publicado", e.target.checked)}
                className="mr-2 rounded border-gray-600 bg-gray-900 text-blue-500 focus:ring-blue-500 focus:ring-2 focus:ring-offset-0"
              />
              Publicar inmediatamente
            </label>
          </div>

          <div>
            <label
              htmlFor="contenido"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Contenido *
            </label>
            <Textarea
              id="contenido"
              value={formData.contenido}
              onChange={(e) => handleChange("contenido", e.target.value)}
              placeholder="Escriba el contenido completo de la noticia"
              rows={8}
              error={errors.contenido}
              className="bg-gray-900 border-gray-600 text-white placeholder:text-gray-500"
            />
            {errors.contenido && (
              <p className="text-red-400 text-sm mt-1">{errors.contenido}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              loading={loading}
              disabled={loading}
              variant="primary"
              className="flex-1"
            >
              {noticia ? "Actualizar" : "Crear"} Noticia
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={loading}
              className="flex-1 border-gray-600 text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
