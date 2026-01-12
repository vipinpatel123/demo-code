//Show the key pressed by the user
let x = document.getElementById("mytext");
x.addEventListener("keydown", (e) => {
	alert("you pressed the key " + e.key);
});
