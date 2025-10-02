const fs = require('fs');
const getDatabase = require('./db');

const db = getDatabase();

//leer archivo sql
const sql = fs.readFileSync('../database/database.sql', 'utf8');

//ejecutar sql
db.exec(sql, (err) => {
    if (err) {
        console.error('Error al inicializar la base de datos:', err.message);
    } else {
        console.log('Base de datos inicializada correctamente');
    }
    db.close();
});
