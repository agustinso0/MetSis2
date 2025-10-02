import type { Noticia } from '../types/noticia';

export interface INoticiasRepository {
  getAll(): Promise<Noticia[]>;
}

export class NoticiasApiRepository implements INoticiasRepository {
  async getAll(): Promise<Noticia[]> {
    const res = await fetch('http://localhost:3000/noticias');
    if (!res.ok) throw new Error('Error al cargar noticias');
    return res.json();
  }
}
