

\---



\## 3. Crear `practica-3/despues.md`



```md

\# Después



```js

class ValidadorStock {

&#x20; validar(productos) {

&#x20;   return productos.every(p => p.stock > 0);

&#x20; }

}



class CalculadoraPedido {

&#x20; calcularTotal(productos) {

&#x20;   let subtotal = productos.reduce(

&#x20;     (acc, p) => acc + p.precio \* p.cantidad,

&#x20;     0

&#x20;   );



&#x20;   return subtotal \* 1.15;

&#x20; }

}



class RepositorioPedidos {

&#x20; guardar(cliente, total) {

&#x20;   console.log("Pedido guardado");

&#x20; }

}



class ServicioWhatsApp {

&#x20; enviar(cliente, total) {

&#x20;   console.log("WhatsApp enviado");

&#x20; }

}



class Pedido {

&#x20; constructor(repositorio, notificador) {

&#x20;   this.repositorio = repositorio;

&#x20;   this.notificador = notificador;

&#x20; }



&#x20; procesar(cliente, productos) {

&#x20;   const validador = new ValidadorStock();

&#x20;   const calculadora = new CalculadoraPedido();



&#x20;   if (!validador.validar(productos)) {

&#x20;     return;

&#x20;   }



&#x20;   const total = calculadora.calcularTotal(productos);



&#x20;   this.repositorio.guardar(cliente, total);

&#x20;   this.notificador.enviar(cliente, total);

&#x20; }

}

