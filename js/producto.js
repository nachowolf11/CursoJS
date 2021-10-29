class Fotocopiadora {
    constructor(id,tipo,nombre,stock,estado,precio,img){
        this.id = parseInt(id);
        this.tipo = tipo;
        this.nombre = nombre;
        this.stock = stock;
        this.estado = estado;
        this.precio = parseFloat(precio);
        this.img = img;
        this.cantidad = 1;
    }
    agregarCantidad(valor){
        this.cantidad += valor;
    }
    vaciar(){
        this.cantidad = 1;
    }
    subtotal(){
        return this.cantidad * this.precio;
    }
}