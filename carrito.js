let carrito = [];

function agregarProducto(precio) {
  carrito.push(precio);
  mostrarCarrito();
}

function mostrarCarrito() {
  const carritoElemento = document.getElementById("carrito");

  if (carrito.length === 0) {
    carritoElemento.innerHTML = "<p>No hay productos en el carrito</p>";
    return;
  }

  let carritoHTML = "<ul>";
  let total = 0;

  for (let i = 0; i < carrito.length; i++) {
    carritoHTML += "<li>Producto " + (i + 1) + ": $" + carrito[i] + "</li>";
    total += carrito[i];
  }

  carritoHTML += "</ul>";
  carritoHTML += "<p>Total: $" + total + "</p>";

  carritoElemento.innerHTML = carritoHTML;
}

function finalizarCompra() {
  const formulario = document.getElementById("formulario");
  formulario.style.display = "block";
}

function mostrarProductos() {
  const carritoElemento = document.getElementById("carrito");

  if (carrito.length === 0) {
    carritoElemento.innerHTML = "<p>No hay productos en el carrito</p>";
    return;
  }

  let carritoHTML = "<ul>";

  for (let i = 0; i < carrito.length; i++) {
    carritoHTML += "<li>Producto " + (i + 1) + ": $" + carrito[i] + " <button onclick=\"eliminarProducto(" + i + ")\">Eliminar</button></li>";
  }

  carritoHTML += "</ul>";

  carritoElemento.innerHTML = carritoHTML;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  mostrarProductos();
}