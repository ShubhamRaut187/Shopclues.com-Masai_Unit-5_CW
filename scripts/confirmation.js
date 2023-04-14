var arrow = document.querySelector('.arrow');
arrow.addEventListener('click',backTo);

function backTo(){
    window.location.href = "paymentotp.html";
}


let x = Math.floor(Math.random() * 1000000);
document.getElementById("orderid").innerHTML = "Order ID: "+x;

let amount=localStorage.getItem("lastprice");
console.log(amount)
let p=document.getElementById("message");
p.textContent="your order value of : "+amount+" has been received";



var con = document.querySelector('#payButton');
con.addEventListener('click',bacTo);

function bacTo(){
   
    window.location.href = "index.html";
}