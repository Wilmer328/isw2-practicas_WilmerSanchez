\# Antes



```js

class Pedido {

&#x20; procesarPedido(cliente, productos) {



&#x20;   let stockDisponible = true;



&#x20;   for (let producto of productos) {

&#x20;     if (producto.stock <= 0) {

&#x20;       stockDisponible = false;

&#x20;     }

&#x20;   }



&#x20;   if (!stockDisponible) {

&#x20;     console.log("No hay stock suficiente");

&#x20;     return;

&#x20;   }



&#x20;   let subtotal = 0;



&#x20;   for (let producto of productos) {

&#x20;     subtotal += producto.precio \* producto.cantidad;

&#x20;   }



&#x20;   let isv = subtotal \* 0.15;

&#x20;   let total = subtotal + isv;



&#x20;   console.log("Subtotal: " + subtotal);

&#x20;   console.log("ISV: " + isv);

&#x20;   console.log("Total: " + total);



&#x20;   let conexion = "BaseDeDatos";

&#x20;   console.log("Conectando a " + conexion);



&#x20;   console.log("Guardando pedido...");

&#x20;   console.log("Cliente: " + cliente);

&#x20;   console.log("Total: " + total);



&#x20;   console.log("Imprimiendo ticket...");

&#x20;   console.log("----- TICKET -----");

&#x20;   console.log(cliente);

&#x20;   console.log(total);

&#x20;   console.log("------------------");



&#x20;   console.log("Enviando WhatsApp...");

&#x20;   console.log(

&#x20;     "Hola " +

&#x20;     cliente +

&#x20;     ", tu pedido fue registrado por L." +

&#x20;     total

&#x20;   );



&#x20;   console.log("Proceso completado");

&#x20; }

}

