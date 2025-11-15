# 📰 Portal de Noticias

> **Sistema completo de gestión de noticias** desarrollado con arquitectura full-stack moderna, implementando patrones de diseño y metodologías de desarrollo ágil.

---

## 🎯 **Descripción del Proyecto**

Portal de Noticias es una aplicación web completa que permite **visualizar, gestionar y consultar artículos de noticias** con una interfaz moderna y responsiva. El proyecto implementa una arquitectura robusta con separación clara entre frontend y backend, siguiendo las mejores prácticas de desarrollo.

### **Características Principales:**

- **Listado de noticias** con paginación y filtros
- **Vista detallada** individual de cada noticia
- **Sistema de categorías** temáticas visuales
- **Sidebar con noticias destacadas** recientes
- **Sistema de componentes UI** reutilizables
- **Factory pattern** con Singleton para servicios
- **Custom hooks** para manejo de estado
- **API RESTful** con cliente HTTP dedicado
- **Testing integral** con Jest y RTL
- **UI/UX moderno** con Tailwind CSS
- **Responsive design** mobile-first
- **TypeScript** tipado completo

---

## 🏗️ **Arquitectura Técnica**

### **Frontend (React + TypeScript)**

```
frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ListaNoticias.tsx         # Grid de noticias con paginación
│   │   ├── DetalleNoticias.tsx       # Vista detallada de noticia
│   │   ├── SidebarDestacadas.tsx     # Sidebar con noticias recientes
│   │   ├── layout.tsx                # Layout principal con navegación
│   │   └── ui/                       # Sistema de componentes UI
│   │       ├── Button.tsx            # Componente botón reutilizable
│   │       ├── Card.tsx              # Tarjetas de contenido
│   │       ├── Badge.tsx             # Etiquetas y badges
│   │       ├── Input.tsx             # Campos de entrada
│   │       ├── LoadingSpinner.tsx    # Indicador de carga
│   │       ├── ErrorState.tsx        # Estado de error
│   │       └── index.ts              # Barrel export
│   ├── pages/              # Páginas de la aplicación
│   │   ├── NoticiasPage.tsx          # Página principal con filtros
│   │   ├── DetallePage.tsx           # Página de detalle individual
│   │   └── Categorias.tsx            # Página de categorías temáticas
│   ├── services/           # Lógica de negocio
│   │   └── NoticiasService.ts        # Servicio principal de noticias
│   ├── repositories/       # Capa de acceso a datos
│   │   ├── NoticiasRepository.ts     # Repository pattern implementado
│   │   └── ApiClient.ts              # Cliente HTTP para APIs
│   ├── factories/          # Patrón Factory
│   │   └── NoticiasServiceFactory.ts # Factory con Singleton pattern
│   ├── hooks/              # Custom React hooks
│   │   └── index.ts                  # Hooks para manejo de estado
│   ├── interfaces/         # Contratos TypeScript
│   │   ├── INoticiasService.ts       # Interface del servicio
│   │   └── INoticiasRepository.ts    # Interface del repository
│   ├── types/             # Definiciones de tipos
│   │   ├── noticia.ts               # Tipos principales de entidades
│   │   ├── dtos.ts                  # Data Transfer Objects
│   │   ├── components.ts            # Props de componentes
│   │   └── ui.ts                    # Tipos para componentes UI
│   ├── utils/             # Utilidades
│   │   └── index.ts                 # Funciones de formato y validación
│   ├── constants/         # Constantes de la aplicación
│   │   └── index.ts                 # URLs, configuraciones y valores
│   ├── styles/            # Estilos globales
│   │   └── index.css                # CSS global con Tailwind
│   └── __tests__/         # Suite de testing integral
│       ├── DetalleNoticias.test.tsx     # Tests del componente detalle
│       ├── ListaNoticias.test.tsx       # Tests del listado
│       ├── ListaNoticias.mock.test.tsx  # Tests con mocks
│       └── NoticiasService.test.tsx     # Tests del servicio
```

### **Backend (Node.js + Express + SQLite)**

```
backend/
├── controllers/           # Controladores MVC
│   └── NewsController.js      # Lógica de controlador
├── models/               # Modelos de datos
│   └── News.js               # Modelo de noticia
├── repositorios/         # Patrón Repository
│   └── NewsRepository.js     # Acceso a datos
├── middleware/           # Middlewares personalizados
│   └── auth.js              # Autenticación y validación
├── tests/               # Testing backend
└── database.db         # Base de datos SQLite
```

---

