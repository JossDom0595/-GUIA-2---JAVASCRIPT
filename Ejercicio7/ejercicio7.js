/* 7 Crear una fuction que calcule la edad de una persona en base a su año de 
nacimiento y fecha actual podrá hacer uso de métodos JavaScript 
(DATE,getDate,getFullYear)para realizar el cálculo.*/

let fechaNacimiento= prompt("Ingrese su año de nacimiento para calcular su edad ej.(1995)");
function obtenerEdad(dateString) {
    let fechaActual = new Date()
    let fechaNacimiento = new Date(dateString)
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = fechaActual.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
  }

  alert("Su edad actual es: " + obtenerEdad(fechaNacimiento));