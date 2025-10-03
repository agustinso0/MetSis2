import type { Noticia } from "../types/noticia";

export interface INoticiasRepository {
  getAll(): Promise<Noticia[]>;
  getById(id: number): Promise<Noticia>;
}
