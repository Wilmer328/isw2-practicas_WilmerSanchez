const DESCUENTO_COMPRA_GRANDE = 0.05;
const LIMITE_DESCUENTO = 1000;

function validarProductos(productos) {
  if (productos.length === 0) {
    throw new Error("La compra está vacía");
  }

  for (const producto of productos) {
    if (producto.precio < 0) {
      throw new Error("Precio inválido");
    }
  }
}

function calcularCantidadProductos(productos) {
  let cantidad = 0;

  for (const producto of productos) {
    cantidad += producto.cantidad;
  }

  return cantidad;
}

function calcularSubtotal(productos) {
  let subtotal = 0;

  for (const producto of productos) {
    subtotal += producto.precio * producto.cantidad;
  }

  return subtotal;
}

function aplicarDescuento(subtotal) {
  if (subtotal <= LIMITE_DESCUENTO) {
    return subtotal;
  }

  return subtotal * (1 - DESCUENTO_COMPRA_GRANDE);
}

function procesarCompra(cliente, productos, pago) {
  validarProductos(productos);

  const cantidadProductos = calcularCantidadProductos(productos);
  const subtotal = calcularSubtotal(productos);
  const total = aplicarDescuento(subtotal);

  if (pago < total) {
    throw new Error("Pago insuficiente");
  }

  const cambio = pago - total;

  return {
    cliente,
    total,
    cantidad: cantidadProductos,
    cambio
  };
}

module.exports = {
  procesarCompra
};