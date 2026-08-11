

\---



\## 4. Crear `practica-3/notas.md`



```md

\# Notas



\## Principio 1 - Responsabilidad Única (SRP)



Cada clase tiene una sola responsabilidad.

ValidadorStock valida inventario.

CalculadoraPedido calcula montos.

RepositorioPedidos guarda datos.

ServicioWhatsApp envía notificaciones.



\## Principio 9 - Dependencias



Pedido ya no crea directamente servicios externos.

Las dependencias llegan mediante el constructor.

Esto reduce el acoplamiento.

Facilita pruebas unitarias.

Permite cambiar implementaciones fácilmente.

Nota adicional: la inyección de dependencias facilita las pruebas unitarias.

