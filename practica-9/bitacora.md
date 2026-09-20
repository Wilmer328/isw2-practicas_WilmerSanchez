# Bitácora — Práctica 9

## 1. Feature seleccionada

La feature seleccionada fue agregar **abonos parciales al cálculo de mora** de la calculadora de fiados de la Práctica 4.

Antes de esta modificación, la función `calcularMora` calculaba el 5% de mora directamente sobre el monto completo cuando existían días vencidos.

La nueva regla establece que un abono parcial debe reducir primero el saldo pendiente y la mora debe calcularse sobre ese saldo.

Ejemplo:

- Monto: L 1,000
- Abono: L 400
- Saldo pendiente: L 600
- Mora: L 30

---

## 2. Tests definidos antes de la implementación

Antes de utilizar la IA se agregaron cuatro tests nuevos a:

`practica-4/fiados.test.js`

Los tests definieron los siguientes comportamientos:

1. Un abono parcial debe reducir el saldo antes de calcular la mora.
2. Si el abono cubre toda la deuda, la mora debe ser 0.
3. Un abono mayor que la deuda debe ser rechazado.
4. Un abono negativo debe ser rechazado.

Estos tests fueron guardados en un commit independiente antes de implementar la feature.

Commit:

`fc21f68 tests(practica-9): definir comportamiento de abonos parciales`

Esto permite comprobar mediante el historial de Git que los tests fueron escritos antes de la implementación.

---

## 3. Prompt utilizado para la primera implementación

Se utilizó el siguiente prompt:

> Estoy trabajando en la Práctica 9 de Software 2.
>
> Tengo una función JavaScript llamada calcularMora(monto, diasVencidos) que actualmente calcula una mora del 5% sobre el monto cuando existen días vencidos.
>
> Quiero implementar una nueva feature: permitir abonos parciales que reduzcan el saldo antes de calcular la mora.
>
> Ya escribí primero los tests que definen el comportamiento esperado. NO cambies los tests y NO elimines ninguno de los tests existentes.
>
> Los nuevos tests esperan que:
>
> 1. calcularMora(1000, 5, 400) devuelva 30, porque el saldo pendiente es 600 y la mora es 5%.
> 2. calcularMora(1000, 5, 1000) devuelva 0 porque la deuda quedó completamente pagada.
> 3. Un abono mayor que el monto de la deuda debe generar un error.
> 4. Un abono negativo debe generar un error.
>
> Implementa únicamente lo necesario en practica-4/fiados.js para que todos los tests existentes y los nuevos tests pasen.
>
> Mantén el código simple y compatible con la estructura actual del proyecto.
>
> Antes de modificar el código, explica brevemente qué cambios propones y por qué.

---

## 4. Primera propuesta de la IA

La primera propuesta agregó el parámetro opcional `abono`, manteniendo la compatibilidad con las llamadas anteriores mediante `abono = 0`.

También agregó validaciones para:

- abonos que no sean números;
- abonos negativos;
- abonos mayores que el monto.

Finalmente calculó:

`saldo = monto - abono`

y aplicó el 5% sobre ese saldo cuando existían días vencidos.

### Resultado

La implementación hizo pasar los 10 tests:

- 6 tests originales.
- 4 tests nuevos.

---

## 5. Prompt utilizado para solicitar una alternativa

Como la primera implementación funcionó correctamente, se solicitó una segunda alternativa:

> La primera implementación funciona y todos los tests pasan.
>
> Ahora quiero que propongas una SEGUNDA alternativa de implementación para la misma feature de abonos parciales.
>
> Condiciones:
> - No cambies ningún test.
> - Mantén la compatibilidad con calcularMora(monto, diasVencidos).
> - Deben seguir pasando los 10 tests actuales.
> - Debe mantenerse la regla de calcular el 5% sobre el saldo después del abono.
> - Debe validar abonos negativos y abonos mayores que la deuda.
> - Busca una alternativa estructuralmente diferente a la primera propuesta, pero sin sobreingeniería.
> - NO modifiques archivos todavía.
> - Muéstrame solamente el código propuesto y explica brevemente sus ventajas y desventajas frente a la primera implementación.

---

## 6. Segunda alternativa propuesta

La segunda alternativa combinó la validación del tipo y valor del abono y utilizó una condición de salida temprana cuando no había mora que calcular.

También calculó el saldo pendiente antes de aplicar la mora.

La alternativa era funcionalmente equivalente a la primera.

---

## 7. Análisis crítico de las propuestas

### Observación 1 — Compatibilidad y cambios mínimos

**Principio: compatibilidad hacia atrás / cambios mínimos.**

Se aceptó de la primera propuesta el uso de:

`abono = 0`

Esto permite que las llamadas existentes:

`calcularMora(monto, diasVencidos)`

continúen funcionando sin modificar los seis tests originales.

Se rechazó cualquier alternativa que obligara a modificar los tests existentes, porque la nueva feature debía extender el comportamiento sin romper el contrato anterior.

---

### Observación 2 — Simplicidad

**Principio: KISS (Keep It Simple, Stupid).**

La primera propuesta mantiene la solución dentro de la misma función y solamente agrega las validaciones necesarias y el cálculo del saldo.

No se agregaron clases, funciones auxiliares ni estructuras adicionales.

Se consideró que la segunda alternativa también era sencilla, pero no aportaba una ventaja suficiente para justificar cambiar la primera implementación.

---

### Observación 3 — Validación de entradas

**Principio: validación explícita de entradas.**

Se aceptó la validación explícita del abono antes de realizar el cálculo.

La implementación verifica que el abono sea numérico, no sea negativo y no supere el monto de la deuda.

Esto evita producir un saldo inválido y hace explícitas las reglas del dominio definidas por los tests.

---

### Observación 4 — YAGNI / evitar sobreingeniería

**Principio: YAGNI (You Aren't Gonna Need It).**

Se rechazó la posibilidad de introducir una estructura más compleja para manejar los abonos.

La feature requerida solamente necesita un valor de abono y un cálculo de saldo. Crear una abstracción adicional habría agregado complejidad sin que los tests o los requisitos actuales lo necesitaran.

---

## 8. Decisión final

Se conservó la primera implementación propuesta por la IA porque:

- mantiene la compatibilidad con el comportamiento existente;
- cumple los cuatro nuevos contratos definidos mediante tests;
- mantiene el código simple;
- incorpora las validaciones necesarias;
- no requiere modificaciones adicionales en los tests.

La implementación quedó registrada en:

`practica-4/fiados.js`

Commit:

`df8c021 feat(practica-9): implementar abonos parciales en cálculo de mora`

---

## 9. Resultado de las pruebas

Se ejecutó:

```text
node practica-4\fiados.test.js