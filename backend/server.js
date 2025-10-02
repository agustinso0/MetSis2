const express = require('express');
const bodyParser = require('body-parser');
const getDatabase = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = getDatabase();

// verificar conexion a la base de datos
app.get('/test', (req, res) => {
    db.all('SELECT * FROM noticias', (err, row) => {
        if (err) {
            res.status(500).json({ error: 'Error al conectar a la base de datos' });
        } else {
            res.json({ message: 'Conexión a la base de datos exitosa', row });
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));