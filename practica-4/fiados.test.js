const { calcularMora } = require("./fiados");

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

test("rechaza un monto negativo", () => {
  // Arrange
  const monto = -100;
  const diasVencidos = 5;

  // Act + Assert
  let huboError = false;

  try {
    calcularMora(monto, diasVencidos);
  } catch (error) {
    huboError = true;
  }

  assertEqual(huboError, true);
});

test("calcula 5% de mora cuando hay días vencidos", () => {
  // Arrange
  const monto = 1000;
  const diasVencidos = 5;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 50);
});