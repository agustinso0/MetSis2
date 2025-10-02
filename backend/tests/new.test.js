const request = require('supertest');
const app = require('../server');
const NewsRepository = require('../repositorios/NewsRepository');

// Hacer mocks para no tocar la DB real
jest.mock('../repositorios/NewsRepository');

describe('Noticias API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /noticias - debe devolver un array de noticias', async () => {
    NewsRepository.getAll.mockImplementation((cb) => cb(null, [{ id: 1, titulo: 'Test' }]));

    const res = await request(app).get('/noticias');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, titulo: 'Test' }]);
  });

  it('POST /noticias - crear noticia', async () => {
    NewsRepository.create.mockImplementation((news, cb) => cb(null, 1));

    const res = await request(app)
      .post('/noticias')
      .send({ titulo: 'Nueva', contenido: 'Contenido', autor: 'Juan', imagen: 'img.png' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ id: 1 });
  });

  it('GET /noticias/:id - obtener por id', async () => {
    NewsRepository.getById.mockImplementation((id, cb) => cb(null, { id, titulo: 'Test' }));

    const res = await request(app).get('/noticias/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: '1', titulo: 'Test' });
  });

  it('PUT /noticias/:id - actualizar noticia', async () => {
    NewsRepository.update.mockImplementation((id, news, cb) => cb(null));

    const res = await request(app)
      .put('/noticias/1')
      .send({ titulo: 'Edit', contenido: 'Contenido', autor: 'Juan', imagen: 'img.png' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Noticia actualizada' });
  });

  it('DELETE /noticias/:id - eliminar noticia', async () => {
    NewsRepository.delete.mockImplementation((id, cb) => cb(null));

    const res = await request(app).delete('/noticias/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Noticia eliminada' });
  });

  it('POST /login - login exitoso', async () => {
    // Mock de middleware para pasar siempre
    const authMiddleware = require('../middleware/auth');
    authMiddleware.authenticate = (req, res, next) => next();

    const res = await request(app)
      .post('/login')
      .send({ username: 'admin1', password: '1234' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Login exitoso' });
  });
});
