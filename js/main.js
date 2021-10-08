//CREO OBJETOS
fotocopiadoras.push(new Fotocopiadora(1,"fotocopiadora","RICOH 4500",3,"Nuevo",50000,"imagenes/productos/fotocopiadora.jpg"));
fotocopiadoras.push(new Fotocopiadora(2,"fotocopiadora","RICOH 450",3,"Nuevo",30000,"imagenes/productos/fotocopiadora.jpg"));
fotocopiadoras.push(new Fotocopiadora(3,"fotocopiadora","RICOH 5500",3,"Usado",100000,"imagenes/productos/fotocopiadora.jpg"));
fotocopiadoras.push(new Fotocopiadora(4,"repuesto","RICOH 500",3,"Usado",10000,"imagenes/productos/repuesto.jpg"));
fotocopiadoras.push(new Fotocopiadora(5,"repuesto","RICOH 5000",3,"Usado",40000,"imagenes/productos/repuesto.jpg"));
fotocopiadoras.push(new Fotocopiadora(6,"repuesto","RICOH 650",3,"Usado",60000,"imagenes/productos/repuesto.jpg"));
fotocopiadoras.push(new Fotocopiadora(7,"fotocopiadora","RICOH 450",3,"Nuevo",600000,"imagenes/productos/fotocopiadora.jpg"));
fotocopiadoras.push(new Fotocopiadora(8,"fotocopiadora","RICOH 4000",3,"Nuevo",120000,"imagenes/productos/fotocopiadora.jpg"));

//IMPRIMO ESOS OBJETOS

fotocopiadorasUI(fotocopiadoras,"#contenedorCards");

//AGREGO FUNCIONALIDAD AL BOTON COMPRAR

$(".btnCompra").click(comprarFotocopiadora);

$("input[name='filtro']").change(function () {
    $(".producto").fadeOut("slow",filtrar)
});