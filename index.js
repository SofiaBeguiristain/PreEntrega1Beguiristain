
const EDAD = 18;

const edadIngresada = prompt("Ingresa su edad: ");

if (edadIngresada >=EDAD){
alert("Puede ingresar!")
}


else{
alert("Es menor a " + EDAD + " debe ser mayor de edad")
} 


let ingreseSuCodigo = prompt("Ingrese su código de descuento");


switch(ingreseSuCodigo) {
    case "juliosale" :
        console.log("Su código de descuento sera aplicado") 
        break;
        case "juniosale":
            console.log(ingreseSuCodigo + " este codigo esta expirado");
            break;
            default:
                console.log( "no es un código de descuento válido");
                break;
            }




            document.addEventListener('DOMContentLoaded', () => {
                
                const preciosBebidas = document.querySelectorAll('.info-product .price');
                let total = 0;
            
            
                for (let i = 0; i < preciosBebidas.length; i++) {
                
                    let precioTexto = preciosBebidas[i].textContent.trim();
                    let precioNumero = parseFloat(precioTexto.replace('$', ''));
            
            
                    total += precioNumero;
                }
            
            
                console.log(`El total de todos los productos es: $${total}`);
            });
            





const IVA = 1.21;
function Producto (nombre, precio, stock) {
this.nombre = nombre;
this.precio = parseFloat(precio);
this.stock = (stock);

this.precioFinal = function () {
this.precio = precio * IVA;        
    } 
}

const producto1 = new Producto("Fernet", 550, "70");
console.log(producto1);
producto1.precioFinal();

const producto2 = new Producto("Vodka", 700, "25");
console.log(producto2);
producto2.precioFinal();


const producto3 = new Producto("Martini", 800, "48");
console.log(producto3);
producto3.precioFinal();

const producto4 = new Producto("Grapamiel", 550, "80");
console.log(producto4);
producto3.precioFinal();


const producto5 = new Producto("Jagger", 1200, "12");
console.log(producto5);
producto3.precioFinal();





const arrayDeObjetos = [producto1, producto2,];
console.log(arrayDeObjetos);
arrayDeObjetos.push({nombre: "combo", precio: 2200});


const arrayDeBebidas = [producto1, producto2, producto3, producto4, producto5];


for (const bebidas of arrayDeBebidas){
    console.log(bebidas.nombre);
}



const arrayDeStrings = ["Hola", "a", "todos"];
console.log(arrayDeStrings);
console.log(arrayDeStrings.join("  "))







// luego veré como aplicarlo a mi página web :/
const preciosBebidas = [2, 8, 5, 2, 4];

preciosBebidas.forEach((elemento) => {
    console.log(elemento * elemento);
})



//fecha y hora 15/12/2001
console.log(new Date(2001, 11, 15, 15, 35, 0));


