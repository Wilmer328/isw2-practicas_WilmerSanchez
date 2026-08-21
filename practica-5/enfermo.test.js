const { procesarCompra } = require("./enfermo");

function test(nombre, fn) {
  try {
    fn();
    console.log(` ${nombre}`);
  } catch (error) {
    console.log(` ${nombre}`);
    console.log(error.message);
  }
}

function assertEqual(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`Esperado: ${esperado}, obtenido: ${actual}`);
  }
}

test("procesa una compra correctamente", () => {
  const productos = [
    { nombre: "Arroz", precio: 50, cantidad: 2 },
    { nombre: "Frijoles", precio: 30, cantidad: 1 }
  ];

  const resultado = procesarCompra("Wilmer", productos, 200);

  assertEqual(resultado.total, 130);
  assertEqual(resultado.cantidad, 3);
  assertEqual(resultado.cambio, 70);
});

test("aplica descuento cuando la compra supera 1000", () => {
  const productos = [
    { nombre: "Producto caro", precio: 1200, cantidad: 1 }
  ];

  const resultado = procesarCompra("Wilmer", productos, 1200);

  assertEqual(resultado.total, 1140);
  assertEqual(resultado.cambio, 60);
});

test("rechaza una compra vacía", () => {
  let huboError = false;

  try {
    procesarCompra("Wilmer", [], 100);
  } catch (error) {
    huboError = true;
  }

  assertEqual(huboError, true);
});

test("rechaza un pago insuficiente", () => {
  const productos = [
    { nombre: "Arroz", precio: 50, cantidad: 2 }
  ];

  let huboError = false;

  try {
    procesarCompra("Wilmer", productos, 50);
  } catch (error) {
    huboError = true;
  }

  assertEqual(huboError, true);
});

test("rechaza precios negativos", () => {
  const productos = [
    { nombre: "Producto inválido", precio: -10, cantidad: 1 }
  ];

  let huboError = false;

  try {
    procesarCompra("Wilmer", productos, 100);
  } catch (error) {
    huboError = true;
  }

  assertEqual(huboError, true);
});