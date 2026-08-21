const DESCUENTO_COMPRA_GRANDE = 0.05;

function calcularTotal(productos) {
  let totalProductos = 0;

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    if (producto.precio < 0) {
      throw new Error("Precio inválido");
    }

    totalProductos =
      totalProductos + producto.precio * producto.cantidad;
  }

  return totalProductos;
}

function procesarCompra(cliente, productos, pago) {
  console.log("Procesando compra de " + cliente);

  let cantidadProductos = 0;

  for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];

    if (producto.precio < 0) {
      throw new Error("Precio inválido");
    }

    cantidadProductos = cantidadProductos + producto.cantidad;

    console.log(
      "Producto: " +
        producto.nombre +
        " cantidad: " +
        producto.cantidad
    );
  }

  if (cantidadProductos === 0) {
    throw new Error("La compra está vacía");
  }

  let total = calcularTotal(productos);

  if (total > 1000) {
    total = total * (1 - DESCUENTO_COMPRA_GRANDE);
  }

  if (pago < total) {
    throw new Error("Pago insuficiente");
  }

  const cambio = pago - total;

  console.log("Cliente: " + cliente);
  console.log("Subtotal: " + total);
  console.log("Cantidad de productos: " + cantidadProductos);
  console.log("Pago recibido: " + pago);
  console.log("Cambio: " + cambio);
  console.log("Compra procesada correctamente");

  return {
    cliente: cliente,
    total: total,
    cantidad: cantidadProductos,
    cambio: cambio
  };
}

module.exports = { procesarCompra };