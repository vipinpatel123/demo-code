const myform = document.myfrm;
const btnadd = myform.btnadd;
const btnclear = myform.btnclear;
const txtfno = myform.txtfno;
const txtsno = myform.txtsno;
const txtresult = myform.txtresult;
const spnfnoerror = document.getElementById("fnoerror");
const spnsnoerror = document.getElementById("snoerror");

function validate(fnum, snum) {
	let isValid = true;
	if (fnum.length == 0 || isNaN(fnum)) {
		if (fnum.length == 0) {
			spnfnoerror.innerText = "Input required!";
		} else {
			spnfnoerror.innerText = "Please input numbers only!";
		}
		spnfnoerror.style.color = "crimson";
		txtfno.setAttribute("class", "error");
		isValid = false;
	} else {
		spnfnoerror.innerText = "";
		txtfno.removeAttribute("class");
	}
	if (snum.length == 0 || isNaN(snum)) {
		if (snum.length == 0) {
			spnsnoerror.innerText = "Input required!";
		} else {
			spnsnoerror.innerText = "Please input numbers only!";
		}
		spnsnoerror.style.color = "crimson";
		txtsno.setAttribute("class", "error");
		isValid = false;
	} else {
		spnsnoerror.innerText = "";
		txtsno.removeAttribute("class");
	}
	return isValid;
}
btnadd.addEventListener("click", () => {
	let fnum = txtfno.value;
	let snum = txtsno.value;
	if (validate(fnum, snum)) {
		let sum = Number(fnum) + Number(snum);
		txtresult.value = sum;
	}
});
btnclear.addEventListener("click", () => {
	txtfno.value = txtsno.value = txtresult.value = "";
	txtfno.focus();
});
