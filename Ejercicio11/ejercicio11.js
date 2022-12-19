/* 11 Realizar programa donde se Introducen de 3 números y el programa indica 
cuál es el mayor de los 3. */

function identificaMayor(numero1=1, numero2=1, numero3=1){

    let nume1 = parseInt(numero1);
    let nume2 = parseInt(numero2);
    let nume3 = parseInt(numero3);

    if(nume1 > nume2){
        if(nume1 > nume3){
            document.write("El numero " + nume1 + " es mayor");
            document.getElementById("resultado").innerHTML = mayor

        }else{

            document.write("El numero " + nume3 + " es mayor");
            document.getElementById("resultado").innerHTML = mayor
        }
    }else if(nume2 > nume3){

        document.write("El numero " + nume2 + " es mayor");
        document.getElementById("resultado").innerHTML = mayor

    }else{

        document.write("El numero " + nume3 + " es mayor");

        document.getElementById("resultado").innerHTML = mayor
    }


}