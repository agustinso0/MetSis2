const sqlite3 = require('sqlite3').verbose();

// instancia
let database

function getDatabase() {
    if (!database) {
        database = new sqlite3.Database('./database.db');
        return database;
    } else {
        console.log('Base de datos ya existe');
        return database;
    }
}

module.exports = getDatabase;
