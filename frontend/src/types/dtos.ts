export interface CreateNoticiaDto {
  titulo: string;
  contenido: string;
  autor: string;
  imagen?: string;
  publicado?: boolean;
}

export interface UpdateNoticiaDto {
  titulo?: string;
  contenido?: string;
  autor?: string;
  imagen?: string;
  publicado?: boolean;
}

export interface NoticiasFilters {
  autor?: string;
  busqueda?: string;
  limit?: number;
  offset?: number;
}
