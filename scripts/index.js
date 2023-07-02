import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
import loginPopup from "./loginPopup.js";
let loginPopupD = document.getElementById("loginPopup");
loginPopupD.innerHTML = loginPopup();
let n = document.getElementById("navbar");
n.innerHTML = navbar();

let f = document.getElementById("footer");
f.innerHTML = footer();

let slideshow_img = [
  "https://cdn.shopclues.com/images/banners/2023/Mar/21/HB1_BestOfFootwear_Web_SYM_21Mar23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/Mar/25/HB2_Refurbished_Web_SYM_25Mar23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/Mar/04/HB4_Aromapure_Web_SYM_04Mar23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/Mar/29/HB4_Web_App_SYM_29Mar23.jpg",
  "https://cdn.shopclues.com/images/banners/2023/Mar/04/HB5_Asus_Web_SYM_04Mar23.jpg",
];

let slideshow = () => {
  let index = 0;
  let slideshow_div = document.getElementById("slideshow_imges_div");
  let slideshow_image = document.createElement("img");
  slideshow_image.setAttribute("class", "slideshow_image");
  setInterval(() => {
    slideshow_image.setAttribute("src", slideshow_img[index]);
    slideshow_div.append(slideshow_image);
    index++;
    if (index === slideshow_img.length) {
      index = 0;
    }
  }, 4000);
};
slideshow();

//Data
let dealsofday_parent = document.getElementById("parent_dealsofday");
let Homepage_dealsofday_api =
  "https://shopclues-project-data.onrender.com/Homepagedealsofday";

let gadgetstore_parent = document.getElementById("parent_gadgetstore");
let Homepage_gadgetstore_api =
  "https://shopclues-project-data.onrender.com/Homepagegadgetstore";

let festivespecial_parent = document.getElementById("parent_Festivespecials");
let Homepage_festivespecial_api =
  "https://shopclues-project-data.onrender.com/Homepagefestivalstore";

let fasionzone_parent = document.getElementById("parent_fasionzone");
let Homepage_fasionzone_api =
  "https://shopclues-project-data.onrender.com/Homepagefashionzone";

let sportsandhealth_parent = document.getElementById("parent_sportsandhealth");
let Homepage_sports_api =
  "https://shopclues-project-data.onrender.com/Homepagesports";

let brandstore_parent = document.getElementById("parent_brand_store");
let Homepage_brandstore_api =
  "https://shopclues-project-data.onrender.com/Homepagebrandstore";

let brandeddeals_parent = document.getElementById("parent_branded_deals");
let Homepage_brandeddeals_api =
  "https://shopclues-project-data.onrender.com/Homepagebranddeals";
// Fetch Function
let fetchdata = (api_link, parent_element) => {
  let product_data = [];
  fetch(api_link)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      product_data = response;
      displaydata(product_data, parent_element);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
//Display Function
let displaydata = (data, parent) => {
  data.map((elem) => {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "homepage_product_card");
    div1.addEventListener("click", function () {
      productdetails(elem);
    });

    let div2 = document.createElement("div");
    div2.setAttribute("class", "homepage_product_img_div");

    let product_img = document.createElement("img");
    product_img.setAttribute("class", "homepage_product_img");
    product_img.setAttribute("src", elem.img_1);
    product_img.setAttribute("alt", elem.name);

    div2.append(product_img);

    let div3 = document.createElement("div");
    div3.setAttribute("class", "homepage_product_details_div");

    let Name_p = document.createElement("p");
    Name_p.setAttribute("class", "homepage_product_name");
    Name_p.textContent = elem.name;

    let Details_p = document.createElement("p");

    let sp1 = document.createElement("span");
    sp1.setAttribute("class", "span1");
    sp1.textContent = "₹" + elem.price + "  ";

    let sp2 = document.createElement("span");
    sp2.setAttribute("class", "span2");
    sp2.textContent = "₹" + elem.mrp + "  ";

    let sp3 = document.createElement("span");
    sp3.setAttribute("class", "span3");
    sp3.textContent = "₹" + elem.percent_off;

    Details_p.append(sp1, sp2, sp3);

    div3.append(Name_p, Details_p);
    div1.append(div2, div3);
    parent.append(div1);
  });
};
let productdetails = (elem) => {
  localStorage.setItem("product", JSON.stringify(elem));
  location.href = "productDetails.html";
  // alert("added");
};

// Function Calling
fetchdata(Homepage_dealsofday_api, dealsofday_parent);
fetchdata(Homepage_gadgetstore_api, gadgetstore_parent);
fetchdata(Homepage_festivespecial_api, festivespecial_parent);
fetchdata(Homepage_fasionzone_api, fasionzone_parent);
fetchdata(Homepage_sports_api, sportsandhealth_parent);
fetchdata(Homepage_brandstore_api, brandstore_parent);
fetchdata(Homepage_brandeddeals_api, brandeddeals_parent);

//Navbar Functions
let gotohome = () => {
  location.href = "index.html";
};
document.getElementById("logo_img").addEventListener("click", gotohome);

