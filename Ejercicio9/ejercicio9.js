/* 8 Realizar programa para una web, en el cual el usuario introduce 2 notas y su 
valor ponderado (como cuando un examen vale un 30% y otro examen el 70%).
Pulsando el botón “Calcula”, la web muestra como resultado la nota media 
ponderada.*/

var examen1 = prompt("Ingrese la nota del primer examen");
var examen2 = prompt("Ingrese la segunta nota de su examen");

function calculoNota(){

    calculoExa1 = examen1 * 0.30;
    calculoExa2 = examen2 * 0.70;

    let promedio = calculoExa1 + calculoExa2

    return alert(" El porcentaje del Examen 1 es de: " + calculoExa1 + "\n y del examen 2 es de: " + calculoExa2 + "\n Su promedio es de: " + promedio);
    
}
