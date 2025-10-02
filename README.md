# 🏗️ Patrones de Diseño Implementados

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

