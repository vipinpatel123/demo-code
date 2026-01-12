const myform = document.frmcontact;
const txtEmailId = myform.txtEmail;
const span = document.querySelector("#error");
txtEmailId.addEventListener("blur", () => {
	if (!txtEmailId.value.includes("@")) {
		span.innerHTML = "Please enter a correct email.";
	}
});
txtEmailId.addEventListener("focus", () => {
	txtEmailId.value = "";
	span.innerHTML = "";
});
