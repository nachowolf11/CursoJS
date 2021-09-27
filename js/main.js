class Fotocopiadora {
    constructor(marca,modelo,stock,estado){
        this.marca = marca;
        this.modelo = modelo;
        this.stock = stock;
        this.estado = estado;
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

function setFotocopiadora(fotocopiadoras) {
    localStorage.setItem("fotocopiadoras",JSON.stringify(fotocopiadoras));
}

function imprimirFotocopiadora(fotocopiadoras) {
    for (const fotocopiadora of fotocopiadoras) {
        let div = document.createElement("div");
        div.innerHTML = `<h3> Marca: ${fotocopiadora.marca}</h3>
                            <h3> Modelo: ${fotocopiadora.modelo}</h3>
                            <h3> Estado: ${fotocopiadora.stock}</h3>
                            <h3> Stock: ${fotocopiadora.estado}</h3>
                            <br>`;
        section.appendChild(div);   
    }
}

function crearFotocopiadora(event) {
    event.preventDefault();
    const inputs = document.getElementsByClassName("crearFotocopiadora");
    fotocopiadoras.push(new Fotocopiadora(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value));
    let div = document.createElement("div");
    div.innerHTML = `<h3> Marca: ${inputs[0].value}</h3>
                            <h3> Modelo: ${inputs[1].value}</h3>
                            <h3> Estado: ${inputs[2].value}</h3>
                            <h3> Stock: ${inputs[3].value}</h3>
                            <br>`;
    section.appendChild(div);
    setFotocopiadora(fotocopiadoras);
}


const section = document.getElementById("section");
let crearRegistro = document.getElementById("registro");

const almacenados = JSON.parse(localStorage.getItem("fotocopiadoras"));
const fotocopiadoras = [];

if (localStorage.length != 0) {
    for (const objeto of almacenados) {
        fotocopiadoras.push(new Fotocopiadora(objeto.marca,objeto.modelo,objeto.stock,objeto.estado));
    }
    imprimirFotocopiadora(fotocopiadoras); 
}

crearRegistro.addEventListener("submit",crearFotocopiadora);

