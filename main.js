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

const fotocopiadoras = [];

fotocopiadoras.push(new Fotocopiadora("Ricoh","2022","Usada",0));
fotocopiadoras.push(new Fotocopiadora("Ricoh","5002","Nueva",5));
fotocopiadoras.push(new Fotocopiadora("Ricoh","4500","Nueva",2));

function mostrar(){
    do {
        for (const fotocopiadora of fotocopiadoras) {
            alert(fotocopiadora.marca + " " + fotocopiadora.modelo);
        }
        repetir = parseInt(prompt("Ingrese 1 para volver a ver el listado o 0 para comprar un producto: "));
    } while (repetir == 1);
}

function consultar(){
    return 
}

function consultarVender (codigo,contador){
    do {
        codigo = parseInt(prompt("Ingrese el código numérico de la fotocopiadora que desea comprar:"));
        contador = 0;
        for (const fotocopiadora of fotocopiadoras) {
            if (fotocopiadora.modelo == codigo) {
                fotocopiadora.vender();
            }else{
                contador ++;
            }
        }
        if (contador == 3) {
            alert("El modelo ingresado no existe, intente nuevamente.");
        }
    } while (contador == 3);
}

let codigo = 0;
let repetir = 0;
let contador = 0;

alert("Bienvenido a nuestro simulador. A continuación, podrá visualizar el listado de fotocopiadoras.");

mostrar();

consultarVender(codigo);