let handlesearch = () => {
  let search_category = document.getElementById("searchBar").value;
  if (
    search_category === "Men" ||
    search_category === "men" ||
    search_category === "Mens" ||
    search_category === "mens" ||
    search_category === "Mens clothing" ||
    search_category === "mens clothing"
  ) {
    location.href = "men.html";
  } else if (
    search_category === "Women" ||
    search_category === "women" ||
    search_category === "Womens" ||
    search_category === "womens" ||
    search_category === "Womens clothing" ||
    search_category === "womens clothing"
  ) {
    location.href = "women.html";
  } else {
    location.href = "mobiles.html";
  }
};
document.getElementById("search_btn").addEventListener("click", handlesearch);

let gotomobiles = () => {
  location.href = "mobiles.html";
};
document
  .getElementById("active_btn_mobiles")
  .addEventListener("click", gotomobiles);

let gotomen = () => {
  location.href = "men.html";
};
document.getElementById("active_btn_men").addEventListener("click", gotomen);

let gotowomen = () => {
  location.href = "women.html";
};
document
  .getElementById("active_btn_women")
  .addEventListener("click", gotowomen);







  var loginArr = JSON.parse(localStorage.getItem("account-data")) || [];
  var accounts = JSON.parse(localStorage.getItem("account-data")) || [];
  
  var otpGenerated = false; // Track if OTP has been generated
  
  function handleForm(event) {
    event.preventDefault();
    var emailI = document.querySelector("#input").value;
    let redAlert = document.querySelector("#red-error");
    redAlert.textContent = "";
  
    if (loginArr.length > 0) {
      let accountExists = false;
      for (let i = 0; i < loginArr.length; i++) {
        if (loginArr[i].email === emailI || loginArr[i].number === emailI) {
          accountExists = true;
          if (!otpGenerated) {
            generateOTP();
        
          } else {
            verifyOTP();
          }
          break;
        }
      }
      if (!accountExists) {
        redAlert.textContent =
          "Account doesn't exist with this email id or number. Register now";
        document.querySelector("#input").value = "";
      }
    } else {
      redAlert.textContent =
        "Account doesn't exist with this email id or number. Register now";
      document.querySelector("#input").value = "";
    }
  }
  
  function generateOTP() {
    var length = 4;
    var chars = "0123456789";
    var otp = "";
    for (var i = 0; i < length; i++) {
      otp += chars[Math.floor(Math.random() * chars.length)];
    }
    // otpGenerated = true; // Set otpGenerated to true
  
    document.querySelector("#right").style.display = "block";
    document.querySelector("#right-login").style.display = "none";
  
    let backIcon = document.querySelector("#back-btn");
    backIcon.addEventListener("click", () => {
      document.querySelector("#right-login").style.display = "block";
      document.querySelector("#right").style.display = "none";
    });
  
    alert(
      otp +
        " : is your OTP for " +
        document.querySelector("#input").value +
        " to access ShopClues.com"
    );
  
    let verifyBtn = document.querySelector("#verifyBtn-otp");
    verifyBtn.addEventListener("click", verifyOTP);
  
    function verifyOTP() {
      let userOTP = document.getElementById("input-otp").value;
  
      if (otp === userOTP) {
        console.log("OTP verification successful");
        alert("OTP Verified Successfully");
        var otpGenerated = true
        togglePopup();
      } else {
        console.log("OTP verification failed");
        alert("Please enter a valid OTP");
        
        userOTP.value = "";
      }
    }
  }
  
  let popupmain = document.querySelector(".Login-signup-popup");
  
  let loginPage = document.querySelector("#right-login");
  let registerPage = document.querySelector("#right-register");
  
  let registerBtn = document.querySelector("#on-login-register-btn");
  let loginBtn = document.querySelector("#login-register");
  let loginInput = document.querySelector("#input");
  
  registerBtn.addEventListener("click", () => {
    loginPage.style.display = "none";
    registerPage.style.display = "block";
    loginInput.value = ""; // Reset the login input value
  });
  
  loginBtn.addEventListener("click", () => {
    loginPage.style.display = "block";
    registerPage.style.display = "none";
    loginInput.value = ""; // Reset the login input value
  });
  
  document.querySelector("#login-btn").addEventListener("click", handleForm);
  
  const signupForm = document.querySelector("#submit-btn");
  
  signupForm.addEventListener("click", function (event) {
    event.preventDefault();
  
    const mobilNumber = document.querySelector("#numberI");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#passwordI")
    
    if (
      accounts.find((account) => account.email === emailInput.value) ||
      loginArr.find((account) => account.email === emailInput.value)
    ) {
      let redAlertE = document.querySelector("#email-alert");
      redAlertE.textContent =
        "Account already exists with this email. Please login.";
      let redAlertN = document.querySelector("#number-alert");
      redAlertN.textContent =
        "Account already exists with this mobile number. Please login.";
  
      return;
    }
  
    const newAccount = {
      number: mobilNumber.value,
      email: emailInput.value,
      password: passwordInput.value,
    };
  
    accounts.push(newAccount);
    loginArr.push(newAccount); // Update loginArr with the new account data
  
    localStorage.setItem("account-data", JSON.stringify(accounts));
  
    alert("Account created successfully!");
    document.querySelector("#right-login").style.display = "block";
    document.querySelector("#right-register").style.display = "none";
  
    mobilNumber.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  });
  
  const otpLoginForm = document.querySelector("#otp-login-form");
  otpLoginForm.addEventListener("submit", handleForm);
  