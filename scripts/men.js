let carousalContainer = document.getElementById("carousal");
window.onload = slideshow();

let images = [ "https://cdn.shopclues.com/images/banners/NewArrival_HB_Desk_Satin.jpg",
            "https://cdn.shopclues.com/images/banners/Shirt_HB_Desk_Satin.jpg",
            "https://cdn.shopclues.com/images/banners/Shrit_11thAug_M_PR1.jpg",
            "https://cdn.shopclues.com/images/banners/Jeans_11thAug_M_PR1.jpg",
             "https://cdn.shopclues.com/images/banners/MensClothing_11thAug_M_PR1.jpg"
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


let productList = document.getElementById("products-list");

fetchData()

async function fetchData(){
    let res = await fetch("https://shopclues-project-data.onrender.com/Mens");
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