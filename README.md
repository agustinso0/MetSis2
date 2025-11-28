# Portal de Noticias (MetSis2)

Sistema web full‑stack para gestión y visualización de noticias. Provee un backend REST con SQLite y un frontend SPA con React + TypeScript.

## Descripción

El proyecto separa responsabilidades entre `backend` y `frontend`. El backend expone endpoints CRUD sobre el recurso `noticias` y un endpoint de autenticación simple; el frontend consume estos servicios y presenta vistas de listado y detalle.

### Decisiones de arquitectura

- SQLite para simplicidad local y fácil portabilidad.
- Patrón Repository en backend para aislar acceso a datos y facilitar testing.
- Exportación de `app` en `server.js` para pruebas con Supertest.
- SPA con React y TypeScript por productividad, tipado y reutilización de componentes.

## Instalación

Prerequisitos: `Node.js 18+` y `npm 9+`.

1) Instalar dependencias de backend (raíz del repo):

```bash
npm install
```

2) Inicializar base de datos (desde `backend/`):

```bash
cd backend
node init-db.js
```

3) Arrancar backend (puerto por defecto `3000`):

```bash
node server.js
```

4) Instalar y arrancar frontend (puerto `5173`):

```bash
cd ../frontend
npm install
npm run dev
```

## Ejemplos de uso

- Listar noticias:

```bash
curl http://localhost:3000/noticias
```

- Obtener una noticia:

```bash
curl http://localhost:3000/noticias/1
```

- Crear noticia:

```bash
curl -X POST http://localhost:3000/noticias \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Nueva","contenido":"Texto","autor":"admin1","imagen":"img1.jpg"}'
```

- Actualizar noticia:

```bash
curl -X PUT http://localhost:3000/noticias/1 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Edit","contenido":"Texto","autor":"admin1","imagen":"img1.jpg"}'
```

- Eliminar noticia:

```bash
curl -X DELETE http://localhost:3000/noticias/1
```

- Login (autenticación simple):

```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin1","password":"1234"}'
```

## Dependencias y herramientas

- Backend: `express`, `cors`, `body-parser`, `sqlite3`, `jest`, `supertest`.
- Frontend: `react`, `react-router-dom`, `typescript`, `vite`, `tailwindcss`, `jest`, `@testing-library/react`.

## Estructura del repositorio

```text
MetSis2/
├── backend/
│   ├── controllers/          # Controladores
│   ├── models/               # Modelos
│   ├── repositorios/         # Patrón Repository
│   ├── middleware/           # Auth simple
│   ├── tests/                # Pruebas con Supertest
│   ├── server.js             # App Express
│   ├── db.js                 # Singleton SQLite
│   └── init-db.js            # Inicialización DB
├── database/
│   └── database.sql          # Esquema y datos semilla
├── frontend/
│   ├── src/                  # Código SPA
│   └── package.json          # Configuración frontend
└── README.md
```

## API de referencia

La especificación OpenAPI se incluye en `backend/openapi.yaml`. Puede visualizarse con Swagger UI.

Resumen de endpoints (backend real):

- `GET /noticias` — lista todas las noticias.
- `GET /noticias/{id}` — obtiene una noticia por id.
- `POST /noticias` — crea una noticia.
- `PUT /noticias/{id}` — actualiza una noticia.
- `DELETE /noticias/{id}` — elimina una noticia.
- `POST /login` — autenticación simple (usuario/contraseña).

## Gestión del proyecto (Jira)

- Tablero: https://loosagustin.atlassian.net/jira/software/projects/MET/boards/34?atlOrigin=eyJpIjoiOTQ4NDc3OTg4NDRkNDhmNDkyYjY1ZTAxMjBhM2UxYWUiLCJwIjoiaiJ9

## Notas de mantenibilidad

- El campo `imagen` es obligatorio en DB; considerar validación en el controlador.
- La autenticación actual usa credenciales en texto plano; para producción usar hashing y tokens.
- El frontend construye filtros en `/noticias`, pero el backend aún no los implementa; planificar extensión.


