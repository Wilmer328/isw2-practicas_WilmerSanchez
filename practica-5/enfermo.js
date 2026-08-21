function procesarCompra(cliente, productos, pago) {
  console.log("Procesando compra de " + cliente);

  let total = 0;
  let cantidadProductos = 0;

  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];

    if (producto.precio < 0) {
      throw new Error("Precio inválido");
    }

    total = total + producto.precio * producto.cantidad;
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

  if (total > 1000) {
    total = total * 0.95;
  }

  if (pago < total) {
    throw new Error("Pago insuficiente");
  }

  let cambio = pago - total;

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