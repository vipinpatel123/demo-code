let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "LI") {
    e.target.style.color = "crimson";
  }
});
