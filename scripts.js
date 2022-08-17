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