document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    document.getElementById('finalizarCompra').addEventListener('click', enviarWhatsApp);
});

function cargarProductos() {
    // Aquí debes cargar los productos desde tu JSON
    // Ejemplo:
    const productos = [
        { id: 1, nombre: 'Producto 1', descripcion: 'Descripción 1', precio: 100 },
        // Más productos...
    ];

    const contenedorProductos = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        contenedorProductos.appendChild(div);
    });
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
