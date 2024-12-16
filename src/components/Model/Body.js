export default class Body{
    
    constructor(url,titulo, descripcion, imagen){
        this.url = url;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen
    }

    getTitulo(){return this.titulo}
    getDescripcion(){return this.descripcion}
    getUrl(){return this.url}
    getImagen(){return this.imagen}

}

