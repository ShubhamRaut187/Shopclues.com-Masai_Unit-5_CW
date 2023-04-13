
const signupForm = document.querySelector("#submit-btn");
    
signupForm.addEventListener("click", function () {
  event.preventDefault();

  
  const mobilNumber = document.querySelector("#number")
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  let accounts = JSON.parse(localStorage.getItem("account-data")) || [];

  if (accounts.find((account) => account.email === emailInput.value)) {

    let redAlertE = document.querySelector("#email-alert")
               redAlertE.textContent=("Account already exists with this email. Please login.")
               let redAlertN = document.querySelector("#number-alert")
               redAlertN.textContent=("Account already exists with this mobile number. Please login.")
    
    return;
  }

  const newAccount = {
    // firstname: firstnameInput.value,
    number: mobilNumber.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  accounts.push(newAccount);

  localStorage.setItem("account-data", JSON.stringify(accounts));

  alert("Account created successfully!");

 
  mobilNumber.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  
//   window.location.href = "login.html"; 
  // Redirect to login page after account creation
  
});











let data1 = document.querySelector("#right-register #email")
data1.addEventListener("change", () =>{
 
    if(data1.value !== ""){
        document.querySelector("#emailL").style.top = "-1px";
    }
})



let data2 = document.querySelector("#right-register #number")
data1.addEventListener("change", () =>{
 
    if(data1.value !== ""){
        document.querySelector("#mobile").style.top = "-1px";
    }
})


let data3 = document.querySelector("#right-register #password")
data1.addEventListener("change", () =>{
 
    if(data1.value !== ""){
        document.querySelector("#passwordL").style.top = "-1px";
    }
})