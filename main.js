var num1;
var num2;
var operation;
var valorTemp;

const suma = (num1, num2) => (num1+num2)

const resta = (num1, num2) => (num1-num2)
  
const multiplicacion = (num1, num2) => (num1*num2)
  
const division = (num1, num2) => {
  if (num2 === 0) {
    return "No se puede dividir entre cero";
  } else {
    return num1 / num2;
  }
};

function boton(valor) {
    var auxiliar = document.getElementById("PantLcd").value;
    valorTemp = document.getElementById("PantLcd").value = auxiliar + valor;
}

function operation(caracter){
    num1 = parseInt(valorTemp);
    operation = caracter;    
    limpar();
}

function reset() {
    location.reload();
}
function limpar(){
    document.getElementById('PantLcd').value = '';    
}

function btn_igual(){
    num2 = parseInt(valorTemp);
    calcular();
}

function calcular() {
    var total = 0;
    switch(operation){
        case "+":
          total = suma(num1,num2);
          break;
        case "-":
            total = resta(num1,num2);
            break;
        case "*":
          total = multiplicacion(num1,num2);
          break;
        case "/":
          total = division(num1,num2);
          break;
    }
    limpar();
    document.getElementById('PantLcd').value = total;
}