//import navbar here
//import footer here

let productList = document.getElementById("products-list");

let carousalContainer = document.getElementById("carousal");
slideshow();

let images = [ "https://cdn.shopclues.com/images/banners/Tirtan_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/UltimateSmartphones_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/TopSellingFeaturePhone_M_T_HB_W.jpg",
    "https://cdn.shopclues.com/images/banners/Phones_Gadgets_M_T_HB_W.jpg",
   "https://cdn.shopclues.com/images/banners/StylishTablets_M_T_HB_W.jpg"
]
function slideshow(){
    let i=0;
    let image = document.createElement("img");
    let id = setInterval(function(){
        if(i === 5) i = 0;
        image.src = images[i];
        carousalContainer.append(image);
        i++;
    }, 4000)
}

fetchData()

async function fetchData(){
    let res = await fetch("https://shopclues-project-data.onrender.com/Mobile");
    let data = await res.json();
    console.log(data);
    displayData(data);
}

function displayData(data){
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

        div.addEventListener("click", function(){
            storeProduct(ele);
        });

        productList.append(div);
    });
}

function storeProduct(ele){
    let product = JSON.parse(localStorage.getItem("product")) || {};
    product = ele;
    localStorage.setItem("product", JSON.stringify(product));
    window.location.href = "productDetails.html";
}