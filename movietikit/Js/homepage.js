if(document.cookie)
    {
   let coockievalue=document.cookie;
   coockievalue=coockievalue.split(';');
   let email=coockievalue[0].split("email=")[1];
   let pass=coockievalue[1].split("pass=")[1];
   console.log(pass);
   console.log(email);


    if(email!='sidd@vaghela'){
        alert("your email address is wrong");
        window.location.href="loginfortiket.html";
       }
       else if(pass!="261175"){
        alert("your password is wrong");
        window.location.href="loginfortiket.html";
       }
   }
   

else{
    alert("plz login");
    window.location.href="loginfortiket.html";
}