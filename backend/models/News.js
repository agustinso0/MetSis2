// modelo New

class News {
    constructor(id, titulo, contenido, autor, imagen, updated_at, publicado) {
        this.id = id;
        this.titulo = titulo;
        this.contenido = contenido;
        this.autor = autor;
        this.imagen = imagen;
        this.updated_at = updated_at;
        this.publicado = publicado;
    }
}

module.exports = News;
