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