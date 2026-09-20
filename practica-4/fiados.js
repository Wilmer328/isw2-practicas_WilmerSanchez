function calcularMora(monto, diasVencidos, abono = 0) {
  if (monto < 0) {
    throw new Error("El monto no puede ser negativo");
  }

  if (typeof diasVencidos !== "number") {
    throw new Error("Los días vencidos deben ser un número");
  }

  if (typeof abono !== "number") {
    throw new Error("El abono debe ser un número");
  }

  if (abono < 0) {
    throw new Error("El abono no puede ser negativo");
  }

  if (abono > monto) {
    throw new Error("El abono no puede ser mayor que el monto de la deuda");
  }

  const saldo = monto - abono;

  return diasVencidos > 0 ? saldo * 0.05 : 0;
}

module.exports = { calcularMora };