class Fotocopiadora {
    constructor(id,marca,modelo,stock,estado,precio){
        this.id = parseInt(id);
        this.marca = marca;
        this.modelo = modelo;
        this.stock = stock;
        this.estado = estado;
        this.precio = parseFloat(precio);
        this.cantidad = 1;
    }
    agregarCantidad(valor){
        this.cantidad += valor;
    }
    subtotal(){
        return this.cantidad * this.precio;
    }
}