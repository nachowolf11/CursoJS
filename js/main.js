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

function pideStock() {
    stock = parseInt(prompt("Stock: "));
    while (isNaN(stock)) {
        alert("No ingreso un número.");
        stock = parseInt(prompt("Stock: "));
    }
    return stock
}

function pideEstado() {
    estado = prompt("Estado: ");
    while (estado.toUpperCase() != "NUEVO" && estado.toUpperCase() != "USADO") {
        alert("Estados posibles: Nuevo / Usado.");
        estado = prompt("Estado: ");
    }
    return estado.toUpperCase()
}

function crearFotocopiadora(fotocopiadoras) {
    fotocopiadoras.push(new Fotocopiadora(prompt("Marca: ").toUpperCase(),prompt("Modelo: "),pideEstado(),pideStock()));
}

const fotocopiadoras = [];
let continuar = "";

if (fotocopiadoras.length == 0) {
    alert("Actualmente no se encuentra cargada ninguna fotocopiadora.");
    crearFotocopiadora(fotocopiadoras);
}

continuar = prompt("¿Desea ingresar una nueva fotocopiadora? \n" + "(Ingrese 'si' para continuar con la carga.)");

while (continuar.toUpperCase() == "SI") {
    crearFotocopiadora(fotocopiadoras);
    continuar = prompt("¿Desea ingresar una nueva fotocopiadora? \n" + "(Ingrese 'si' para continuar con la carga.)");
}

const section = document.getElementById("section");

for (const fotocopiadora of fotocopiadoras) {
    let div = document.createElement("div");
    div.innerHTML = `<h3> Marca: ${fotocopiadora.marca}</h3>
                            <h3> Modelo: ${fotocopiadora.modelo}</h3>
                            <h3> Estado: ${fotocopiadora.estado}</h3>
                            <h3> Stock: ${fotocopiadora.stock}</h3>
                            <br>`;
    section.appendChild(div);
}