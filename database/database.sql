CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    rol TEXT NOT NULL DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE noticias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    contenido TEXT NOT NULL,
    autor TEXT NOT NULL,
    imagen TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    publicado DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, rol) 
VALUES 
('admin1', '1234', 'admin');

INSERT INTO noticias (titulo, contenido, autor, imagen) 
VALUES
('Nuevo sistema de gestión', 'Se ha implementado un nuevo sistema de gestión para mejorar el rendimiento.', 'admin1', 'img1.jpg');