## 🛠️ **Stack Tecnológico**

### **Frontend**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | Framework UI principal |
| **TypeScript** | 5.9.3 | Tipado estático y mejor DX |
| **Vite** | 7.1.7 | Build tool y dev server |
| **Tailwind CSS** | 4.1.14 | Framework CSS utility-first |
| **React Router** | 7.9.3 | Enrutamiento SPA |
| **Jest** | 30.2.0 | Framework de testing |
| **React Testing Library** | 16.3.0 | Testing de componentes |
| **Lucide React** | 0.553.0 | Librería de iconos |

### **Backend**

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | 18.x+ | Runtime JavaScript |
| **Express.js** | 4.x | Framework web |
| **SQLite3** | 5.x | Base de datos ligera |
| **Jest** | - | Testing unitario |

---

## **Funcionalidades Implementadas**

### **Arquitectura Frontend**

#### **Patrón Factory + Singleton**

```typescript
// Factory centralizada que gestiona dependencias
NoticiasServiceFactory → Crea y mantiene instancia única del servicio
└── ApiClient → Cliente HTTP reutilizable
└── NoticiasRepository → Capa de acceso a datos
└── NoticiasService → Lógica de negocio
```

#### **Sistema de Custom Hooks**

```typescript
// Hooks especializados para diferentes casos de uso
useNoticias() → Lista completa con filtros opcionales
useNoticiasRecientes() → Noticias para sidebar
useNoticia() → Noticia individual por ID
useNoticiasActions() → Operaciones CRUD
useBuscarNoticias() → Búsqueda con términos
useAppNavigation() → Navegación centralizada
```

#### **Componentes UI Modulares**

```typescript
// Sistema de componentes reutilizables
Button → Botones con variants y states
Card → Tarjetas de contenido flexibles
Badge → Etiquetas y estados visuales
Input/Textarea → Campos de formulario
LoadingSpinner → Indicadores de carga
ErrorState → Manejo de errores UI
```

#### **Tipos y DTOs Estructurados**

```typescript
// Definiciones de tipos organizadas
types/noticia.ts → Entidad principal
types/dtos.ts → Data Transfer Objects
types/components.ts → Props de componentes
types/ui.ts → Tipos para sistema UI
```

---

## **Instalación y Configuración**

### **Prerrequisitos**

- Node.js 18.x o superior
- npm 9.x o superior
- Git

### **🔧 Configuración del Backend**

```bash
# Navegar al directorio del backend
cd backend

# Instalar dependencias
npm install

# Inicializar la base de datos
node init-db.js

# Ejecutar el servidor
node server.js
```

**El backend estará disponible en:** `http://localhost:3001`

### **🎨 Configuración del Frontend**

```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:coverage

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting del código
npm run lint
```

**El frontend estará disponible en:** `http://localhost:5173`

**Variables de entorno:**

- `VITE_API_URL`: URL del backend (default: `http://localhost:3000`)

### **🗄️ Estructura de la Base de Datos**

```sql
-- Tabla de noticias
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

---

## **Testing y Calidad**

### **Frontend Testing**

- **Componentes React**: 25+ tests para componentes principales
- **Servicios**: Tests unitarios para `NoticiasService` y Repository
- **Hooks**: Tests de custom hooks con mocking
- **Integración**: Tests de flujos completos usuario
- **UI Components**: Tests del sistema de componentes UI
- **Mocking**: Simulación completa de APIs y dependencias

### **Cobertura de Tests**

```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura detallada
npm run test:coverage

