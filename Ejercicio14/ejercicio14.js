/* 14 Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares. */

let cantidadNegativos = 0;
let cantidadPositivos = 0;
let multiplo15 = 0;
let sumaPares = 0;
for (let f = 1; f <= 10; f++) {
    let valor = parseInt(prompt('Ingrese un valor:'));
    if (valor < 0) {
        cantidadNegativos++;
    } else {
        if (valor > 0) {
        cantidadPositivos++;
        }
            
    }
            
    if (valor % 15 == 0 && valor != 0) {            
        multiplo15++;           
    }
    
    if (valor % 2 == 0) {               
        sumaPares = sumaPares + valor;        
    }
        
}
        
document.write('Cantidad de valores negativos:' + cantidadNegativos + '<br>');      
document.write('Cantidad de valores positivos:' + cantidadPositivos + '<br>');    
document.write('Cantidad de múltiplos de 15:' + multiplo15 + '<br>');     
document.write('Suma de los valores pares ingresados:' + sumaPares + '<br>');