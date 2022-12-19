/* 4 Calcular el aumento de trabajador tomando en cuenta la tabla de categorías 
de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre,
Salario, categoría y aumento. Deberá demostrar en consola los datos del empleado y
el aumento salarial.*/

let nombre = "José Domínguez";
let salario = 1000;
let categoria = "D";

if(categoria == "A"){

    var cat = 0.15;
    
}else if(categoria == "B"){

    cat = 0.30;

}else if(categoria == "C"){

    cat = 0.10;

}else if(categoria == "D"){

    cat = 0.20;
}

function calculoSalario(sal,categ){

    aumentoSalarial = sal * categ;
    return aumentoSalarial;
}

function calculoTotalSal(salar){

    totalSalario = salar + calculoSalario(salario,cat);
    return totalSalario;
}

console.log("*********** Datos del Empleado ***********" + "\nNombre: "
+ nombre + "\nSalario: " + salario + "\nCategoria: " + categoria 
+"\nAumento salarial: " + calculoSalario(salario,cat) + "\nTotal de Salario: " 
+ calculoTotalSal(salario))