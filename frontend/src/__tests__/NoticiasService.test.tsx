import { NoticiasService } from "../services/NoticiasService";
import type { INoticiasRepository } from "../interfaces/INoticiasRepository";
import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";

class MockNoticiasRepository implements INoticiasRepository {
  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Noticia de prueba 1",
      contenido: "Contenido de la noticia 1",
      autor: "Autor 1",
      imagen: "https://example.com/image1.jpg",
      updated_at: "2024-01-01T10:00:00Z",
      publicado: true,
    },
    {
      id: 2,
      titulo: "Noticia de prueba 2",
      contenido: "Contenido de la noticia 2",
      autor: "Autor 2",
      publicado: false,
    },
  ];

  async getAll(filters?: NoticiasFilters): Promise<Noticia[]> {
    let result = [...this.noticias];

    if (filters?.limit) {
      result = result.slice(0, filters.limit);
    }

    return Promise.resolve(result);
  }

  async getById(id: number): Promise<Noticia> {
    const noticia = this.noticias.find((n) => n.id === id);
    if (!noticia) {
      throw new Error("Noticia no encontrada");
    }
    return Promise.resolve(noticia);
  }

  async getRecientes(limit?: number): Promise<Noticia[]> {
    const sorted = [...this.noticias].sort(
      (a, b) =>
        new Date(b.updated_at || 0).getTime() -
        new Date(a.updated_at || 0).getTime()
    );
    return limit ? sorted.slice(0, limit) : sorted;
  }

  async create(data: CreateNoticiaDto): Promise<{ id: number }> {
    const newNoticia: Noticia = {
      id: Math.max(...this.noticias.map((n) => n.id)) + 1,
      titulo: data.titulo,
      contenido: data.contenido,
      autor: data.autor,
      imagen: data.imagen,
      updated_at: new Date().toISOString(),
      publicado: data.publicado ?? true,
    };
    this.noticias.push(newNoticia);
    return { id: newNoticia.id };
  }

  async update(
    id: number,
    data: UpdateNoticiaDto
  ): Promise<{ message: string }> {
    const index = this.noticias.findIndex((n) => n.id === id);
    if (index === -1) throw new Error("Noticia no encontrada");

    this.noticias[index] = {
      ...this.noticias[index],
      ...data,
      updated_at: new Date().toISOString(),
    };
    return { message: "Noticia actualizada exitosamente" };
  }

  async delete(id: number): Promise<{ message: string }> {
    const index = this.noticias.findIndex((n) => n.id === id);
    if (index === -1) throw new Error("Noticia no encontrada");

    this.noticias.splice(index, 1);
    return { message: "Noticia eliminada exitosamente" };
  }
}

describe("NoticiasService", () => {
  let service: NoticiasService;
  let mockRepo: MockNoticiasRepository;

  beforeEach(() => {
    mockRepo = new MockNoticiasRepository();
    service = new NoticiasService(mockRepo);
  });

  describe("getAll", () => {
    it("devuelve todas las noticias", async () => {
      const noticias = await service.getAll();
      expect(noticias).toHaveLength(2);
      expect(noticias[0].titulo).toBe("Noticia de prueba 1");
    });
  });

  describe("getById", () => {
    it("devuelve una noticia por ID", async () => {
      const noticia = await service.getById(1);
      expect(noticia.titulo).toBe("Noticia de prueba 1");
      expect(noticia.autor).toBe("Autor 1");
    });

    it("lanza error con ID inválido", async () => {
      await expect(service.getById(0)).rejects.toThrow(
        "ID de noticia inválido"
      );
      await expect(service.getById(-1)).rejects.toThrow(
        "ID de noticia inválido"
      );
    });

    it("lanza error cuando la noticia no existe", async () => {
      await expect(service.getById(999)).rejects.toThrow(
        "Noticia no encontrada"
      );
    });
  });

  describe("getRecientes", () => {
    it("devuelve las primeras noticias con límite", async () => {
      const recientes = await service.getRecientes(1);
      expect(recientes).toHaveLength(1);
      expect(recientes[0].titulo).toBe("Noticia de prueba 1");
    });

    it("lanza error con límite inválido", async () => {
      await expect(service.getRecientes(0)).rejects.toThrow(
        "El límite debe ser mayor a 0"
      );
      await expect(service.getRecientes(-1)).rejects.toThrow(
        "El límite debe ser mayor a 0"
      );
    });
  });
});
