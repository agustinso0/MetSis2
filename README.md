# 📰 Portal de Noticias - MetSis2

> **Sistema completo de gestión de noticias** desarrollado con arquitectura full-stack moderna, implementando patrones de diseño y metodologías de desarrollo ágil.

---

## 🎯 **Descripción del Proyecto**

Portal de Noticias es una aplicación web completa que permite **visualizar, gestionar y consultar artículos de noticias** con una interfaz moderna y responsiva. El proyecto implementa una arquitectura robusta con separación clara entre frontend y backend, siguiendo las mejores prácticas de desarrollo.

### **Características Principales:**
- **Listado de noticias**
- **Vista detallada**
- **Sistema de estados**
- **API RESTful**
- **Testing integral**
- **UI/UX moderno**
- **Responsive design**

---

## 🏗️ **Arquitectura Técnica**

### **Frontend (React + TypeScript)**
```
frontend/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ListaNoticias.tsx    # Grid de noticias
│   │   └── DetalleNoticias.tsx  # Vista detallada
│   ├── pages/              # Páginas de la aplicación
│   │   ├── NoticiasPage.tsx     # Página principal
│   │   └── DetallePage.tsx      # Página de detalle
│   ├── services/           # Lógica de negocio
│   │   └── NoticiasService.ts   # Servicio de noticias
│   ├── repositories/       # Capa de acceso a datos
│   │   └── NoticiasRepository.ts # Repository pattern
│   ├── interfaces/         # Contratos TypeScript
│   ├── types/             # Definiciones de tipos
│   └── __tests__/         # Suite de testing
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
| **React** | 19.0.0 | Framework UI principal |
| **TypeScript** | 5.6.2 | Tipado estático y mejor DX |
| **Vite** | 7.1.8 | Build tool y dev server |
| **Tailwind CSS** | 4.0.0 | Framework CSS utility-first |
| **React Router** | 7.0.2 | Enrutamiento SPA |
| **Jest** | 29.7.0 | Framework de testing |
| **React Testing Library** | 16.1.0 | Testing de componentes |

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

#### **Patrón Repository + Service**
```typescript
// Separación clara de responsabilidades
NoticiasRepository.ts → Acceso a datos (API calls)
NoticiasService.ts → Lógica de negocio
Components → Presentación y UI
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

# Build para producción
npm run build
```

**El frontend estará disponible en:** `http://localhost:5173`

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
- **Componentes React**: 17 tests para `DetalleNoticias`
- **Servicios**: 5 tests para `NoticiasService`
- **Integración**: Tests de flujos completos
- **Mocking**: Simulación de APIs y datos

### **Cobertura de Tests**
```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

### **Herramientas de Calidad**
- **ESLint**: Linting y estándares de código
- **TypeScript**: Tipado estático y validación
- **Prettier**: Formateo automático de código
- **Jest**: Framework de testing robusto

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

## **Metodología de Desarrollo**

### **Principios Aplicados**
- **SOLID**: Principios de diseño orientado a objetos
- **DRY**: Don't Repeat Yourself - Reutilización de código
- **KISS**: Keep It Simple, Stupid - Simplicidad en el diseño
- **Single Responsibility**: Cada componente tiene una responsabilidad específica
- **Separation of Concerns**: Separación clara entre capas

### **Herramientas de Desarrollo**
- **Vite**: Build tool ultra-rápido con HMR
- **Tailwind CSS**: Framework CSS utility-first
- **TypeScript**: Tipado estático para mayor robustez
- **Jest + React Testing Library**: Suite de testing completa
- **ESLint + Prettier**: Linting y formateo automático

### **Workflow de Git**
- **Feature Branches**: Desarrollo en ramas por funcionalidad
- **Pull Requests**: Revisión de código antes del merge
- **Conventional Commits**: Formato estandardizado de commits
- **Issue Tracking**: Gestión de tareas y bugs

---

## **Métricas del Proyecto**

### **Estadísticas de Código**
```
Frontend:
├── Components: 2 componentes principales + utilidades
├── Pages: 2 páginas (Lista y Detalle)
├── Services: 1 servicio principal
├── Tests: 25 tests unitarios
└── Cobertura: 100% en componentes críticos

Backend:
├── Controllers: 1 controlador MVC
├── Models: 1 modelo de datos
├── Repositories: 1 repository pattern
├── Middleware: 1 middleware de autenticación
└── API Endpoints: 5 endpoints RESTful
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

* **Separación de responsabilidades**: Cada componente tiene una función específica:
  - **Modelos** (`/models`): Representan los datos y la lógica de negocio
  - **Vistas**: En nuestro caso, gestionadas por el frontend
  - **Controladores** (`/controllers`): Manejan las peticiones HTTP y coordinan el flujo

* **Mantenibilidad mejorada**: Al tener componentes desacoplados, podemos modificar uno sin afectar a los demás.

* **Desarrollo en paralelo**: Diferentes equipos pueden trabajar simultáneamente en distintas capas.

* **Testabilidad**: Facilita la creación de pruebas unitarias para cada componente de forma aislada.

## 🔹 2. Repository Pattern

**¿Por qué lo utilizamos para consultas a la base de datos?**

