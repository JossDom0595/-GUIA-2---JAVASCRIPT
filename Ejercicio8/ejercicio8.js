/* 8 Crear una Fuction para calcular el descuento en viajes turísticos 
tomando en cuenta lo siguiente: Si el usuario introduce como origen la 
ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, 
si el destino es Panchimalco el descuento será del 10% y si el destino es 
Puerto el Triunfo el descuento será del 15%.*/

let precioViaje = alert("Escoja su viaje turistico\nEl precio para la ciudad de palma a: \n-> costa del sol es de: $100\n-> panchimalco es de: $120\n-> puerto el trinunfo es de: $150");
var precioCosta = 100;
var precioPanchimalco = 120;
var precioPuerto = 150;
var origen = prompt("Introduzca la ciuidad de destino");
var destiono = prompt("Introduzca el destino");

function calculoDescuento(){

    if(origen=="ciudad de palma" && destiono=="costa del sol"){

        let descuento = precioCosta * 0.05;
        let precioDescuento = precioCosta - descuento;
        document.write("******* Datos Turisticos *******<br><br>Origen: Ciudad de Palma<br>Destino: La Costa del Sol<br>Precio: " + precioCosta + "<br>Descuento: " + descuento + "<br>Precio con descuento: " + precioDescuento);
    
    }else if(origen=="ciudad de palma" && destiono=="panchimalco"){
        
        let descuento = precioPanchimalco * 0.15;
        let precioDescuento = precioPanchimalco - descuento;
        document.write("******* Datos Turisticos *******<br><br>Origen: Ciudad de Palma<br>Destino: Panchimalco<br>Precio: " + precioPanchimalco + "<br>Descuento: " + descuento + "<br>Precio con descuento: " + precioDescuento);
    
    }else if(origen=="ciudad de palma" && destiono=="puerto el triunfo"){
        
        let descuento = precioPuerto * 0.10;
        let precioDescuento = precioPuerto - descuento;
        document.write("******* Datos Turisticos *******<br><br>Origen: Ciudad de Palma<br>Destino: Puerto el Triunfo<br>Precio: " + precioPuerto + "<br>Descuento: " + descuento + "<br>Precio con descuento: " + precioDescuento);
    }
}
