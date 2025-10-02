## Base de datos con SQlite
🔹 Backend con Node.js + Express + SQLite

Instalar dependencias:

```bash
npm install
```

Tablas:

![Tablas](uploads/tables.png)

## Ejecturar testeo Jest

```bash
cd backend
npx jest
```
### Ejemplo:
  console.log
    Base de datos ya existe

      at log (backend/db.js:11:17)

 PASS  tests/new.test.js
  Noticias API
    √ GET /noticias - debe devolver un array de noticias (64 ms)
    √ POST /noticias - crear noticia (33 ms)
    √ GET /noticias/:id - obtener por id (8 ms)
    √ PUT /noticias/:id - actualizar noticia (6 ms)
    √ DELETE /noticias/:id - eliminar noticia (10 ms)
    √ POST /login - login exitoso (15 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.638 s, estimated 3 s
Ran all test suites.

