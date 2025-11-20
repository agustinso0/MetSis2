import { NoticiasService } from "../services/NoticiasService";
import { NoticiasApiRepository } from "../repositories/NoticiasRepository";
import { ApiClient } from "../repositories/ApiClient";
import type { INoticiasService } from "../interfaces/INoticiasService";

// Factory que se encarga de crear y mantener una sola instancia del servicio
// Implementa el patron Singleton para evitar crear multiples conexiones
export class NoticiasServiceFactory {
  private static instance: INoticiasService | undefined;

  static getInstance(): INoticiasService {
    if (!this.instance) {
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

      const apiClient = new ApiClient(baseUrl);
      const repository = new NoticiasApiRepository(apiClient);
      const service = new NoticiasService(repository);

      this.instance = service;
    }

    return this.instance;
  }

  static createWithDependencies(
    repository: NoticiasApiRepository
  ): INoticiasService {
    return new NoticiasService(repository);
  }

  // Limpiar la instancia
  static reset(): void {
    this.instance = undefined;
  }
}

export const useNoticiasService = (): INoticiasService => {
  return NoticiasServiceFactory.getInstance();
};
