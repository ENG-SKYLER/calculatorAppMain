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
let result = " ";

//Calculator Screen
const screen = document.querySelector(".result");
// set the value of the screen to the result
// screen.innerHTML = result;

//declare the numbers selectors
const numbers = document.querySelectorAll(".calc .num ");

// addition selector
const addition = document.querySelector(".fun");
console.log(addition);
//function to add numbers

numbers.forEach((num) =>
  num.addEventListener("click", (e) => {
    result += +num.innerHTML;
    screen.innerHTML = result;
  })
);
