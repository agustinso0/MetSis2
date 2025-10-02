export type Noticia = {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  imagen?: string;
  updated_at?: string;
  publicado?: boolean;
}