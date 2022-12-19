/* 15 Se cuenta con la siguiente información:
Las edades de 5 estudiantes del turno mañana.
Las edades de 6 estudiantes del turno tarde.
Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a) Obtener el promedio de las edades de cada turno (tres promedios).
b) Imprimir dichos promedios (promedio de cada turno).
c) Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un 
promedio de edades mayor. */

let suma1 = 0;
for (let f = 1; f <= 5; f++) {
    let edad = parseInt(prompt('Edad de estudiante del turno mañana:'));
    suma1 = suma1 + edad;
}
let suma2 = 0;
for (let f = 1; f <= 6; f++) {
    let edad = parseInt(prompt('Edad de estudiante del turno tarde:'));
    suma2 = suma2 + edad;
}
let suma3 = 0;
for (let f = 1; f <= 11; f++) {
let edad = parseInt(prompt('Edad de estudiante del turno noche:'));
    suma3 = suma3 + edad;
}
let promedio1 = suma1 / 5;
let promedio2 = suma2 / 6;
let promedio3 = suma3 / 11;
document.write('Promedio de edades de alumnos del turno mañana:' + promedio1.toFixed(1) + '<br>');
document.write('Promedio de edades de alumnos del turno tarde:' + promedio2.toFixed(1) + '<br>');
document.write('Promedio de edades de alumnos del turno noche:' + promedio3.toFixed(1) + '<br>');
if (promedio1 > promedio2 && promedio1 > promedio3) {
    document.write('El turno mañana tiene un promedio mayor de edades');
} else {
if (promedio2 > promedio3) {
    document.write('El turno tarde tiene un promedio mayor de edades');
} else {
    document.write('El turno noche tiene un promedio mayor de edades');
    }
}