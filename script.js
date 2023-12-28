document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    document.getElementById('whatsappButton').addEventListener('click', enviarWhatsApp);
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

                    let claseimg = producto.disponible ? 'carousel-item' : 'carousel-item color-gris';

                    if(producto.imagenes[0] == img){
                        claseimg += ' active';
                    }

                    htmlProducto += `<div class="${claseimg}">
                                            <img class="d-block w-100 card-img-top" src="${img}"  onClick="agregarAlCarrito(${iProduct})">
                                    </div>`;
                   
                });

               
                //controles de carrousel
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

                if(!producto.disponible){
                    htmlProducto += `<div class="overlay-agotado">AGOTADO</div>`;
                } else{
                    htmlProducto += `<div class="overlay-carrito"><img src="https://static-00.iconduck.com/assets.00/checkbox-icon-2048x2048-o0na05za.png"></div>`;
                }
                
              
                //htmlProducto += `<img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">`;

                htmlProducto += `<div class="card-body">
                                    <h5 class="card-title">${producto.marca}</h5>
                                    <p class="producto-nombre">${producto.nombre}</p>`;
                
                htmlProducto += `<p class="producto-descripcion">${producto.descripcion}</p>`;
                

                
                htmlProducto += `<div class="precios">`;
                    htmlProducto += `<p class="producto-precio-oferta">S/ ${producto.precioOferta}</p>`;

                if(producto.precio != producto.precioOferta) {
                        htmlProducto +=`<p class="producto-precio">S/ ${producto.precio}</p>`;
                }

                htmlProducto += `</div>`;

                htmlProducto += `</div>
                                </div>`;


                div.innerHTML = htmlProducto;
                contenedorProductos.appendChild(div);

                iProduct++;

            });
        })
        .catch(error => alert('Error al cargar los productos:', error));
}

function agregarAlCarrito(producto) {
    // Agrega el producto al carrito en Local Storage
    console.log('Producto agregado:', producto);
    // Implementa la lógica de agregar al carrito aquí
}

function enviarWhatsApp() {
    let numeroRemitente = 51936019222;
    const mensaje = 'Hola, quiero realizar un pedido...'; // Modifica con los detalles del pedido
    const urlWhatsApp = `https://wa.me/${numeroRemitente}?text=${encodeURIComponent(mensaje)}`;
    window.open(urlWhatsApp, '_blank');
}
