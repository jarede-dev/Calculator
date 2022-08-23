// selecting the buttons
const buttons = document.querySelectorAll("button");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");

let currentValue = "";
let previousValue = "";
let finalValue = null;
let operator = null;


// populates the display
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "number") {
      finalValue = null;
      currentValue = Number(currentValue + button.innerText);

      current.innerText = currentValue;
    } else if (button.id === "operator") {
      if ((operator !== null) && (currentValue === "")) {
        currentValue = "";
      } else if (operator === null) {
        previousValue = currentValue + finalValue;
        currentValue = "";
        operator = button.innerText;

        previous.innerText += current.innerText + `${button.innerText}`;
        current.innerText = currentValue;
      } else {
        previousValue = operate(previousValue, currentValue, operator);
        currentValue = "";
        operator = button.innerText;

        previous.innerText += current.innerText + `${button.innerText}`;
        current.innerText = currentValue;
      }
    } else if (button.id === "decimal") {
      if (currentValue.toString().includes(".")) {
        return currentValue;
      } else {
        currentValue += ".";
      }

      current.innerText = currentValue;
    } else if (button.id === "equals") {
      if (operator === null) {
        return currentValue;
      } else {
        finalValue = operate(previousValue, currentValue, operator);
        currentValue = "";
        previousValue = "";
        operator = null;

        current.innerText = finalValue;
        previous.innerText = null;
      }
    } else if (button.id === "delete") {
      currentValue = Number(currentValue.toString().slice(0, -1));
      current.innerText = currentValue;
    } else if (button.id === "clear") {
      currentValue = "";
      previousValue = "";
      finalValue = null;
      operator = null;

      current.innerText = null;
      previous.innerText = null;
    }

    console.log(previousValue, currentValue, finalValue, operator)
  });
});


// operate function do the operations in the switch satement
function operate(firstNum, nextNum, operator) {
  switch (operator) {
    case "+":
      return firstNum + nextNum;
      break;
    case "-":
      return firstNum - nextNum;
      break;
    case "x":
      return firstNum * nextNum;
      break;
    case "÷":
      return firstNum / nextNum;
      break;
  }
}
