import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();


let carousalContainer = document.getElementById("carousal");
window.onload = slideshow();

let mainData = [];

let images = ["https://cdn.shopclues.com/images/banners/CLP_HeroBanner_Desk_Satinder.jpg",
    "https://cdn.shopclues.com/images/banners/Dresses_wclp_29Aug_Alam.jpg",
    "https://cdn.shopclues.com/images/banners/Kurtis_clpbanner_12Oct17_vishal.jpg",
    "https://cdn.shopclues.com/images/banners/Designer_Sarees_clpbanner_12Oct17_vishal.jpg",
    "https://cdn.shopclues.com/images/banners/Work/widgetClp/beautypurfume/Revamp2018/fragnance_w_banners.jpg"
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

let productList = document.getElementById("products-list");

fetchData()

async function fetchData() {
    let res = await fetch("https://shopclues-project-data.onrender.com/Women's_Clothing");
    let data = await res.json();
    console.log(data);
    mainData = data;
    displayData(data);
}

function displayData(data) {
    productList.innerHTML = null;
    data.forEach(ele => {
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
            if (ele.category === value) filteredData.push(ele);;
        })
        console.log(filteredData);
        displayData(filteredData);
    }
}

document.getElementById("price-filter").addEventListener("change", showPrice);
function showPrice() {
    let value = document.getElementById("price-filter").value;
    console.log(value);
    filterAccPrice(value);
}
function filterAccPrice(value) {
    if (value == "") displayData(mainData);
    else {
        let filteredData = [];
        if (value == 99) {
            mainData.forEach((ele) => {
                if (ele.price > 99 && ele.price < 500) filteredData.push(ele);
            })
        }
        else if (value == 500) {
            mainData.forEach((ele) => {
                if (ele.price > 499 && ele.price < 1000) filteredData.push(ele);
            })
        }
        else if (value == 1000) {
            mainData.forEach((ele) => {
                if (ele.price > 999) filteredData.push(ele);
            })
        }

        console.log(filteredData);
        displayData(filteredData);
    }
}

document.getElementById("htl").addEventListener("click", sortHtl);

function sortHtl() {
    mainData.sort(function (a, b) {
        return b.price - a.price;
    });
    displayData(mainData);
}
document.getElementById("lth").addEventListener("click", sortLth);

function sortLth() {
    mainData.sort(function (a, b) {
        return a.price - b.price;
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