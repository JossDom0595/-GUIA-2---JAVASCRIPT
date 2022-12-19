/* 10 Crear una Fuction, en una pàgina web, donde el usuario introduce su altura
 (cm), edad, sexo y peso actual. El programa responde con una referencia de peso 
 aproximado. */

 function pesoReferencia(daltura=1, dpeso=1, dedad=1, dsexo="N"){ 

    let altura = parseInt(daltura); 
    let edad = parseInt(dedad); 
    let peso = parseInt(dpeso); 

    if (dsexo == "h" || dsexo=="H"){

    peso = 50 + ((altura - 150) / 4)*3  + (edad - 20)/4; 

    } else peso = peso * 0.9; 

    document.getElementById("resultado").innerHTML = peso; 

 }