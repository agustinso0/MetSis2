// Tipos para enviar datos al backend cuando se crea una noticia nueva
// Todos los campos son requeridos excepto la imagen
export interface CreateNoticiaDto {
  titulo: string;
  contenido: string;
  autor: string;
  imagen?: string;
}

// Tipo para actualizar noticias existentes
// Todos los campos son opcionales porque se puede actualizar solo algunos
export interface UpdateNoticiaDto {
  titulo?: string;
  contenido?: string;
  autor?: string;
  imagen?: string;
}

// Filtros que se pueden aplicar cuando se obtienen noticias
// Permite buscar por autor, termino, limitar cantidad, etc
export interface NoticiasFilters {
  autor?: string;
  busqueda?: string;
  limit?: number;
  offset?: number;
}

// Estructura generica para respuestas de la API
export interface ApiResponse<T> {
  data?: T;
  message: string;
  success: boolean;
}

// Para respuestas que vienen paginadas con informacion extra
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
