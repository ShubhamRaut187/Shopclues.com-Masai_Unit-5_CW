let product = JSON.parse(localStorage.getItem("product"));

displayProductDetails();

function displayProductDetails(){

    let img = document.createElement("img");
    img.src = product.img_1;

    document.getElementById("main-image").append(img);

    let img1 = document.createElement("img");
    img1.src = product.img_1;
    img1.addEventListener("click", function displayImage(){
        document.getElementById("main-image").innerHTML = null;
        let img = document.createElement("img");
        img.src = product.img_1;
        document.getElementById("main-image").append(img);
    });

    let img2 = document.createElement("img");
    img2.src = product.img_2;
    img2.addEventListener("click", function displayImage(){
        document.getElementById("main-image").innerHTML = null;

        let img = document.createElement("img");
        img.src = product.img_2;
        document.getElementById("main-image").append(img);
    });

    let img3 = document.createElement("img");
    img3.src = product.img_3;
    img3.addEventListener("click", function displayImage(){
        document.getElementById("main-image").innerHTML = null;
        let img = document.createElement("img");
        img.src = product.img_3;
        document.getElementById("main-image").append(img);
    });

    document.getElementById("small-images").append(img1, img2, img3);

    let name = document.createElement("p");
    name.textContent = product.name;
    name.style.fontSize  = "23px";

    let div = document.createElement("div");
    let brand = document.createElement("p");
    brand.textContent = product.brand;
    brand.style.color = "blue";
    brand.style.marginRight = "10px";
    let id = document.createElement("p");
    id.textContent = "Product Id : " + product.id;
    id.style.color = "grey";
    div.id = "brandDiv";
    div.append(brand, id);

    let logo = document.createElement("img");
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq8i_dGF3q503Jiv8cT1LelCWk9CDSYmPiQ&usqp=CAU";
    logo.style.width = "100px";

    let money = document.createElement("div");
    let price = document.createElement("h2");
    price.textContent = "₹" + product.price;
    let mrp = document.createElement("p");
    mrp.textContent = "MRP:₹" + product.mrp;
    mrp.style.textDecoration = "line-through";
    mrp.style.color = "grey";
    let disc = document.createElement("p");
    disc.textContent = product.percent_off;
    disc.style.color = "lightseagreen";
    disc.style.fontWeight = "bold";
    money.id = "money";
    money.append(price, mrp, disc);

    let tax = document.createElement("p");
    tax.textContent = "Inclusive of all taxes";
    tax.style.color = "grey";
    tax.style.fontSize = "15px";

    let extraOff1 = document.createElement("p");
    extraOff1.textContent = "Extra CluesBucks+ only on VIP Club.";
    extraOff1.style.color = "grey";
    extraOff1.style.fontSize = "15px";

    let extraOff2 = document.createElement("p");
    extraOff2.textContent = "2 offers Available for you";
    extraOff2.style.fontSize = "20px";

    /*let size = document.createElement("p");
    size.textContent = "Select Size : ";
    size.style.fontSize = "20px";

    let allSizes = document.createElement("div"); 
    let s1 = document.createElement("span");
    s1.textContent = "XS";
    let s2 = document.createElement("span");
    s2.textContent = "S";
    let s3 = document.createElement("span");
    s3.textContent = "M";
    let s4 = document.createElement("span");
    s4.textContent = "L";
    let s5 = document.createElement("span");
    s5.textContent = "XL";
    allSizes.id = "allSizes";
    allSizes.append(s1, s2, s3, s4, s5);*/

    let addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "ADD TO CART";
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.addEventListener("click", addItemToCart);

    let delDetails = document.createElement("p");
    delDetails.textContent = "COD Available   |   Free Shipping   |   Delivered in 2-5 Business Days";
    delDetails.style.color = "grey";

    let retDetails = document.createElement("p");
    retDetails.textContent = "Easy Returns & Replacement";
    retDetails.style.color = "grey";

    let payDetails = document.createElement("p");
    payDetails.textContent = "Payment Options: (Credit Card, Debit Card, Net Banking, Wallets, COD)";
    payDetails.style.color = "grey";

    document.getElementById("product-desc").append(name, div, logo, money, tax, extraOff1, extraOff2, addToCartBtn, delDetails, retDetails, payDetails)

    let para = document.createElement("p");
    para.textContent = "SOLD BY : ";
    para.style.color = "grey";

    let h3 = document.createElement("h3");
    h3.textContent = product.brand;

    let loc = document.createElement("p");
    loc.textContent = "New Delhi, Delhi";
    loc.style.color = "grey";

    document.getElementById("brand-details").append(para, h3, loc);

    document.getElementById("oneline-desc").textContent = product.name;
    document.getElementById("prod-desc").textContent = product.description;

    

}

function addItemToCart(){
    let cartItems = JSON.parse(localStorage.getItem("aadToCart1")) || [];
    cartItems.push(product);
    localStorage.setItem("aadToCart1", JSON.stringify(cartItems));
}