El patrón Repository nos proporciona:

* **Abstracción de la capa de datos**: Los controladores no necesitan conocer cómo se accede a los datos.

* **Centralización de consultas**: Todas las operaciones relacionadas con una entidad están en un solo lugar (`/repositorios`).

* **Reutilización de código**: Evitamos duplicar lógica de acceso a datos en diferentes partes de la aplicación.

* **Facilidad para cambiar la fuente de datos**: Si necesitamos cambiar de SQLite a otro motor de base de datos, solo modificamos el repositorio.

* **Mejora en pruebas**: Podemos crear mocks de repositorios para pruebas sin depender de la base de datos real.

## 🔹 3. Patrón Singleton

**¿Por qué lo utilizamos para la conexión a DB?**

El patrón Singleton garantiza:

* **Una única instancia de conexión**: Evita abrir múltiples conexiones innecesarias a la base de datos.

* **Optimización de recursos**: Reduce la sobrecarga de memoria y mejora el rendimiento.

* **Consistencia**: Asegura que todos los componentes trabajen con la misma conexión.

* **Control centralizado**: Facilita la gestión de la configuración de la conexión desde un único punto.

* **Prevención de race conditions**: Evita problemas de concurrencia al acceder a la base de datos.

---

# 📂 Guía de Uso de Ramas en Git

> Aprende a **crear, navegar y colaborar con ramas** en Git desde la terminal.
> Ideal para todos los colaboradores del repositorio.

---

## 🔹 1. Listar ramas

| Tipo de rama               | Comando         |
| -------------------------- | --------------- |
| **Locales**                | `git branch`    |
| **Remotas**                | `git branch -r` |
| **Todas** (local + remoto) | `git branch -a` |

---

## 🔹 2. Crear ramas

| Objetivo                          | Comando                       |
| --------------------------------- | ----------------------------- |
| Crear y cambiarse a la nueva rama | `git checkout -b nombre-rama` |
| Crear sin cambiarse               | `git branch nombre-rama`      |

---

## 🔹 3. Cambiar de rama

```bash
git checkout nombre-rama
```

o

```bash
git switch nombre-rama
```

---

## 🔹 4. Traer cambios del remoto

* **Actualizar información de ramas remotas:**

```bash
git fetch origin
```

* **Actualizar tu rama con los cambios del remoto:**

```bash
git pull origin nombre-rama
```

* **Si tu rama local no existe y querés traerla del remoto:**

```bash
git checkout -b nombre-rama origin/nombre-rama
```

o

```bash
git switch -c nombre-rama origin/nombre-rama
```

---

## 🔹 5. Subir tus cambios (push)

* Subir la rama actual al remoto:

```bash
git push origin nombre-rama
```

* Primera vez que subís la rama (vincula local con remoto):

```bash
git push -u origin nombre-rama
```

---

## 🔹 6. Hacer commits

* Agregar cambios:

```bash
git add .
```

* Confirmar cambios:

```bash
git commit -m "Mensaje descriptivo del cambio"
```

* Subir commits:

```bash
git push origin nombre-rama
```

---

## 🔹 7. Fusionar ramas (merge)

1. Cambiar a la rama destino (ej: `dev`) y actualizar:

```bash
git checkout dev
git pull origin dev
```

2. Fusionar la rama:

```bash
git merge nombre-rama
```

3. Subir los cambios:

```bash
git push origin dev
```

> ⚠️ Si hay conflictos, Git te avisará. Resuélvelos antes de hacer push.

---

## 🔹 8. Rebase (opcional, avanzado)

* Aplicar commits de otra rama "encima" de la tuya:

```bash
git checkout nombre-rama
git pull --rebase origin dev
```

> Mantiene un historial lineal más limpio.

---

## 🔹 9. Eliminar ramas

* **Local:**

```bash
git branch -d nombre-rama       # si está mergeada
git branch -D nombre-rama       # forzar eliminación
```

* **Remota:**

```bash
git push origin --delete nombre-rama
```

---

## 🔹 10. Casos comunes

| Caso                                   | Comando                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Ver todas las ramas                    | `git branch -a`                                                                                       |
| Traer todos los cambios del remoto     | `git fetch origin`                                                                                    |
| Traer cambios de `module-back` a tu PC | `git checkout module-back` <br> `git pull origin module-back`                                         |
| Subir tus cambios a `module-front`     | `git add .` <br> `git commit -m "mensaje"` <br> `git push origin module-front`                        |
| Fusionar `module-back` en `dev`        | `git checkout dev` <br> `git pull origin dev` <br> `git merge module-back` <br> `git push origin dev` |

---

## 🔹 11. Buenas prácticas

1. Siempre hacer `git fetch` antes de trabajar para actualizar ramas remotas.
2. Mantener commits claros y atómicos.
3. Hacer pull o merge frecuente para evitar conflictos grandes.
4. Trabajar en ramas de funcionalidad, nunca directamente en `main`.
5. Para cambios importantes, usar **Pull Request** en GitHub antes de mergear.
6. Nombrar ramas según funcionalidad:

   * `feature/login`
   * `bugfix/errores-api`
   * `hotfix/seguridad`

---

