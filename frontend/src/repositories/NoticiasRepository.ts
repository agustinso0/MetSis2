import type { Noticia } from "../types/noticia";
import type {
  CreateNoticiaDto,
  UpdateNoticiaDto,
  NoticiasFilters,
} from "../types/dtos";
import { ApiClient } from "./ApiClient";
import type { INoticiasRepository } from "../interfaces/INoticiasRepository";

export class NoticiasApiRepository implements INoticiasRepository {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient ?? new ApiClient("http://localhost:3000");
  }

  async getAll(filters?: NoticiasFilters): Promise<Noticia[]> {
    let endpoint = "/noticias";

    // Si vienen filtros, construir la query string
    if (filters) {
      const params = new URLSearchParams();
      if (filters.autor) params.append("autor", filters.autor);
      if (filters.busqueda) params.append("busqueda", filters.busqueda);
      if (filters.limit) params.append("limit", filters.limit.toString());
      if (filters.offset) params.append("offset", filters.offset.toString());

      if (params.toString()) {
        endpoint += `?${params.toString()}`;
      }
    }

    return this.apiClient.get<Noticia[]>(endpoint);
  }

  async getById(id: number): Promise<Noticia> {
    return this.apiClient.get<Noticia>(`/noticias/${id}`);
  }

  async create(noticia: CreateNoticiaDto): Promise<{ id: number }> {
    return this.apiClient.post<{ id: number }>("/noticias", noticia);
  }

  async update(
    id: number,
    noticia: UpdateNoticiaDto
  ): Promise<{ message: string }> {
    return this.apiClient.put<{ message: string }>(`/noticias/${id}`, noticia);
  }

  async delete(id: number): Promise<{ message: string }> {
    return this.apiClient.delete<{ message: string }>(`/noticias/${id}`);
  }
}
