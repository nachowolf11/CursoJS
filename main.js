let distancia = 0;
let costoEnvio = 0;

function pregDistancia(){
    return distancia = parseInt(prompt("Ingrese la distancia del envío:"));
}

function calculoYMuestroCosto(distancia){
    if(distancia<=10){
        alert("Por la corta distancia, el envío es gratis.");
    }else if(distancia>60){
        alert("Lo sentimos, nuestros envíos no llegan tan lejos.");
    }else{
        costoEnvio = distancia * 25;
        alert("El costo del envío es: " + costoEnvio);
    }
}

calculoYMuestroCosto(pregDistancia());