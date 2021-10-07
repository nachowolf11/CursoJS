//CREO OBJETOS
fotocopiadoras.push(new Fotocopiadora(1,"RICOH","4500",3,"Nueva",50000));
fotocopiadoras.push(new Fotocopiadora(2,"RICOH","450",3,"Nueva",30000));
fotocopiadoras.push(new Fotocopiadora(3,"RICOH","5500",3,"Nueva",100000));
fotocopiadoras.push(new Fotocopiadora(4,"RICOH","500",3,"Nueva",10000));
fotocopiadoras.push(new Fotocopiadora(5,"RICOH","5000",3,"Nueva",40000));
fotocopiadoras.push(new Fotocopiadora(6,"RICOH","650",3,"Nueva",60000));
fotocopiadoras.push(new Fotocopiadora(7,"RICOH","450",3,"Nueva",600000));
fotocopiadoras.push(new Fotocopiadora(8,"RICOH","4000",3,"Nueva",120000));

//IMPRIMO ESOS OBJETOS

fotocopiadorasUI(fotocopiadoras,"#contenedorCards");

//AGREGO FUNCIONALIDAD AL BOTON COMPRAR

$ (".btnCompra").click(comprarFotocopiadora);