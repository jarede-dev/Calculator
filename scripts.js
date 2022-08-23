// selecting the buttons
const buttons = document.querySelectorAll("button");
const current = document.querySelector(".current");
const previous = document.querySelector(".previous");

let currentValue = 0;
let previousValue = 0;
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
      if ((operator !== null) && (currentValue === 0)) {
        currentValue = 0;
      } else if (operator === null) {
        previousValue = currentValue + finalValue;
        currentValue = 0;
        operator = button.innerText;

        previous.innerText += current.innerText + `${button.innerText}`;
        current.innerText = currentValue;
      } else {
        previousValue = operate(previousValue, currentValue, operator);
        currentValue = 0;
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
        currentValue = 0;
        previousValue = 0;
        operator = null;

        current.innerText = finalValue;
        previous.innerText = null;
      }
    } else if (button.id === "delete") {
      currentValue = Number(currentValue.toString().slice(0, -1));
      current.innerText = currentValue;
    } else if (button.id === "clear") {
      currentValue = 0;
      previousValue = 0;
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
