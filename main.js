let contador = 0;
let numero = 0;

do {
    contador ++;
    console.log("Intento número: " + contador);
    numero = prompt ("Ingrese el número ganador:");
} while (numero != 9);

if(contador<4){
    alert("Acertaste el número ganador luego de:" + contador + "intentos. Eres un ganador");
}else{
    alert("Acertaste el número ganador luego de: " + contador + " intentos. No lograste ganar.");
}
