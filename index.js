
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
                console.log( "no es un código válido");
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
            




