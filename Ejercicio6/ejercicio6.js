/* 6 Realizar una fuction para una tienda de coches en donde se deberá calcular: 
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. 
Si el coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD 
ESCAPE el descuento será del 20%. Deberá de usar un parámetro que permita
identificar el tipo de coche y la fuction deberá demostrar el coche seleccionado*/

let coche = "FORD ESCAPE";
let precio = 40000;

function idenficaCoche(coch){

    if(coch == "FORD FIESTA"){

        return descuento = 0.05;
        
    }else if(coch == "FORD FOCUS"){
    
        return descuento = 0.10;
    
    }else if(coch == "FORD ESCAPE"){
    
        return descuento = 0.20;
    
    }
}

function descuentoCoche(prec,des){

    descuentoCar = prec * des;
    return descuentoCar;
}

function precioNuevo(prec){

    precioConDescuento = prec - descuentoCoche(precio,idenficaCoche(coche));
    return precioConDescuento;
}

document.write("*********** Datos del Coche ***********" + "<br><br>Modelo del Coche: "
+ coche + "<br>Precio: " + precio + "<br>Descuento: " + descuentoCoche(precio,idenficaCoche(coche))
+"<br>Precio con Descuento: " + precioNuevo(precio))