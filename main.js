

    function bienvenida(){
    let nombre = prompt ("Ingrese su nombre");
    let mensaje = `Bienvenido  ${nombre} a nuestra tienda online de lillos`;
    alert (mensaje);}
    bienvenida ();

    let respuesta = prompt("Tasa el valor de nuestros lillos para tabaco, puedes encontrar: celulosa naranja, Libella Pure y sabor chocolate. Ingresa OK para finalizar.");
    const precioCelulosa = 442;
    const precioLibella = 550;
    const precioChocolate = 670;

const descuento20 = x => x * 0.8;

while(respuesta != "OK"){
    switch (respuesta.toLowerCase()) {
        case "celulosa naranja":
alert (`El lillo ${respuesta} tiene un costo de ${precioCelulosa} ARS`);
let cantidadCelulosa =  parseInt(prompt("¿Cuántas unidades de papel celulosa naranja quieres? A partir de 3 unidades se otorga un 20% de descuento."));
if (cantidadCelulosa <=2) {
    alert(`El valor de los ${cantidadCelulosa} papeles de celulosa naranja es de $ ${(cantidadCelulosa*precioCelulosa)}ARS`);
} else if (cantidadCelulosa >=3){
    alert (`El valor de los ${cantidadCelulosa} papeles de celulosa naranja es de $ ${cantidadCelulosa*(descuento20(precioCelulosa))} ARS`);
}
break;


case "libella pure":
    alert (`El lillo ${respuesta} tiene un costo de ${precioLibella} ARS`);
    let cantidadLibella = parseInt(prompt("¿Cuántas unidades de papel Libella Pure quieres? A partir de 3 unidades se otorga un 20% de descuento."));
    if (cantidadLibella <=2){
        alert (`El valor de los ${cantidadLibella} papeles de Libella Pure es de $ ${(cantidadLibella*precioLibella)} ARS`);
    } else if (cantidadLibella>=3){
        alert (`El valor de los ${cantidadLibella} papeles de Libella Pure es de $ ${cantidadLibella*(descuento20(precioLibella))} ARS`);
} 
break;
case "sabor chocolate":
    alert (`El lillo ${respuesta} tiene un costo de ${precioChocolate} ARS`);
    let cantidadChocolate = parseInt(prompt("¿Cuántas unidades de papel sabor chocolate quieres? A partir de 3 unidades se otorga un 20% de descuento."));
    if (cantidadChocolate <=2){
        alert (`El valor de los ${cantidadChocolate} papeles sabor chocolate es de $ ${(cantidadChocolate*precioChocolate)} ARS`); 
    } else if (cantidadChocolate >= 3) {
        alert (`El valor de los ${cantidadChocolate} papeles sabor chocolate es de $ ${cantidadChocolate*(descuento20(precioChocolate))} ARS`);

    } break;
    default:
        alert (`El ${respuesta} no se encuentra disponible`);
        break;
}
respuesta = prompt("Tasa el valor de nuestros lillos para tabaco, puedes encontrar: celulosa naranja, Libella Pure y sabor chocolate. Ingresa OK para finalizar."); }
