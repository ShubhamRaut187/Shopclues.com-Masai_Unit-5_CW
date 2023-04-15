let loginPopup = ()=>{
    return ` <div id="popupOnNav">
    <div class="popup">
        <div class="overlay"></div>
            <div class="Login-signup-popup">
                <span onclick="togglePopup()" class="close-btn"> &#10006</span>
                <div id="left">
                    <div class="sume-card">
                        <img src="https://lh3.googleusercontent.com/nircuYNxhb9xmkSa0TnNdLntRXRQBvcZuRvJ5_EojwwXy6ukDt7_BQy_-Vbldf26WHBKcxQnFlb5-OdfNxgeAjJFLH4YYsCw2bdC9u0z"
                            alt="">
                        <h6>Loyalty Points</h6>
                        <p>Earn CluesBucks on prepaid orders</p>
        
                    </div>
                    <div class="sume-card">
                        <img src="https://lh3.googleusercontent.com/KFWdTn49Ms8G_M_yLbNtuO4cEoz2L1TLqXB3oGK82qiKRhi9YofeLMO8UMgcQOxmjKNSzqfkdAEvToK14-TVN-cyv91iQimHr7lNGh9q"
                            alt="">
                        <h6>Instant Checkout</h6>
                        <p>Hassle-Free Payment Everytime</p>
                    </div>
                    <div class="sume-card">
                        <img src="https://lh3.googleusercontent.com/SGf5zr1EZp2QMU7vixY-pW2TNGacDcfxMzGclbS5WG9zVdPrpMm4xAq1JWlcUjxfW8p16OfVjzpFl0VE0mOYnCwtLFYSrfbMXZla1Gw"
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
                   
                    <input id="input-otp" type="number" required>
                    <label id="label-otp">Enter OTP</label>
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
        
        
                        <input id="input" type="email" required >
                        <label id="label" for="">Enter your mobile number or email id</label>
                        <span id="red-error"></span>
                        <button  id="login-btn">Login Via OTP</button>
        
                    </div>
                    <div id="other">
                        <h6>Social Login</h6>
                        <div id="fb-btn">
                            <a
                                href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjgxMjgwNDQ1LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D">
                                <img
                                    src="data:image/png;base64,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">
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
        
                                <input id="email" type="email" required>
                                <label id="emailL"for="email">Enter your email id</label>
                            </div>
                            <span id="email-alert"></span>
                            <div class="input">
        
                                <input id="numberI" type="number" required>
                                <label id="mobileL" for="number">Enter your mobile number</label>
                            </div>
                            <span id="number-alert"></span>
                            <div id="password" class="input">
        
                                <input id="passwordI" type="password" required>
                                <label id="passwordL"for="password">Enter your password</label>
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
                                    src="data:image/png;base64,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">
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