function sumar() { 
    let num1, num2, res; 
    num1 = parseInt(document.calculadora.valor1.value); 
    num2 = parseInt(document.calculadora.valor2.value); 
    res = num1 + num2; document.calculadora.resultado.value = res; 
} 
function restar() { 
    let num1, num2, res; 
    num1 = parseInt(document.calculadora.valor1.value); 
    num2 = parseInt(document.calculadora.valor2.value); 
    res = num1 - num2; document.calculadora.resultado.value = res; 
} 
function multiplicar() { 
    let num1, num2, res; 
    num1 = parseInt(document.calculadora.valor1.value); 
    num2 = parseInt(document.calculadora.valor2.value); 
    res = num1 * num2; document.calculadora.resultado.value = res; 
} 
function dividir() { 
    let num1, num2, res;
    num1 = parseInt(document.calculadora.valor1.value); 
    num2 = parseInt(document.calculadora.valor2.value); 
    res = num1 / num2; document.calculadora.resultado.value = res; 
}