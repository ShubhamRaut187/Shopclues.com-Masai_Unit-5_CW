var arr = JSON.parse(localStorage.getItem('UserDatabase')) || [];

var save = document.querySelector(".save").addEventListener("click",saveData);
var orderArr = JSON.parse(localStorage.getItem('orderDatabase'));

function saveData(){
    var uName = document.querySelector('.name').value;
    var mob = document.querySelector('.mobile').value;
    var h_add = document.querySelector('.houseNo').value;
    var lm = document.querySelector('.landmark').value; 
    var pin = document.querySelector('.pincode').value;
    var ct = document.querySelector('.city').value; 
    var st = document.querySelector('.states').value;
    var p_List = orderArr[0].product_List;
    var q_List = orderArr[0].product_quantity_List;
    var t_price = orderArr[0].total_Price;
    var s_List = orderArr[0].product_size_List;
    var c_List = orderArr[0].product_color_List;

    if(arr.length >= 1){
        arr.pop();
    }
    var addressObj = {
        fullName : uName,
        mobile: mob,
        house: h_add,
        landmark: lm,
        pincode: pin,
        city: ct,
        state: st,
        product_List : p_List,
        size_List : s_List,
        color_List : c_List,
        quantity_List : q_List,
        total_Price : t_price,
    }
    arr.push(addressObj);
    localStorage.setItem('UserDatabase',JSON.stringify(arr));
    console.log(arr);
    console.log(orderArr);

    if(uName == "" || mob == "" || h_add== "" || lm == "" || pin == "" || ct == "" || st == ""){
        alert("Please fill in the details.")
    }
    else{
        window.location.href = "payment.html";
    }
}

// back button function
var arrow = document.querySelector('.arrow');
arrow.addEventListener('click',backTo);

function backTo(){
    window.location.href = "cart1.html";
}

// var arr = [
//     {
//         city: "Mumbai"
//         fullName: "Sumeet Shinde"
//         house: "Sion"
//         landmark: "Sion"
//         mobile: "8767956476"
//         pincode: "400017"
//         state: "Maharashtra"
//     }
// ]