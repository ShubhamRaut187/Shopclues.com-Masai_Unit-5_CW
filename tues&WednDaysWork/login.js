//  let signupBtn = document.querySelector("#signup-btn")
 let popupmain = document.querySelector("#Login-signup-popup")
//  signupBtn.addEventListener("click" ,()=>{
//     popupmain.style.display = "scale(1)";
//     signupBtn.style.display = "none"

//  } )

 let closeBtn = document.querySelector("#close-btn")
 closeBtn.addEventListener("click", ()=>{
    popupmain.style.display = "none"
    console.log("hi ")
 })
let loginPage = document.querySelector("#right-login")
let registerPage = document.querySelector("#right-register")

 let registerBtn = document.querySelector("#register")


 registerBtn.addEventListener("click", ()=>{
    loginPage.style.display = "none";
    registerPage.style.display="block";
    console.log("hi ")
 })
 let loginBtn = document.querySelector("#login-register")
 loginBtn.addEventListener("click", ()=>{
    // document.querySelector("")
    loginPage.style.display = "block";
    registerPage.style.display="none";
    console.log("hi ")
 })
function togglePopup(){
   document.querySelector("#popup").classList.toggle("active");
}





 document.querySelector("#login-btn").addEventListener("click",login)

 var loginArr=JSON.parse(localStorage.getItem("account-data"))||[];

 
 function login(event){
   event.preventDefault();
   var emailI=document.querySelector("#input").value
   // var password=document.querySelector("#password").value
    
     if(loginArr.length>0){
         for(i=0;i<loginArr.length;i++){
         // console.log(loginArr[i].email,email)
         if(loginArr[i].email==emailI || loginArr[i].number==emailI){
             alert("Login Successfully Done");
             window.location.href="index.html"
             break;
         }else{
             if((loginArr.length-1)==i){
               let redAlert = document.querySelector("#red-error")
               redAlert.textContent=("Account doesn't exist with this email id or number. Register now")
               //   alert("check email and password correct or Wrong else goto REGISTER");
             }
         }
     }
     }else{
         alert("check email and password correct or Wrong else goto REGISTER");
     }

 }




