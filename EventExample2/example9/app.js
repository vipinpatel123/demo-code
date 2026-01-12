let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
	e.target.style.color = "crimson";
});
const btn = document.querySelector("#additem");
btn.addEventListener("click", () => {
	let task = prompt("What you want to do next ?");
	ul.innerHTML += "<li>" + task + "</li>";
});
