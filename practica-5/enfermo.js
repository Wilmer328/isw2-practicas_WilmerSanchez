function procesarCompra(cliente, productos, pago) {
  console.log("Procesando compra de " + cliente);

  let totalCompra = 0;
  let cantidadTotalProductos = 0;

  for (
    let indiceProducto = 0;
    indiceProducto < productos.length;
    indiceProducto++
  ) {
    let productoActual = productos[indiceProducto];

    if (productoActual.precio < 0) {
      throw new Error("Precio inválido");
    }

    totalCompra =
      totalCompra + productoActual.precio * productoActual.cantidad;

    cantidadTotalProductos =
      cantidadTotalProductos + productoActual.cantidad;

    console.log(
      "Producto: " +
        productoActual.nombre +
        " cantidad: " +
        productoActual.cantidad
    );
  }

  if (cantidadTotalProductos === 0) {
    throw new Error("La compra está vacía");
  }

  if (totalCompra > 1000) {
    totalCompra = totalCompra * 0.95;
  }

  if (pago < totalCompra) {
    throw new Error("Pago insuficiente");
  }

  let cambio = pago - totalCompra;

  console.log("Cliente: " + cliente);
  console.log("Subtotal: " + totalCompra);
  console.log("Cantidad de productos: " + cantidadTotalProductos);
  console.log("Pago recibido: " + pago);
  console.log("Cambio: " + cambio);
  console.log("Compra procesada correctamente");

  return {
    cliente: cliente,
    total: totalCompra,
    cantidad: cantidadTotalProductos,
    cambio: cambio
  };
}

module.exports = { procesarCompra };