document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    document.getElementById('finalizarCompra').addEventListener('click', enviarWhatsApp);
});

function cargarProductos() {
    fetch('https://raw.githubusercontent.com/diegobaesv/maanamalshop/main/data.json')
        .then(response => response.json())
        .then(data => {
            const contenedorProductos = document.getElementById('productos');
            data.productos.forEach(producto => {
                const div = document.createElement('div');
                div.classList.add('col-md-4', 'mb-3');
                div.innerHTML = `
                        <div class="card" style="border:none;">
                        <img src="${producto.imagenes[0]}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body" style="padding:3px;">
                            <h5 class="card-title" style="font-size: 1rem; margin:0px;">${producto.marca}</h5>
                            <p class="card-text">${producto.nombre}</p>
                            <p class="card-text">Precio: $${producto.precio}</p>
                        </div>
                    </div>

                `;
                contenedorProductos.appendChild(div);


                /**
                 * 
                 * 
                    div class="card">
                        <img src="${producto.imagenes[0]}" class="card-img-top"  alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">
                                    <span class="text-muted original-price">${producto.precio}</span>
                                    <span class="price">${producto.precio}</span>
                                </p>
                                <div class="discount-tag">35% off</div>
                                <div class="stock-info">21 left</div>
                                <!--a href="#" class="btn btn-primary">ADD TO CART</a-->
                                <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                 */
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
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
