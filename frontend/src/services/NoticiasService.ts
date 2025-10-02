
import type { Noticia } from '../types/noticia';
import type { INoticiasService } from '../interfaces/INoticiasService';
import type { INoticiasRepository } from '../interfaces/INoticiasRepository';

export class NoticiasService implements INoticiasService {
  private repo: INoticiasRepository;
  constructor(repo: INoticiasRepository) {
    this.repo = repo;
  }
  getAll(): Promise<Noticia[]> {
    return this.repo.getAll();
  }
}
