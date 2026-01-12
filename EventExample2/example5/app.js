//Is there a problem with the code
const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.color = "crimson";
  });
});

const btn = document.querySelector("#additem");
const ul = document.querySelector("ul");
btn.addEventListener("click", () => {
  let item = prompt("What you want to do?");
  ul.innerHTML += "<li>" + item + "</li>";
});
