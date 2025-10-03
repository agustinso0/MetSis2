import type { Noticia } from '../types/noticia';

export interface INoticiasService {
  getAll(): Promise<Noticia[]>;
  getById(id: number): Promise<Noticia>;
}
