class Usuario {
    constructor(info) {
        this.usuario = info.usuario;
        this.contraseña = info.contraseña;
        this.rut = info.rut;
        this.correo = info.correo;
    };
};
let listaUsuarios = [];
function crearUsuario() {
    let usuario = prompt("Ingrese su nombre: ");
    let contraseña = prompt("Ingrese su contraseña (sin números ni mayúsculas): ");
    let rut = prompt("Ingresa tu rut: ");
    let correo = prompt("Ingrese su correo electrónico: ");
    let nuevoUsuario = new Usuario(usuario, contraseña, rut, correo);
    listaUsuarios.push(nuevoUsuario);
    console.log(listaUsuarios);
    alert(`Bienvenido ${usuario} a nuestra tienda online Mundo Lillos`);
}
crearUsuario();

function cotizarLillos() {
        const productos = [
            { id: 1, nombre: "Lillo Celulosa naranja x10", precio: "$442" },
            { id: 2, nombre: "Lillo Celulosa naranja x15", precio: "$499" },
            { id: 3, nombre: "Lillo Celulosa naranja x21", precio: "$700" },
            { id: 4, nombre: "Lillo Libella x10", precio: "$550" },
            { id: 5, nombre: "Lillo Libella x15", precio: "$610" },
            { id: 6, nombre: "Lillo Libella x21", precio: "$810" },
            { id: 7, nombre: "Lillo sabor chocolate x10", precio: "$670" },
            { id: 8, nombre: "Lillo sabor chocolate x15", precio: "$730" },
            { id: 9, nombre: "Lillo sabor chocolate x21", precio: "$930" },
        ];
        productos.forEach(lillos => {
            alert(`${lillos.nombre} ${lillos.precio}`);
        });
};
        let respuesta = parseInt(prompt("Cotiza el valor de tu compra. Ingrese el nombre del lillo que desea comprar. \n1. Lillo Celulosa naranja x10 \n2. Lillo Celulosa naranja x15 \n3. Lillo Celulosa naranja x21  \n4. Lillo Libella x10 \n5. Lillo Libella x15 \n6. Lillo Libella x21  \n7. Lillo sabor chocolate x10 \n8. Lillo sabor chocolate x15 \n9. Lillo sabor chocolate x21 \n Ingresa FIN para finalizar el cotizador"));
        let cantidadLillos= parseInt(prompt("¿Cuántas cajas deseas comprar? \n A partir de 3 unidades se otorga un 20% de descuento."));
    
        let idLillos = productos.filter(
            item => item.id === respuesta
        );
    
        idLillos.forEach(item => {
            if (cantidadLillos <= 2) {
                precioFinal = cantidadLillos * parseInt(item.precio);
            } 
    else if (cantidadLillos >= 3) {
                precioFinal = cantidadLillos * parseInt(item.precio * 0.8);
            };
    
            let mensaje =  `El costo final de su compra es de ${precioFinal} `;
            alert(mensaje)
        });
    
    
    
