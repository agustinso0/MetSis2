import { render, screen, waitFor } from '@testing-library/react';
import ListaNoticias from '../components/ListaNoticias';
import type { Noticia } from '../types/noticia';
import type { INoticiasService } from '../interfaces/INoticiasService';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('ListaNoticias (con mock de servicio)', () => {
  class NoticiasServiceMock implements INoticiasService {
    async getAll(): Promise<Noticia[]> {
      return [
        { id: 1, titulo: 'Mock 1', contenido: 'Contenido 1', autor: 'Autor 1' },
        { id: 2, titulo: 'Mock 2', contenido: 'Contenido 2', autor: 'Autor 2' },
      ];
    }

    async getById(id: number): Promise<Noticia> {
      const noticias = await this.getAll();
      const noticia = noticias.find(n => n.id === id);
      if (!noticia) throw new Error('Noticia no encontrada');
      return noticia;
    }
  }

  it('renderiza noticias usando el servicio mock', async () => {
    render(<ListaNoticias service={new NoticiasServiceMock()} />);
    expect(screen.getByText(/Cargando noticias/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Mock 1')).toBeInTheDocument();
      expect(screen.getByText('Mock 2')).toBeInTheDocument();
      expect(screen.getByText('Contenido 1')).toBeInTheDocument();
      expect(screen.getByText('Contenido 2')).toBeInTheDocument();
      expect(screen.getByText('Autor 1')).toBeInTheDocument();
      expect(screen.getByText('Autor 2')).toBeInTheDocument();
    });
  });
});
