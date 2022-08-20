// 4 operator function
function add(num1, num2){
    return num1 + num2;
   }
   
function subtract(num1, num2){
    return num1 - num2;
   }
   
function multiply(num1, num2){
    return num1 * num2;
   }
   
function divide(num1, num2){
    return num1 / num2;
   }
   
// operate function runs the operator functions with the numbers
function operate(operator, num1, num2){
    return operator(num1, num2);
   }
   
console.log(operate(multiply, 1, 4));

// making display responsive
const display = document.querySelector(".display");

// added functionality
document.querySelector(".numbers").onclick = function(){keyType(e)};
function keyType(e){
    return document.getElementById("display").innerHTML += document.querySelector(`.${e}`).innerText;
}

document.querySelector(".deleteValue").onclick = function(){deleteValue()};
function deleteValue(){
    return document.getElementById("display").innerHTML -= document.getElementById("display").innerHTML;
}

document.querySelector(".clearDisplay").onclick = function(){clearDisplay()};
function clearDisplay(){
    return window.location.reload();
}