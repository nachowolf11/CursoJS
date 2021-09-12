

class Fotocopiadora {
    constructor(marca,modelo,estado,stock){
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        this.stock = stock;
    }
    vender(){
        if(this.stock > 0){
            this.stock -= 1;
            alert(this.marca + " " + this.modelo + " se añadio al carrito de compras.");
        }else{
            alert("No hay stock de: " + this.marca + " " + this.modelo);
        }
    }
}

const fotocopiadora1 = new Fotocopiadora("Ricoh","5002","Nueva",5);
const fotocopiadora2 = new Fotocopiadora("Ricoh","2022","Usada",0);
const fotocopiadora3 = new Fotocopiadora("Ricoh","4500","Nueva",2);

function consultar(){
    return tipo = parseInt(prompt(
        "Ingrese que fotocopiadora desea comprar: \n" +
        "1: " + fotocopiadora1.marca + " " + fotocopiadora1.modelo + "\n" +
        "2: " + fotocopiadora2.marca + " " + fotocopiadora2.modelo + "\n" +
        "3: " + fotocopiadora3.marca + " " + fotocopiadora3.modelo + "\n"
    ));
}

function seleccionarVender (tipo){
    switch(tipo){
        case 1:
            fotocopiadora1.vender();
            break;
        case 2:
            fotocopiadora2.vender();
            break;
        case 3:
            fotocopiadora3.vender();
            break;
    }
}

let tipo = 0;

tipo = consultar();

seleccionarVender(tipo);