const email=document.getElementById("email");
const pass=document.getElementById("pass");
const submit=document.getElementById("submit");

const data={
    email:"",
    password:"",
}

email.addEventListener("keyup",(e)=>{
    data.email=e.currentTarget.value.toString();
})

pass.addEventListener("keyup",(e)=>{
    data.password=e.currentTarget.value.toString();
})

 submit.addEventListener("click",(e)=>{
    e.preventDefault();
    document.cookie="email="+data.email;
    document.cookie="pass="+data.password;
    
    window.location.href='homepage.html';
 })