// toggler switch
const toggler = document.querySelector(".toggler");
const main = document.querySelector("body");
document.getElementById("one").addEventListener("click", () => {
  main.classList = "";
  toggler.style.cssText = "transform: translateX(0px)";
});
document.getElementById("two").addEventListener("click", () => {
  main.classList = "";
  toggler.style.cssText = "transform: translateX(24px)";
  main.classList.add("theme-1");
});
document.getElementById("three").addEventListener("click", () => {
  main.classList = "";
  toggler.style.cssText = "transform: translateX(47px)";
  main.classList.add("theme-2");
});

// button Selectors
const resultScreen = document.querySelector(".result");
const numbersButtons = document.querySelectorAll(".calc .num ");
const functionalButton = document.querySelectorAll(".fun");
const equalButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".del");
const resetButton = document.querySelector(".reset");

//claculator class to perform various operation
class Calculator {
  constructor(resultScreen) {
    //initilize the result screen that we want to print the result into
    this.resultScreen = resultScreen;
    // clear the screen when calling the class
    this.clear();
  }
  clear() {
    // set the result to empty string && intilize the function for the CLEAR button
    this.result = "";
    // set the operation to undefined to not perform any operation
    this.operation = undefined;
  }
  dispNum(num) {
    // check if (.) already pressed and if pressed again to return null
    if (num === "." && this.result.includes(".")) return;
    // append the selected button to result
    this.result += num;
  }
  compute() {
    let res; // create result variable to hold the computed value
    const saved = parseFloat(this.prevOperation); // declare variable to hold the typed numbers before perform any type of operation
    const typed = parseFloat(this.result); // declare variable to hold the latest typed numbers and computed the saved numbers
    if (isNaN(saved) || isNaN(typed)) return; // if saved and typed its not a number dont perform any opration
    switch (
      this.operation // using switch loop to apply opration in respect of selected opration
    ) {
      case "+":
        res = saved + typed;
        break;
      case "−":
        res = saved - typed;
        break;
      case "x":
        res = saved * typed;
        break;
      case "/":
        res = saved / typed;
        break;
      default:
        return;
    }
    this.result = res; // copy the value of computed res to the result and then added to the result screen
    this.operation = undefined;
    this.prevOperation = ""; // make sure to empty the prev operation
  }
  opFunc(opertation) {
    if (this.result === "") return;
    if (this.prevOperation !== "") {
      this.compute();
    }
    this.operation = opertation;
    this.prevOperation = this.result;
    this.result = "";
  }
  del() {
    this.result = this.result.toString().slice(0, -1); // this function used for DELETE button to delete the last number in the result
  }
  displayUpdate() {
    this.resultScreen.innerText = this.result; // set the result screen to the result vairable
  }
}
const calculator = new Calculator(resultScreen); // initlize the class to start the opration

numbersButtons.forEach((num) =>
  num.addEventListener("click", () => {
    calculator.dispNum(num.innerHTML);
    calculator.displayUpdate();
  })
);
resetButton.addEventListener("click", () => {
  calculator.clear();
  calculator.displayUpdate();
});
functionalButton.forEach((func) =>
  func.addEventListener("click", () => {
    calculator.opFunc(func.innerHTML);
    calculator.displayUpdate();
  })
);
equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.displayUpdate();
});
deleteButton.addEventListener("click", () => {
  calculator.del();
  calculator.displayUpdate();
});
