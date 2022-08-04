import React from 'react';
import '../styles/signup.css';
import signup from '../images/signup.png'
const SignUpComp = () => {
  return (
    <div className=''>
      <div className=''>
        {
         <div class="flex-contain">
         <div class="flex-item-2">
           <img id="flex-img" src={signup} alt="img1" />
         </div>
         <div class="flex-item-1">
           <div class="known">
             <div class="tnav">
               <img src="/svg/svg" alt="" />
               <div id="myLinks">
                 <a href="HomePage.jsx">Home</a>
                 <a href="SignInComp.jsx">Sign In</a>
                 <a href="ContactUsComp.jsx">Contact Us</a>
               </div>
               {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                 <i class="fa fa-bars"></i>
               </a> */}
             </div>
           </div>
           <img id="img-desktop" src="/svg/svg" alt="" />
           <p id="p-1">Sign up</p>
 
           <form class="forme">
             <label for="name">Full name*</label><br /><br />
             <input
               type="text"
               class="fname"
               name="text"
               required=""
               placeholder="Enter your full name"
             /><br /><br />
 
             <label for="email">Email address*</label><br /><br />
             <input
               type="email"
               class="email"
               name="email"
               required=""
               placeholder="Enter your Email Address"
             /><br /><br />
 
             <label for="pswd">Password*</label><br /><br />
             <input
               type="password"
               name="password"
               placeholder="******************"
               class="pswd01"
               autocomplete="current-password"
               required=""
               id="id_password"
             />
             <i class="far fa-eye"
               id="togglePassword"></i>
             <script src="signup.js"></script>
             <p id="p-2"
               ><small
                 >By clicking the button you are agreeing to our
                 <a href="HomePage.jsx" class="bold-1"> Terms of services</a>
               </small></p
             ><br />
             <button class="btn-a">Sign Up</button><br />
             <small id="small2">Already have an account? <a href="SignInComp.jsx" class="bold-2">Sign In</a></small>
           </form>
         </div>
       </div>
    }
      </div>
    </div>
  );
};

export default SignUpComp;
