# Frontend - Portal de Noticias

Aplicación web para gestión y visualización de noticias. React + TypeScript + Tailwind CSS.

## Características

- Vista de listado y detalle de noticias
- Panel de administración con CRUD
- Búsqueda por términos
- Diseño responsive
- Estados de publicación
- Navegación SPA

## Requisitos

- Node.js 18+
- npm 9+
- Backend corriendo en puerto 3000

## Instalación

```bash
npm install
npm run dev
npm test
npm run build
```

## Rutas

- `/` → redirección a `/noticias`
- `/noticias` → listado
- `/detalle/:id` → vista individual
- `/admin` → panel de administración

## Estructura

```text
src/
├── components/
│   ├── admin/
│   ├── ui/
│   └── [componentes principales]
├── pages/
├── services/
├── repositories/
├── types/
├── hooks/
├── utils/
└── __tests__/
```

## Testing

20 tests con Jest + Testing Library.

```bash
npm test
```

Incluye tests de:

- Renderizado de componentes  
- Interacciones
- Servicios
- Manejo de errores

## Stack

**Core:**

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7
- React Router DOM 7.9.3

**Estilos:**

- Tailwind CSS 4.1.14
- Lucide React 0.553.0

**Testing:**

- Jest 29.7.0
- Testing Library React 16.3.0
- ESLint 9.36.0

## Configuración

### Variables de entorno

```bash
VITE_API_URL=http://localhost:3000
```

### Scripts

- `dev` → servidor desarrollo (puerto 5173)
- `build` → build producción
- `preview` → previsualización
- `test` → suite completa
- `lint` → análisis código

## Arquitectura

**Repository Pattern:**

- Separación lógica/datos
- Interfaces definidas
- Factory para dependencias

**Estado:**

- Custom hooks
- Estados loading/error
- Optimizaciones React

**Componentes:**

- Props tipadas
- Sistema variantes
- Responsive

## Estado

- Build: ✅ sin errores
- Tests: ✅ 20/20
- Linting: ✅ limpio  
- TypeScript: ✅ tipado correcto
- Mobile: ✅ responsive

## API

- Base: `http://localhost:3000`
- Endpoints: `/noticias`
- Formato: JSON
- Tipado: TypeScript estricto
