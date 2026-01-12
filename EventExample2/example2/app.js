//on double click on heading it should become italic
let h3 = document.querySelector("h3");
h3.addEventListener("dblclick", () => {
  h3.style.fontStyle = "italic";
});

//when mouse goes over the image it should change
let img = document.querySelector("img");
img.addEventListener("mouseover", () => {
  img.src = "../../images/ALLOW.GIF";
});
//when mouse come out of the image it should again change
img.addEventListener("mouseout", () => {
    img.src = "../../images/scalogo.png";
  });
