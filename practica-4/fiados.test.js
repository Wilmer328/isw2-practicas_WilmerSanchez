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

test("no cobra mora cuando hay 0 días vencidos", () => {
  // Arrange
  const monto = 1000;
  const diasVencidos = 0;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 0);
});

test("no cobra mora cuando el monto es 0", () => {
  // Arrange
  const monto = 0;
  const diasVencidos = 5;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(resultado, 0);
});

test("rechaza días vencidos que no sean un número", () => {
  // Arrange
  const monto = 1000;
  const diasVencidos = "5";

  // Act + Assert
  let huboError = false;

  try {
    calcularMora(monto, diasVencidos);
  } catch (error) {
    huboError = true;
  }

  assertEqual(huboError, true);
});

test("calcula correctamente la mora para un monto decimal", () => {
  // Arrange
  const monto = 500.50;
  const diasVencidos = 2;

  // Act
  const resultado = calcularMora(monto, diasVencidos);

  // Assert
  assertEqual(Math.round(resultado * 1000) / 1000, 25.025);
});