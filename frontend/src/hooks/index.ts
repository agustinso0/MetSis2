import { useState, useEffect, useCallback } from "react";
import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";
import { useNoticiasService } from "../factories/NoticiasServiceFactory";

export const useNoticias = (filters?: NoticiasFilters) => {
  const service = useNoticiasService();
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await service.getAll(filters);
        setNoticias(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar noticias"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [service, filters]);

  const retry = useCallback(() => {
    const refetch = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await service.getAll(filters);
        setNoticias(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar noticias"
        );
      } finally {
        setLoading(false);
      }
    };
    refetch();
  }, [service, filters]);

  return {
    noticias,
    loading,
    error,
    retry,
  };
};

export const useNoticiasRecientes = (cantidad: number = 4) => {
  const service = useNoticiasService();
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecientes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await service.getRecientes(cantidad);
        setNoticias(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al cargar noticias recientes"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRecientes();
  }, [service, cantidad]);

  return {
    noticias,
    loading,
    error,
  };
};

export const useNoticia = (id: number) => {
  const service = useNoticiasService();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await service.getById(id);
        setNoticia(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar la noticia"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNoticia();
  }, [service, id]);

  return {
    noticia,
    loading,
    error,
  };
};

export const useNoticiasActions = () => {
  const service = useNoticiasService();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const crear = async (noticia: CreateNoticiaDto) => {
    try {
      setLoading(true);
      setError(null);
      const result = await service.crear(noticia);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error al crear noticia";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const actualizar = async (id: number, noticia: UpdateNoticiaDto) => {
    try {
      setLoading(true);
      setError(null);
      const result = await service.actualizar(id, noticia);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error al actualizar noticia";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const eliminar = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      const result = await service.eliminar(id);
      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error al eliminar noticia";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    crear,
    actualizar,
    eliminar,
    loading,
    error,
  };
};
