function togglePopup() {
    document.querySelector(".popup").classList.toggle("active");
}

//import loginPopup in index.js.

import loginPopup from "./loginPopup.js";
let loginPopupD = document.getElementById("loginPopup");
loginPopupD.innerHTML = loginPopup();


//add following script in index.js file

// --------------------------------------otp part -----------------------------------------------

function generateOTP() {
    var length = 4;
    var chars = "0123456789";
    var otp = "";
    for (var i = 0; i < length; i++) {
        otp += chars[Math.floor(Math.random() * chars.length)];
    }
    document.querySelector("#right").style.display = "block";
    document.querySelector("#right-login").style.display = "none"

    let backIcon = document.querySelector("#back-btn");
    backIcon.addEventListener("click", () => {
        document.querySelector("#right-login").style.display = "block"
        document.querySelector("#right").style.display = "none";

    });
    alert(otp + " : is your OTP for " + document.querySelector("#input").value + " to access ShopClues.com");
    let verifyBtn = document.querySelector("#verifyBtn-otp");
    verifyBtn.addEventListener("click", verifyOTP);

    function verifyOTP() {
        let generatedOTP = otp;
        let userOTP = document.getElementById("input-otp").value;;

        if (generatedOTP === userOTP) {
            console.log("OTP verification successful");
            alert("OTP Verified Successfully");
            togglePopup()
        } else {
            console.log("OTP verification failed");
            alert("Please enter a valid OTP");
        }
    }
}





// -------------------------------chang login and register page


let popupmain = document.querySelector(".Login-signup-popup")

let loginPage = document.querySelector("#right-login")
let registerPage = document.querySelector("#right-register")

let registerBtn = document.querySelector("#on-login-register-btn")


registerBtn.addEventListener("click", () => {
    loginPage.style.display = "none";
    registerPage.style.display = "block";
    console.log("hi ")
})
let loginBtn = document.querySelector("#login-register")
loginBtn.addEventListener("click", () => {

    loginPage.style.display = "block";
    registerPage.style.display = "none";
    console.log("hi ")
})


// -------------------------------login-page-part------------------

document.querySelector("#login-btn").addEventListener("click", login)
// document.querySelector("#red-error").textContent = ""
// document.querySelector("#input").textContent = "";
var loginArr = JSON.parse(localStorage.getItem("account-data")) || [];


function login(event) {
    event.preventDefault();
    var emailI = document.querySelector("#input").value

    if (loginArr.length > 0) {
        for (let i = 0; i < loginArr.length; i++) {
            if (loginArr[i].email == emailI || loginArr[i].number == emailI) {
                generateOTP();
                break;
            } else {
                if ((loginArr.length - 1) == i) {
                    let redAlert = document.querySelector("#red-error")
                    redAlert.textContent = ("Account doesn't exist with this email id or number. Register now")
                    document.querySelector("#input").value = "";
                }
            }
        }
    } else {
        redAlert.textContent = ("check email and password correct or Wrong else goto REGISTER");
        document.querySelector("#input").value = "";
    }

}

//  -------------------------------------register-page-part----------------------------------------

const signupForm = document.querySelector("#submit-btn");

signupForm.addEventListener("click", function () {
    event.preventDefault();


    const mobilNumber = document.querySelector("#numberI")
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#passwordI");

    let accounts = JSON.parse(localStorage.getItem("account-data")) || [];

    if (accounts.find((account) => account.email === emailInput.value)) {

        let redAlertE = document.querySelector("#email-alert")
        redAlertE.textContent = ("Account already exists with this email. Please login.")
        let redAlertN = document.querySelector("#number-alert")
        redAlertN.textContent = ("Account already exists with this mobile number. Please login.")

        return;
    }

    const newAccount = {
        number: mobilNumber.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    accounts.push(newAccount);

    localStorage.setItem("account-data", JSON.stringify(accounts));

    alert("Account created successfully!");
    document.querySelector("#right-login").style.display = "block";
    document.querySelector("#right-register").style.display = "none";

    mobilNumber.value = "";
    emailInput.value = "";
    passwordInput.value = "";

});


let dataL = document.querySelector(" #input")
dataL.addEventListener("change", dataLf);

function dataLf() {

    if (dataL.value !== "") {
        document.querySelector("#label").style.top = " 15%";
        document.querySelector("#label").style.left = "33%";

    } else {
        document.querySelector("#label").style.top = " 18%";
        document.querySelector("#label").style.left = "34%";
        let redAlert = document.querySelector("#red-error")
        redAlert.textContent = ("")



    }
    console.log("datal")
}

let data1 = document.querySelector(" #email")
data1.addEventListener("change", data1f);

function data1f() {

    if (data1.value !== "") {
        document.querySelector("#emailL").style.top = "-5px";
        document.querySelector("#emailL").style.left = "-1px";
    } else {
        document.querySelector("#emailL").style.top = "50%";
        document.querySelector("#emailL").style.left = "5px";
    }
    console.log("data1")
}



let data2 = document.querySelector("#numberI")
data2.addEventListener("change", data2f)
function data2f() {
    if (data2.value !== "") {
        document.querySelector("#mobileL").style.top = "-1px";
        document.querySelector("#mobileL").style.left = "-1px";
    } else {
        document.querySelector("#mobileL").style.top = "50%";
        document.querySelector("#mobileL").style.left = "5px";
    }
    console.log("data2")
}


let data3 = document.querySelector("#passwordI")
data3.addEventListener("change", data3f)
function data3f() {
    if (data3.value !== "") {
        document.querySelector("#passwordL").style.top = "-1px";
        document.querySelector("#passwordL").style.left = "-1px";
    } else {
        document.querySelector("#passwordL").style.top = "50%";
        document.querySelector("#passwordL").style.left = "5px";
    }
    console.log("data3")
}


let data4 = document.querySelector("#input-otp")
data4.addEventListener("change", data4f)
function data4f() {
    if (data4.value !== "") {
        document.querySelector("#label-otp").style.top = "21%";

    } else {
        document.querySelector("#label-otp").style.top = "25%";

    }
    console.log("data3")
}