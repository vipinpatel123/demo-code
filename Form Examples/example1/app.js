let myForm=document.loginform;
let txtuser=myForm.txtusername;
let txtpwd=myForm.txtpassword;
let btn=myForm.btnlogin;
btn.addEventListener("click",()=>{
    alert(txtuser.value+"\n"+txtpwd.value)
})
