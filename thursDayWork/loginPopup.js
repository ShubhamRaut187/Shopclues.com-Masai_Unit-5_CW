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
                <div id="right-login">
                    <div id="tabs">
                        <a id="login">LOGIN</a>
                        <a id="on-login-register-btn">REGISTER</a>
                    </div>
                    <div class="login-form">
        
        
                        <input id="input" type="email">
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
                                    src="https://lh3.googleusercontent.com/8p_88tjZbsrD0Nc_KLiVdvJL5KZn4ZRd8XoPdY3RZa7Bkf7wehvdtqbZ-FCDToEbOu0bBkfJLgSY1NhDtkvOf00U-hqsa9z7xFEo0mHN">
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
        
                                <input id="email" type="email">
                                <label id="emailL"for="email">Enter your email id</label>
                            </div>
                            <span id="email-alert"></span>
                            <div class="input">
        
                                <input id="numberI" type="number">
                                <label id="mobileL" for="number">Enter your mobile number</label>
                            </div>
                            <span id="number-alert"></span>
                            <div id="password" class="input">
        
                                <input id="passwordI" type="password">
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
                                    src="https://lh3.googleusercontent.com/8p_88tjZbsrD0Nc_KLiVdvJL5KZn4ZRd8XoPdY3RZa7Bkf7wehvdtqbZ-FCDToEbOu0bBkfJLgSY1NhDtkvOf00U-hqsa9z7xFEo0mHN">
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
