import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";
import type { INoticiasService } from "../interfaces/INoticiasService";
import type { INoticiasRepository } from "../interfaces/INoticiasRepository";

export class NoticiasService implements INoticiasService {
  private repo: INoticiasRepository;

  constructor(repo: INoticiasRepository) {
    this.repo = repo;
  }

  async getAll(filters?: NoticiasFilters): Promise<Noticia[]> {
    return this.repo.getAll(filters);
  }

  async getById(id: number): Promise<Noticia> {
    if (id <= 0) {
      throw new Error("ID de noticia inválido");
    }
    return this.repo.getById(id);
  }

  async crear(noticia: CreateNoticiaDto): Promise<{ id: number }> {
    if (!noticia.titulo?.trim()) {
      throw new Error("El título es requerido");
    }
    if (!noticia.contenido?.trim()) {
      throw new Error("El contenido es requerido");
    }
    if (!noticia.autor?.trim()) {
      throw new Error("El autor es requerido");
    }

    const noticiaLimpia: CreateNoticiaDto = {
      ...noticia,
      titulo: noticia.titulo.trim(),
      contenido: noticia.contenido.trim(),
      autor: noticia.autor.trim(),
    };

    return this.repo.create(noticiaLimpia);
  }

  async actualizar(
    id: number,
    noticia: UpdateNoticiaDto
  ): Promise<{ message: string }> {
    if (id <= 0) {
      throw new Error("ID de noticia inválido");
    }

    const campos = Object.values(noticia as Record<string, unknown>).filter(
      (valor: unknown) => valor !== undefined && valor !== null
    );
    if (campos.length === 0) {
      throw new Error("Al menos un campo debe ser actualizado");
    }

    // Solo limpiar los campos que vienen en el objeto
    const noticiaLimpia: UpdateNoticiaDto = {};
    if (noticia.titulo) noticiaLimpia.titulo = noticia.titulo.trim();
    if (noticia.contenido) noticiaLimpia.contenido = noticia.contenido.trim();
    if (noticia.autor) noticiaLimpia.autor = noticia.autor.trim();
    if (noticia.imagen !== undefined) noticiaLimpia.imagen = noticia.imagen;

    return this.repo.update(id, noticiaLimpia);
  }

  async eliminar(id: number): Promise<{ message: string }> {
    if (id <= 0) {
      throw new Error("ID de noticia inválido");
    }
    return this.repo.delete(id);
  }

  // Funciones especializadas que usan filtros para casos particulares
  async buscar(termino: string): Promise<Noticia[]> {
    if (!termino?.trim()) {
      return []; // Si no hay termino, devolver array vacio
    }

    return this.repo.getAll({
      busqueda: termino.trim(),
    });
  }

  async getPorAutor(autor: string): Promise<Noticia[]> {
    if (!autor?.trim()) {
      throw new Error("Autor es requerido");
    }

    return this.repo.getAll({
      autor: autor.trim(),
    });
  }

  async getRecientes(limit: number = 10): Promise<Noticia[]> {
    if (limit <= 0) {
      throw new Error("El límite debe ser mayor a 0");
    }

    return this.repo.getAll({
      limit: Math.min(limit, 100), // Limitar a 100 maximo para evitar sobrecargas
    });
  }
}
