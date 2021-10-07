//IMPRIME LOS OBJETOS
function fotocopiadorasUI(fotocopiadoras,id) {
    for (const fotocopiadora of fotocopiadoras) {
        $ (id).append(
            `<div class="card col-md-6" style="width:200px;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${fotocopiadora.marca} ${fotocopiadora.modelo}</h5>
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
    $ ("#carritoCantidad").html(carrito.length);
    $ ("#carritoFotocopiadoras").empty();
    for (const fotocopiadora of carrito) {
        $ ("#carritoFotocopiadoras").append(
            `<li>
            <span>${fotocopiadora.marca} ${fotocopiadora.modelo}</span>
            <span>$${fotocopiadora.precio}</span>
            <span>Cantidad: ${fotocopiadora.cantidad}</span>
            <span>Subtotal: ${fotocopiadora.subtotal()}</span>
            </li>
            `
        )
    }
}

