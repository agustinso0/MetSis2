// Tipo principal para representar una noticia en el frontend
// Coincide con la estructura que devuelve el backend
export type Noticia = {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  imagen?: string; // La imagen es opcional
  updated_at?: string; // Fecha de ultima actualizacion
  publicado?: boolean; // Si esta publicada o es borrador
};
