var payButton = document.querySelector('.payButton');
payButton.addEventListener('click',otpCheck);

var uDatabase = JSON.parse(localStorage.getItem('UserDatabase'));

function otpCheck(){
    var paymentotp = document.querySelector('.otp');
    var message = document.querySelector('.message');
    var thanking = document.querySelector('.thanking');
    if(paymentotp.value == "123456"){
        message.textContent = "Payment Successful";
        thanking.textContent = "Thank You For Shopping With Shopclues.";
        setInterval(()=>{
            window.location.href = "confirmation.html";
        },2000)
        
        pushData(uDatabase);
    }
    else{
        alert("Please Enter Valid OTP");
    }
}

var DataArr = JSON.parse(localStorage.getItem("mainDatabase")) || [];
var arr = [];
var cartArr = JSON.parse(localStorage.getItem("cartDatabase"));
var arr1 = [];

function pushData(uDatabase){
    var message = document.querySelector('.message');
    if(message.textContent = "Payment Successful"){
        DataArr.push(uDatabase[0]);
        localStorage.removeItem("orderDatabase");
        localStorage.removeItem("UserDatabase");
        localStorage.removeItem("cartDatabase");
        localStorage.setItem("cartDatabase", JSON.stringify(arr));
        localStorage.setItem("orderDatabase", JSON.stringify(arr1));
    }
    console.log(DataArr);
    localStorage.setItem("mainDatabase", JSON.stringify(DataArr));
}

var arrow = document.querySelector('.arrow');
arrow.addEventListener('click',backTo);

function backTo(){
    window.location.href = "payment.html";
}

var headerImg = document.querySelector('.headerImg');
headerImg.addEventListener('click',backToProduct);

function backToProduct(){
    window.location.href = "index.html";
}









