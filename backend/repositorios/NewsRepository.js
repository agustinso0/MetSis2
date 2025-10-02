const getDatabase = require('../db');

class NewsRepository {
  constructor() {
    this.db = getDatabase();
  }
  //CREATE
  create(news, callback) {
    const sql = 'INSERT INTO noticias (titulo, contenido, autor, imagen) VALUES (?, ?, ?, ?)';
    this.db.run(sql, [news.titulo, news.contenido, news.autor, news.imagen], function(err) {
      callback(err, this.lastID);
    });
  }
  //GETTERS
  getAll(callback) {
    this.db.all('SELECT * FROM noticias', callback);
  }

  getById(id, callback) {
    this.db.get('SELECT * FROM noticias WHERE id = ?', [id], callback);
  }
  //UPDATE
  update(id, news, callback) {
    const sql = 'UPDATE noticias SET titulo = ?, contenido = ?, autor = ?, imagen = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?';
    this.db.run(sql, [news.titulo, news.contenido, news.autor, news.imagen, id], callback);
  }
  //DELETE
  delete(id, callback) {
    this.db.run('DELETE FROM noticias WHERE id = ?', [id], callback);
  }
}

module.exports = new NewsRepository();  // Instancia única
