const myform = document.loginform;
const username = myform.txtusername;
const password = myform.txtpassword;
const btn = myform.btnlogin;

btn.addEventListener("click", () => {
    let uname = username.value;
    let pwd = password.value;
    let message = `username:${uname}\npassword:${pwd}`;
    alert(message);
});