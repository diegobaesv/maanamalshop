document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    document.getElementById('finalizarCompra').addEventListener('click', enviarWhatsApp);
});

function cargarProductos() {
    fetch('https://raw.githubusercontent.com/diegobaesv/maanamalshop/main/data.json')
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.getElementById('productos');
            let iProduct=0;
            data.productos.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('col-6','col-md-4', 'mb-3','producto-card');
                let htmlProducto = `<div class="card">`;

                //carrousel imagenes
                htmlProducto += `<div id="carouselExampleSlidesOnly_id${iProduct}" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">`;

                producto.imagenes.forEach(img => {
                    if(producto.imagenes[0] == img){
                        htmlProducto += `<div class="carousel-item active ">
                                         <img class="d-block w-100 card-img-top" src="${img}">
                                    </div>`;
                    } else{
                        htmlProducto += `<div class="carousel-item">
                                         <img class="d-block w-100 card-img-top" src="${img}">
                                    </div>`;
                    }
                    
                });

               
  
                htmlProducto += `</div>
                                    <a class="carousel-control-prev" href="#carouselExampleSlidesOnly_id${iProduct}" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleSlidesOnly_id${iProduct}" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                    </a>
              </div>`;

              
                //htmlProducto += `<img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">`;

                htmlProducto += `<div class="card-body">
                                    <h5 class="card-title">${producto.marca}</h5>
                                    <p class="producto-nombre">${producto.nombre}</p>`;
                
                htmlProducto += `<div class="precios">`;

                    htmlProducto += `<p class="producto-precio-oferta">S/ ${producto.precioOferta}</p>`;

                    if(producto.precio != producto.precioOferta){
                        htmlProducto +=`<p class="producto-precio">S/ ${producto.precio}</p>`;
                    }


                htmlProducto += `</div>`;

                //htmlProducto += `<a href="#"  style="display:hidden;" class="stretched-link">Ver detalles</a>`;


                htmlProducto += `</div>
                                </div>`;


                div.innerHTML = htmlProducto;
                contenedorProductos.appendChild(div);

                iProduct++;

            });
        })
        .catch(error => alert('Error al cargar los productos:', error));
}

function agregarAlCarrito(idProducto) {
    // Agrega el producto al carrito en Local Storage
    console.log('Producto agregado:', idProducto);
    // Implementa la lógica de agregar al carrito aquí
}

function enviarWhatsApp() {
    // Recupera los datos del carrito del Local Storage
    // Genera el mensaje para WhatsApp
    const mensaje = 'Hola, quiero realizar un pedido...'; // Modifica con los detalles del pedido
    const urlWhatsApp = `https://wa.me/1234567890?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}
