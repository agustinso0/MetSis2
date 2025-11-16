import type { Noticia } from "./noticia";

export interface ListaNoticiasProps {
  limit?: number;
}

export interface DetalleNoticiasProps {
  noticia: Noticia;
}
