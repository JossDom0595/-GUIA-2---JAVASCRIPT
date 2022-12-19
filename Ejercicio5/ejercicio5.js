/* 5 Crear una function que tenga 2 parámetros y asignarle números enteros para 
calcular cual número es el mayor. */

let numero1 = 20;
let numero2 = 10;

function numeroMayor(num1,num2){

    if(num1 > num2){

        return console.log("El numero 1 es el mayor")

    } else if(num2 > num1){

        return console.log("El numero 2 es el mayor")
    }else
    
        return console.log("Los dos numeros son iguales")
    
}

numeroMayor(numero1,numero2);
