/* 3 Determinar la nota final de un alumno, la cual depende de lo siguiente: 
Examen =20% , tareas 40%, asistencia =10% e investigación =30% , al final deberá 
mostrar los datos del alumno , nombre , carnet y nota final. Para este ejercicio 
deberá de utilizar una fuction y asignar parámetros para llenar los valores.*/

let nombre = "José Domínguez";
let carnet = "293049"
let examen = 8;
let tareas = 8;
let asistencia = 8;
let investigacion = 8;

function calculoNotas(exa,tar,asi,inv){

    porcExa = exa * 0.20;
    porctar = tar * 0.40;
    porcAsi = asi * 0.10;
    porcInv = inv * 0.30;

    calculo = porcExa + porctar + porcAsi + porcInv;

    return calculo;
}

console.log("************* Datos del Alumno ************* \n\n" + 
"Nombre: " + nombre + "\nCarnet: " + carnet + "\nNota Final: " + calculoNotas(examen,tareas,asistencia,investigacion));