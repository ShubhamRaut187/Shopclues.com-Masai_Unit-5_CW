import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footerM").innerHTML = footer();

let productList = document.getElementById("products-list");

let carousalContainer = document.getElementById("carousal");
slideshow();

let images = ["https://cdn.shopclues.com/images/banners/Tirtan_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/UltimateSmartphones_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/TopSellingFeaturePhone_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/Phones_Gadgets_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/StylishTablets_M_T_HB_W.jpg"
]
function slideshow() {
    let i = 0;
    let image = document.createElement("img");
    let id = setInterval(function () {
        if (i === 5) i = 0;
        image.src = images[i];
        carousalContainer.append(image);
        i++;
    }, 4000)
}

fetchData()
let mainData = [];
async function fetchData() {
    let res = await fetch("https://shopclues-server.onrender.com/mobile");
    let data = await res.json();
    console.log(res);
    console.log(data);
    mainData = data;
    displayData(data);
}

function displayData(data) {
    productList.innerHTML = null;
    data.map((ele) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.img_1;

        let h6 = document.createElement("h6");
        h6.textContent = ele.name;

        let priceBox = document.createElement("div");
        let price = document.createElement("h6");
        price.textContent = "₹" + ele.price;
        let mrp = document.createElement("p");
        mrp.textContent = ele.mrp;
        mrp.style.textDecoration = "line-through";
        mrp.style.color = "grey";
        let disc = document.createElement("p");
        disc.textContent = ele.percent_off;
        disc.style.color = "blue"
        priceBox.append(price, mrp, disc);

        div.append(img, h6, priceBox);

        div.addEventListener("click", function () {
            storeProduct(ele);
        });

        productList.append(div);
    });
}

function storeProduct(ele) {
    let product = JSON.parse(localStorage.getItem("product")) || {};
    product = ele;
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "productDetails.html";
}
document.getElementById("category-filter").addEventListener("change", getValue);

function getValue() {
    let value = document.getElementById("category-filter").value;
    navigate(value);
}
function navigate(value) {
    if (value === "Mobile") window.location.href = "mobiles.html";
    else if (value === "Mens") window.location.href = "men.html";
    else if (value === "Womens") window.location.href = "women.html";
}

document.getElementById("type-filter").addEventListener("change", showType);

function showType() {
    let value = document.getElementById("type-filter").value;
    console.log(value);
    filterData(value);
}

function filterData(value) {
    if (value == "") displayData(mainData);
    else {
        let filteredData = [];
        mainData.forEach((ele) => {
            if (ele.brand === value) filteredData.push(ele);;
        })
        console.log(filteredData);
        displayData(filteredData);
    }
}

document.getElementById("price-filter").addEventListener("change", showPrice);
function showPrice(){
    let value = document.getElementById("price-filter").value;
    console.log(value);
    filterAccPrice(value); 
}
function filterAccPrice(value){
    if (value == "") displayData(mainData);
    else {
        let filteredData = [];
        if(value == 0){
            mainData.forEach((ele) => {
                if (ele.price > 0 && ele.price < 10000) filteredData.push(ele);
            })
        }
        else if(value == 10000){
            mainData.forEach((ele) => {
                if (ele.price > 9999 && ele.price < 20000) filteredData.push(ele);
            })
        }
        else if(value == 20000){
            mainData.forEach((ele) => {
                if (ele.price > 19999 && ele.price < 100000) filteredData.push(ele);
            })
        }
        
        console.log(filteredData);
        displayData(filteredData);
    } 
}
document.getElementById("htl").addEventListener("click", sortHtl);

function sortHtl(){
    mainData.sort(function (a,b){
        return b.price-a.price;
    });
    displayData(mainData);
}
document.getElementById("lth").addEventListener("click", sortLth);

function sortLth(){
    mainData.sort(function (a,b){
        return a.price-b.price;
    });
    displayData(mainData);
}


//Navbar Functions
let gotohome = ()=>{
    location.href = "index.html";
}
document.getElementById("logo_img").addEventListener("click",gotohome);

let handlesearch = ()=>{
    let search_category = document.getElementById("searchBar").value;
    if(search_category === "Men" || search_category === "men" || search_category === "Mens" || search_category === "mens" || search_category === "Mens clothing" || search_category === "mens clothing"){
        location.href= "men.html";
    }
    else if(search_category === "Women" || search_category === "women" || search_category === "Womens" || search_category === "womens" || search_category === "Womens clothing" || search_category === "womens clothing"){
        location.href = "women.html";
    }
    else{
        location.href = "mobiles.html";
    }
}
document.getElementById("search_btn").addEventListener("click",handlesearch);

let gotomobiles = ()=>{
    location.href = "mobiles.html";
}
document.getElementById("active_btn_mobiles").addEventListener("click",gotomobiles);

let gotomen = ()=>{
    location.href = "men.html";
}
document.getElementById("active_btn_men").addEventListener("click",gotomen);

let gotowomen = ()=>{
    location.href = "women.html"
}
document.getElementById("active_btn_women").addEventListener("click",gotowomen);