let tipoAConvertir = 0;
let cantPesos = 0;
let moneda = "";
let resultado = 0;

function preguntartipoAConvertir(){
    return tipoAConvertir = parseInt(prompt(
        "Ingrese el tipo de Moneda que desea obtener: \n" +
        "1 = Dolar \n" +
        "2 = Euro \n" +
        "3 = Yen \n"
    ));
}

function tipoDeMoneda(tipoAConvertir){
    switch(tipoAConvertir){
        case 1:
            return moneda = "Dolar";
        case 2:
            return moneda = "Euro";
        case 3:
            return moneda = "Yen";
    }
}

function preguntarCantPesos(moneda){
    return cantPesos= parseFloat(prompt("Ingrese la cantidad de Pesos que desea convertir a " + moneda + ":"));
}

function convertir(tipoAConvertir,cantPesos){
    switch(tipoAConvertir){
        case 1:
            resultado = cantPesos * 103.52;
            break;
        case 2:
            resultado = cantPesos * 116.29;
            break;
        case 3:
            resultado = cantPesos * 0.89;
        }
    alert(cantPesos + " Pesos Argentinos equivalen a " + resultado.toFixed(2) + " " + moneda);
}

preguntartipoAConvertir();
preguntarCantPesos(tipoDeMoneda(tipoAConvertir));
convertir(tipoAConvertir,cantPesos);

