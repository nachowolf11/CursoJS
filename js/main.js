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
const fotocopiadoras = [];

const section = document.getElementById("section");
let crearRegistro = document.getElementById("registro");
crearRegistro.addEventListener("submit",crearFotocopiadora);

function crearFotocopiadora(event) {
    event.preventDefault();
    const inputs = document.getElementsByClassName("crearFotocopiadora");
    fotocopiadoras.push(new Fotocopiadora(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value));
    console.log(fotocopiadoras);
    let div = document.createElement("div");
    div.innerHTML = `<h3> Marca: ${inputs[0].value}</h3>
                            <h3> Modelo: ${inputs[1].value}</h3>
                            <h3> Estado: ${inputs[2].value}</h3>
                            <h3> Stock: ${inputs[3].value}</h3>
                            <br>`;
    section.appendChild(div);
}