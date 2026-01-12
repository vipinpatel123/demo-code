let myForm = document.myfrm;
let firstText = myForm.txtfno;
let secText = myForm.txtsno;
let txtResult = myForm.txtresult;
let btn1 = myForm.btnadd;
let btn2 = myForm.btnclear;
let sp1=document.querySelector("#s1");
let sp2=document.querySelector("#s2");
btn1.addEventListener("click", () => {
    let fail=false;
  if(firstText.value===""){
    sp1.innerText="Please input first no";
    sp1.style.color="red";
    fail=true;
  } 
  if(secText.value===""){
    sp2.innerText="Please input sec no";
    sp2.style.color="red";
    fail=true;
  } 
  if(fail){
    return;
  }
  let a = Number(firstText.value);
  let b = Number(secText.value);
  let c = a + b;
  txtResult.value = c;
});
btn2.addEventListener("click", () => {
  firstText.value = "";
  secText.value = "";
  txtResult.value = "";
  firstText.focus();
});
