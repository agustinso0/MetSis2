import type { Noticia } from "../types/noticia";
import { ApiClient } from "./ApiClient";
import type { INoticiasRepository } from "../interfaces/INoticiasRepository";
export class NoticiasApiRepository implements INoticiasRepository {
  private apiClient: ApiClient;

  constructor(apiClient?: ApiClient) {
    this.apiClient = apiClient ?? new ApiClient("http://localhost:3000");
  }

  async getAll(): Promise<Noticia[]> {
    return this.apiClient.get<Noticia[]>("/noticias");
  }

  async getById(id: number): Promise<Noticia> {
    return this.apiClient.get<Noticia>(`/noticias/${id}`);
  }
}
