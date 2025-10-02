const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middleware/auth');
const getDatabase = require('./db');

// require controllers
const NewController = require('./controllers/NewsController');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = getDatabase();

// TESTEO: verificar conexion a la base de datos
app.get('/test', (req, res) => {
    db.all('SELECT * FROM noticias', (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Error al conectar a la base de datos' });
        } else {
            res.json({ message: 'Conexión a la base de datos exitosa', row });
        }
    });
});

// routes
app.post('/noticias', NewController.create);
app.get('/noticias', NewController.getAll);
app.get('/noticias/:id', NewController.getById);
app.put('/noticias/:id', NewController.update);
app.delete('/noticias/:id', NewController.delete);
app.post('/login', authMiddleware.authenticate, (req, res) => {
    res.json({ message: 'Login exitoso' });
});

// Exportamos `app` para tests
module.exports = app;

// Solo arrancar servidor si no es test
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port localhost:${PORT}`));
}