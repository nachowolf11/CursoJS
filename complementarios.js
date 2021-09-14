class Fotocopiadora {
    constructor(marca,modelo,estado,stock,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.estado = estado;
        this.stock = stock;
        this.precio = precio;
    }
}

const fotocopiadoras = [];

fotocopiadoras.push(new Fotocopiadora("Ricoh","2022","Usada",0,5000));
fotocopiadoras.push(new Fotocopiadora("Ricoh","5002","Nueva",5,8000));
fotocopiadoras.push(new Fotocopiadora("Ricoh","4500","Nueva",2,3050));
fotocopiadoras.push(new Fotocopiadora("Ricoh","4500","Nueva",2,8900));
fotocopiadoras.push(new Fotocopiadora("Ricoh","4500","Nueva",2,100000));

fotocopiadoras.sort(function mayorMenor(a, b){
    return b.precio - a.precio;
});

for (const fotocopiadora of fotocopiadoras) {
    console.log(fotocopiadora);
}
