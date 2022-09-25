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
