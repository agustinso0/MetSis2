const NewsRepository = require("../repositorios/NewsRepository");
const News = require("../models/News");

exports.create = (req, res) => {
  const { titulo, contenido, autor, imagen } = req.body;
  const news = new News(null, titulo, contenido, autor, imagen);
  NewsRepository.create(news, (err, id) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id });
  });
};

exports.getAll = (req, res) => {
  NewsRepository.getAll((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;
  NewsRepository.getById(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(row);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const { titulo, contenido, autor, imagen } = req.body;
  const news = new News(id, titulo, contenido, autor, imagen);
  NewsRepository.update(id, news, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Noticia actualizada" });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  NewsRepository.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Noticia eliminada" });
  });
};
