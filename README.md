# Portal de Noticias

Sistema web para gestión y visualización de noticias con arquitectura full-stack.

## Descripción

Aplicación web que permite visualizar, gestionar y consultar artículos de noticias. Implementa arquitectura con separación entre frontend y backend.

### Funcionalidades

- Listado de noticias con filtros
- Vista detallada individual
- Categorías temáticas
- Sidebar con noticias recientes
- Componentes UI reutilizables
- Factory pattern con Singleton
- Custom hooks para estado
- API RESTful
- Testing con Jest
- UI responsiva con Tailwind CSS
- TypeScript

## Arquitectura

### Frontend (React + TypeScript)

```text
frontend/
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── ListaNoticias.tsx
│   │   ├── DetalleNoticias.tsx
│   │   ├── SidebarDestacadas.tsx
│   │   ├── layout.tsx
│   │   └── ui/            # Componentes UI
│   ├── pages/             # Páginas
│   ├── services/          # Lógica de negocio
│   ├── repositories/      # Acceso a datos
│   ├── factories/         # Factory patterns
│   ├── hooks/            # Custom hooks
│   ├── interfaces/       # Contratos TypeScript
│   ├── types/           # Definiciones de tipos
│   ├── utils/           # Utilidades
│   ├── constants/       # Constantes
│   └── __tests__/       # Tests
```

### Backend (Node.js + Express + SQLite)

```text
backend/
├── controllers/          # Controladores MVC
├── models/              # Modelos de datos
├── repositorios/        # Patrón Repository
├── middleware/          # Middlewares
├── tests/              # Testing
└── database.db         # SQLite
```

## Stack Tecnológico

**Frontend:**

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7
- Tailwind CSS 4.1.14
- React Router 7.9.3
- Jest 30.2.0
- React Testing Library 16.3.0

**Backend:**

- Node.js 18+
- Express.js 4.x
- SQLite3 5.x
- Jest

## Instalación

### Backend

```bash
cd backend
npm install
node init-db.js
node server.js
```

Backend: `http://localhost:3000`

### Frontend

```bash
cd frontend
npm install
npm run dev
npm test
npm run build
```

Frontend: `http://localhost:5173`

### Base de Datos

```sql
CREATE TABLE noticias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    contenido TEXT NOT NULL,
    autor TEXT NOT NULL,
    publicado BOOLEAN DEFAULT 0,
    imagen TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Testing

**Frontend:** 25+ tests para componentes, servicios, hooks e integración.

```bash
npm test
npm run test:coverage
```

**Herramientas:**

- ESLint
- TypeScript
- Jest + jsdom
- React Testing Library

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/noticias` | Lista todas |
| GET | `/api/noticias/:id` | Una específica |
| POST | `/api/noticias` | Crear nueva |
| PUT | `/api/noticias/:id` | Actualizar |
| DELETE | `/api/noticias/:id` | Eliminar |

```typescript
interface Noticia {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  publicado?: boolean;
  imagen?: string;
  created_at?: string;
  updated_at?: string;
}
```

## Patrones Implementados

**MVC (Backend):**

- Separación modelos/vistas/controladores
- Componentes desacoplados
- Testing independiente

**Repository:**

- Abstracción de datos
- Consultas centralizadas
- Intercambiabilidad de fuentes

**Singleton + Factory:**

- Instancia única de servicios
- Gestión de dependencias
- Optimización recursos

**Custom Hooks:**

- Reutilización de estado
- Lógica separada de UI
- Manejo consistente de errores

**Componentes UI:**

- Sistema reutilizable
- Props tipadas
- Consistencia visual

---

### Variables de entorno

Este proyecto no usa un `.env` por defecto, pero puedes configurar las siguientes variables si quieres cambiar puertos u orígenes:

- `PORT` — puerto del backend (por defecto 3000).
- `DATABASE_PATH` — ruta al fichero SQLite (si decides parametrizar `db.js`).


### API: ejemplos y payloads

- Listar noticias:

```powershell
curl http://localhost:3000/noticias
```

- Obtener una noticia por id:

```powershell
curl http://localhost:3000/noticias/1
```

- Crear una noticia (ejemplo JSON):

```powershell
curl -X POST http://localhost:3000/noticias -H "Content-Type: application/json" -d '{"titulo":"Prueba","contenido":"Contenido","autor":"Admin","publicado":1}'
```

### Rutas en frontend

- La app usa Vite + `react-router-dom`.
- Página de noticias: `/noticias`.
- Detalle: `/noticias/:id`.

### Inicializar / Resetear base de datos

- El script `backend/init-db.js` ejecuta `database/database.sql`. Ejecútalo desde la carpeta `backend`:

```powershell
cd backend
node init-db.js
```

Si `database.db` ya existe y quieres resetearla, bórrala antes de ejecutar `init-db.js`.

### Testing

- Frontend (Jest + RTL):

```powershell
cd frontend
npm test
```

- Backend: hay pruebas en `backend/tests`. Puedes instalar `jest` en la raíz o añadir `package.json` en `backend` con `jest` como dependencia para ejecutar los tests.


### Troubleshooting (problemas comunes)

- Error al abrir SQLite en OneDrive: mueve el proyecto fuera de OneDrive o cambia permisos.
- CORS: el backend permite `http://localhost:5173` por defecto; si cambias puerto añade el origen.
- Errores de puerto: verifica que la variable `PORT` no esté en uso.


