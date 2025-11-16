import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";

export interface INoticiasRepository {
  getAll(filters?: NoticiasFilters): Promise<Noticia[]>;
  getById(id: number): Promise<Noticia>;

  create(noticia: CreateNoticiaDto): Promise<{ id: number }>;
  update(id: number, noticia: UpdateNoticiaDto): Promise<{ message: string }>;
  delete(id: number): Promise<{ message: string }>;
}
