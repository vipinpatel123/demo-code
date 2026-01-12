//Handle keydown for input
let tbox = document.querySelector("input");
tbox.addEventListener("keydown", (e) => {
  if (e.key < "0" || e.key > "9") {
    alert("Only digits allowed");
    e.preventDefault();
  }
});
