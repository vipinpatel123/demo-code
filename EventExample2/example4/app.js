//Whenever any <li> is clicked its color shoulde become crimson

let ul = document.querySelector("ul");
let allLi = ul.querySelectorAll("li");
allLi.forEach((li) => {
  li.addEventListener("click", () => {
    li.style.color = "crimson";
  });
});
