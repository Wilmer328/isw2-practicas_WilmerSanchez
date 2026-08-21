# Diagnóstico de la Práctica 5

## Clínica de código

El archivo `enfermo.js` contenía varios problemas de diseño y mantenibilidad. Se aplicaron refactorizaciones pequeñas manteniendo los tests verdes.

| Problema detectado | Principio | Refactor aplicado |
|---|---|---|
| Nombres poco claros | M1 - Nombres significativos | Se mejoraron los nombres de variables |
| Número mágico `0.05` | M1 - Números mágicos | Se creó `DESCUENTO_COMPRA_GRANDE` |
| Cálculo del total mezclado con otras responsabilidades | M3 - SRP | Se extrajo `calcularTotal()` |
| Validación mezclada con el procesamiento | M3 - SRP | Se extrajo `validarCompra()` |
| Función demasiado responsable | M3 - SRP | Se separaron validación, cálculo y descuento |
| Condición de descuento poco expresiva | M1 - Claridad | Se creó `LIMITE_DESCUENTO` y `aplicarDescuento()` |

## Resultado

Los tests de comportamiento se ejecutaron antes y durante el refactor.

La suite permitió comprobar que el comportamiento existente se mantuvo mientras se mejoraba la estructura interna del código.

## Commits realizados

1. `test(practica-5): crear red de comportamiento actual`
2. `refactor(practica-5): mejorar nombres de variables`
3. `refactor(practica-5): extraer constante de descuento`
4. `refactor(practica-5): extraer calculo del total`
5. `refactor(practica-5): separar validacion de compra`

## Conclusión

El código final en `sano.js` presenta responsabilidades más separadas, nombres más claros y ausencia de números mágicos importantes.