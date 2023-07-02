let loginPopup = ()=>{
    return ` <div id="popupOnNav">
    <div class="popup">
        <div class="overlay"></div>
            <div class="Login-signup-popup">
                <span onclick="togglePopup()" class="close-btn"> &#10006</span>
                <div id="left">
                    <div class="sume-card">
                        <img src="images/rupee.jpeg"
                            alt="">
                        <h6>Loyalty Points</h6>
                        <p>Earn CluesBucks on prepaid orders</p>
        
                    </div>
                    <div class="sume-card">
                        <img src="images/cart.jpeg"
                            alt="">
                        <h6>Instant Checkout</h6>
                        <p>Hassle-Free Payment Everytime</p>
                    </div>
                    <div class="sume-card">
                        <img src="images/par.jpeg"
                            alt="">
                        <h6>Exclusive Offers</h6>
                        <p>For special offers &amp; value deals</p>
                    </div>
        
                </div>
                <div id="right">
                <div>
                  <span id="back-btn">&lt; Back</span>
                  <h2 id="verificatName-otp">Verification</h2>
                  <p id="mas-otp">Please enter the OTP sent to your laptop screen.</p>
                  <div id="form-otp">
                   
                    <input id="input-otp" type="number" required placeholder="Enter OTP" >
                    
                    <button id="verifyBtn-otp">Verify &amp; Login</button>
                  </div>
                </div>
              </div>

                <div id="right-login">
                    <div id="tabs">
                        <a id="login">LOGIN</a>
                        <a id="on-login-register-btn">REGISTER</a>
                    </div>
                    <div class="login-form">
        
        
                        <input id="input" type="email" required placeholder="Enter your mobile number or email id" >
                       
                        <span id="red-error"></span>
                        <button  id="login-btn">Login Via OTP</button>
        
                    </div>
                    <div id="other">
                        <h6>Social Login</h6>
                        <div id="fb-btn">
                            <a
                                href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxMjgwNDQ1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                                <img
                                    src="images/fb.jpeg">
                            </a>
                        </div>
        
                    </div>
                </div>
               
                <!-- --------------------------------------------------- register page ------------------------------------------- -->
                <div id="right-register">
                    <div id="tabs">
                        <a id="login-register">LOGIN</a>
                        <a id="register">REGISTER</a>
                    </div>
                    <div class="login-form">
        
                        <form id="form">
                            <div class="input">
        
                                <input id="email" type="email" required placeholder="Enter your email id">
                               
                            </div>
                            <span id="email-alert"></span>
                            <div class="input">
        
                                <input id="numberI" type="number" required placeholder="Enter your mobile number">
                               
                            </div>
                            <span id="number-alert"></span>
                            <div id="password" class="input">
        
                                <input id="passwordI" type="password" required  placeholder="Enter your password">
                                
                            </div>
                            <div id="checkbox">
                                <input type="checkbox" checked>
                                <div>
                                    <label>Register with Password</label>
                                    <h6>By Registering you accept our <a href="http://www.shopclues.com/user-agreement.html">
                                            User Agreement</a>
                                        and <a href="http://www.shopclues.com/privacy-policy.html">Privacy Policy</a> </h6>
                                </div>
        
        
                            </div>
                            <input id="submit-btn" type="submit" value="Register">
        
        
        
                        </form>
        
        
                    </div>
                    <div id="other">
                        <h6>Social Login</h6>
                        <div id="fb-btn">
                            <a
                                href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxMjgwNDQ1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                                <img
                                    src="images/fb.jpeg">
                            </a>
                        </div>
        
                    </div>
                </div>
            </div>
           
            </div>
</div>`
}

export default loginPopup;




// ---------------------------------------------------------------------------------------------------------------------------all-js-part----------------------------------------------------------------------------------------------------------------------------//