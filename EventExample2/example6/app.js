//Event bubbling
let listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		console.log("li clicked");
		e.stopPropagation();
	});
});
let ul = document.querySelectorAll("ul");
ul.forEach((item) => {
	item.addEventListener("click", () => {
		console.log("ul clicked");
	});
});
let div = document.querySelectorAll("div");
div.forEach((item) => {
	item.addEventListener("click", () => {
		console.log("div clicked");
	});
});
