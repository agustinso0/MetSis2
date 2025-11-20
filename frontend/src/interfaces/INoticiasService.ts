import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";

export interface INoticiasService {
  getAll(filters?: NoticiasFilters): Promise<Noticia[]>;
  getById(id: number): Promise<Noticia>;
  crear(noticia: CreateNoticiaDto): Promise<{ id: number }>;
  actualizar(
    id: number,
    noticia: UpdateNoticiaDto
  ): Promise<{ message: string }>;
  eliminar(id: number): Promise<{ message: string }>;

  buscar(termino: string): Promise<Noticia[]>;
  getPorAutor(autor: string): Promise<Noticia[]>;
  getRecientes(limit?: number): Promise<Noticia[]>;
}
