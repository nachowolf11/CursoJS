var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//IMPRIME LOS OBJETOS
function fotocopiadorasUI(fotocopiadoras,id) {
    for (const fotocopiadora of fotocopiadoras) {
        $(id).append(
            `<div class="card col-md-6 m-1 producto" category="${fotocopiadora.tipo}" style="width:200px;">
            <img src="${fotocopiadora.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${fotocopiadora.nombre}</h5>
              <p class="card-text">${fotocopiadora.precio}</p>
              <a href="#" id=${fotocopiadora.id} class="btn btn-danger btnCompra">Comprar</a>
            </div>
          </div>`
        )
    }
}

//AGREGAR PRODRUCTOS "COMPRADOS" AL ARRAY CARRITO
function comprarFotocopiadora(e) {
    e.preventDefault();
    const idFotocopiadora = e.target.id;
    const existe = carrito.find(fotocopiadora => fotocopiadora.id == idFotocopiadora);

    if (existe == undefined) {
        const seleccionado = fotocopiadoras.find(fotocopiadora => fotocopiadora.id == idFotocopiadora);
        carrito.push(seleccionado);
    } else {
        existe.agregarCantidad(1);
    }
    
    carritoUI(carrito);
}

//AGREGAR PRODUCTOS "COMPRADOS" AL CARRITO (UI) Y CONTADOR DE PRODUCTOS
function carritoUI(carrito) {
    $("#carritoCantidad").html(carrito.length);
    $("#carritoFotocopiadoras").empty();
    for (const fotocopiadora of carrito) {
        $("#carritoFotocopiadoras").append(
            `<li>
            <span>${fotocopiadora.nombre}</span>
            <span>Cantidad: ${fotocopiadora.cantidad}</span>
            <span>Subtotal: ${fotocopiadora.subtotal()}</span>
            </li>
            `
        )
    }
    $("#carritoFotocopiadoras").append(`<button type="button" id="btnConfirmar" class="btn btn-danger" data-bs-toggle="popover" title="¡Operacion exitosa!" data-bs-content="Tu compra fue realizada exitosamente">Confirmar</button>`);
    $("#contenedorAlert").empty();
    $("#contenedorAlert").append(`<div class="alert alert-success" id="alertCompra" role="alert">¡Tu compra fue realizada exitosamente!</div>`);
    $("#alertCompra").hide();
    $("#btnConfirmar").click(enviarCompra);
}

function enviarCompra() {
    $.post(postURL,JSON.stringify(carrito), (respuesta,estado) =>{
        if (estado == "success") {
            $("#alertCompra").slideDown().delay(4000).slideUp();
        }
    }) 
}

//FILTRA LOS PRODUCTOS
function filtrar() {
    let checked = [];
    let notChecked = [];
    checked = $("input[name='filtro']:checked")
    notChecked = $("input[name='filtro']:not(:checked)")
    if (checked.length == 0) {
        $(".producto").show();
    } else {
        for (const caracteristica of checked) {
            const value = caracteristica.value;
            console.log(value);
            $('.producto[category="'+value+'"]').show();
        }
        for (const caracteristica of notChecked) {
            const value = caracteristica.value;
            console.log(value);
            $('.producto[category="'+value+'"]').hide();
        }   
    }

}
