const getDatabase = require("../db");

const db = getDatabase();

exports.authenticate = (req, res, next) => {
  const { username, password } = req.body;
  db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: "Error al autenticar al usuario" });
      } else if (row) {
        next();
      } else {
        res.status(401).json({ error: "Credenciales inválidas" });
      }
    }
  );
};
