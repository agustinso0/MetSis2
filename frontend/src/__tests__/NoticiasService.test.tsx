import { NoticiasService } from '../services/NoticiasService';
import type { INoticiasRepository } from '../interfaces/INoticiasRepository';
import type { Noticia } from '../types/noticia';

class MockNoticiasRepository implements INoticiasRepository {
  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'Noticia de prueba 1',
      contenido: 'Contenido de la noticia 1',
      autor: 'Autor 1',
      imagen: 'https://example.com/image1.jpg',
      updated_at: '2024-01-01T10:00:00Z',
      publicado: true
    },
    {
      id: 2,
      titulo: 'Noticia de prueba 2',
      contenido: 'Contenido de la noticia 2',
      autor: 'Autor 2',
      publicado: false
    }
  ];

  async getAll(): Promise<Noticia[]> {
    return Promise.resolve(this.noticias);
  }

  async getById(id: number): Promise<Noticia> {
    const noticia = this.noticias.find(n => n.id === id);
    if (!noticia) {
      throw new Error('Noticia no encontrada');
    }
    return Promise.resolve(noticia);
  }
}

describe('NoticiasService', () => {
  let service: NoticiasService;
  let mockRepository: MockNoticiasRepository;

  beforeEach(() => {
    mockRepository = new MockNoticiasRepository();
    service = new NoticiasService(mockRepository);
  });

  describe('getAll', () => {
    it('debería retornar todas las noticias', async () => {
      const noticias = await service.getAll();
      
      expect(noticias).toHaveLength(2);
      expect(noticias[0].titulo).toBe('Noticia de prueba 1');
      expect(noticias[1].titulo).toBe('Noticia de prueba 2');
    });
  });

  describe('getById', () => {
    it('debería retornar una noticia específica por ID', async () => {
      const noticia = await service.getById(1);
      
      expect(noticia.id).toBe(1);
      expect(noticia.titulo).toBe('Noticia de prueba 1');
      expect(noticia.contenido).toBe('Contenido de la noticia 1');
      expect(noticia.autor).toBe('Autor 1');
      expect(noticia.imagen).toBe('https://example.com/image1.jpg');
      expect(noticia.publicado).toBe(true);
    });

    it('debería retornar una noticia sin imagen', async () => {
      const noticia = await service.getById(2);
      
      expect(noticia.id).toBe(2);
      expect(noticia.titulo).toBe('Noticia de prueba 2');
      expect(noticia.imagen).toBeUndefined();
      expect(noticia.publicado).toBe(false);
    });

    it('debería lanzar error cuando la noticia no existe', async () => {
      await expect(service.getById(999)).rejects.toThrow('Noticia no encontrada');
    });

    it('debería lanzar error para IDs negativos', async () => {
      await expect(service.getById(-1)).rejects.toThrow('Noticia no encontrada');
    });

    it('debería lanzar error para ID 0', async () => {
      await expect(service.getById(0)).rejects.toThrow('Noticia no encontrada');
    });
  });
});