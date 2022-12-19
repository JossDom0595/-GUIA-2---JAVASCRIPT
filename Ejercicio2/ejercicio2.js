/* 2 Crear 3 Fuctions que calcule 2 números enteros y muestre en consola 
el resultado de la suma, resta, multiplicación y división. Puede utilizar 
parámetros o variables locales para asignar valores a los números. */

let numero1 = 10;
let numero2 = 20;

function calculoSuma(num1,num2){

    let calculoS = parseInt(num1) + parseInt(num2);

    return calculoS;
}

function calculoResta(num1,num2){

    let calculoR = parseInt(num1) - parseInt(num2);

    return calculoR;
}

function calculoM(num1,num2){
    return parseInt(num1) * parseInt(num2);
}

function calculoD(num1,num2){
       return  parseInt(num1) / parseInt(num2);
}
    

console.log("******** Resultado de los Calculos ******** \n \n Resultado de la Suma: " + calculoSuma(numero1,numero2) +"\n Resultado de la Resta: " + calculoResta(numero1,numero2)
+ "\n Resultado de la Multiplicacion: " + calculoM(numero1,numero2) + "\n Resultado de la Division: " + calculoD(numero1,numero2))
