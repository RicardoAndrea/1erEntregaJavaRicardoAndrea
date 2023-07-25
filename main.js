let acumulador = 0;
let CantidadPedidos = parseInt(prompt ("Cuantas variedades de empanadas eligirá"));
for (let pedido = 1; pedido <= CantidadPedidos; pedido++) {
    let menu = prompt("variedad: jyq, pollo, carne, verdura").toLowerCase();
    let numeroUno = parseInt(prompt("Ingrese cantidad"));
    let resultado = calculadora(numeroUno, menu);
    acumulador += resultado;
    function calculadora(num1, menu) {
        let pjyq = 100;
        let ppollo = 120;
        let pcarne = 150;
        let pverdura = 200;
   
        switch (menu) {
             case "jyq":
               return num1 * pjyq;
               break;
        
             case "pollo":
               return num1 * ppollo;
               break;
        
             case "carne":
               return num1 * pcarne;
               break;
        
             case "verdura":
               return num1 * pverdura;
               break;
        
             default:
               return "Esa variedad no la trabajamos";
               break;
           }
         }
        
}
alert (`Total a pagar es : ${acumulador}`);