# Tests en modo watch para desarrollo
npm run test:watch
```

### **Herramientas de Calidad**

- **ESLint**: Linting avanzado con reglas React/TypeScript
- **TypeScript**: Tipado estático completo y validación
- **Prettier**: Formateo automático de código
- **Jest**: Framework de testing robusto con jsdom
- **React Testing Library**: Testing centrado en usuario

---

## 🔧 **API Endpoints**

### **Noticias API**

| Método | Endpoint | Descripción | Respuesta |
|--------|----------|-------------|-----------|
| `GET` | `/api/noticias` | Obtener todas las noticias | `Array<Noticia>` |
| `GET` | `/api/noticias/:id` | Obtener noticia específica | `Noticia` |
| `POST` | `/api/noticias` | Crear nueva noticia | `Noticia` |
| `PUT` | `/api/noticias/:id` | Actualizar noticia | `Noticia` |
| `DELETE` | `/api/noticias/:id` | Eliminar noticia | `{message: string}` |

### **Estructura de Datos**

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

---

## **Referencias y Documentación**

### **Tecnologías Utilizadas**

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)

### **Patrones de Diseño**

- [MVC Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Repository Pattern](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)
- [Singleton Pattern](https://refactoring.guru/design-patterns/singleton)

---

## 🏗️ Patrones de Diseño Implementados

> Esta sección explica los patrones de diseño utilizados en el proyecto y su justificación.

## 🔹 1. Patrón MVC (Model-View-Controller)

**¿Por qué lo utilizamos en el backend?**

El patrón MVC nos permite:

- **Separación de responsabilidades**: Cada componente tiene una función específica:
  - **Modelos** (`/models`): Representan los datos y la lógica de negocio
  - **Vistas**: En nuestro caso, gestionadas por el frontend
  - **Controladores** (`/controllers`): Manejan las peticiones HTTP y coordinan el flujo

- **Mantenibilidad mejorada**: Al tener componentes desacoplados, podemos modificar uno sin afectar a los demás.

- **Desarrollo en paralelo**: Diferentes equipos pueden trabajar simultáneamente en distintas capas.

- **Testabilidad**: Facilita la creación de pruebas unitarias para cada componente de forma aislada.

## 🔹 2. Repository Pattern

**¿Por qué lo utilizamos para consultas a la base de datos?**

El patrón Repository nos proporciona:

- **Abstracción de la capa de datos**: Los controladores no necesitan conocer cómo se accede a los datos.

- **Centralización de consultas**: Todas las operaciones relacionadas con una entidad están en un solo lugar (`/repositorios`).

- **Reutilización de código**: Evitamos duplicar lógica de acceso a datos en diferentes partes de la aplicación.

- **Facilidad para cambiar la fuente de datos**: Si necesitamos cambiar de SQLite a otro motor de base de datos, solo modificamos el repositorio.

- **Mejora en pruebas**: Podemos crear mocks de repositorios para pruebas sin depender de la base de datos real.

## 🔹 3. Patrón Singleton + Factory

**¿Por qué los combinamos en el frontend?**

Esta combinación nos proporciona:

- **Una única instancia del servicio**: El Factory garantiza que siempre obtengamos la misma instancia del servicio.

- **Gestión centralizada de dependencias**: El Factory maneja toda la cadena de construcción (ApiClient → Repository → Service).

- **Optimización de recursos**: Evita crear múltiples instancias innecesarias del servicio.

- **Facilidad para testing**: El Factory tiene métodos especiales para crear versiones mock en tests.

- **Configuración flexible**: Puede cambiar entre diferentes implementaciones según el entorno.

## 🔹 4. Patrón Factory

**¿Por qué lo utilizamos para la creación de servicios?**

El patrón Factory nos aporta:

- **Encapsulación de la construcción**: Los componentes no necesitan saber cómo crear las dependencias complejas.

- **Gestión centralizada de dependencias**: Toda la cadena de creación (ApiClient → Repository → Service) está en un solo lugar.

- **Facilidad para testing**: Podemos crear versiones mock de los servicios para pruebas unitarias.

- **Flexibilidad de configuración**: Podemos cambiar la implementación según el entorno (desarrollo, testing, producción).

- **Reducción de acoplamiento**: Los componentes solo dependen de la interfaz, no de la implementación concreta.

## 🔹 5. Custom Hooks Pattern

**¿Por qué creamos hooks especializados?**

Los custom hooks nos permiten:

- **Reutilización de lógica de estado**: La misma lógica se puede usar en múltiples componentes.

- **Separación de responsabilidades**: Los componentes se enfocan en la UI, los hooks en la lógica de negocio.

- **Manejo consistente de errores**: Todos los hooks manejan loading y errores de la misma manera.

- **Abstracción de complejidad**: Los componentes usan hooks simples sin preocuparse por los detalles internos.

- **Testing independiente**: Podemos testear la lógica de los hooks por separado de la UI.

## 🔹 6. Compound Components Pattern

**¿Por qué utilizamos el sistema de componentes UI?**

Este patrón nos da:

- **Composabilidad**: Los componentes se pueden combinar de múltiples maneras.

- **Consistencia visual**: Todos los componentes siguen el mismo sistema de diseño.

- **Reutilización máxima**: Un componente como `Button` se puede usar en toda la aplicación.

- **Mantenimiento simplificado**: Los cambios en el diseño se hacen en un solo lugar.

- **Props tipadas**: TypeScript garantiza que usemos los componentes correctamente.

---
