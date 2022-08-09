import React from 'react';
import HeaderLayoutComp from './layout/HeaderLayout';
import '../styles/forgot-password.css';

const ForgotPasswordComp = () => {
  return (
    <div>
        <HeaderLayoutComp />
        {
          <div class="form-container">
          <div class="image">
              <img src="./forgotPass.jpg" alt="forgot-password"/>
          </div>
          <h2>Don't panic, Recover your account with ease!</h2>
          <div class="forgot-pwd-form">
              <p>Please enter your details</p>
              <form action="" method="post" class="first-form">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter Your Email"/>       
              </form>
              <p class="code">A code will be sent to your email</p>
              <button type="submit" class="btn receive-btn">Receive Code</button>
              <form action="" method="post" class="second-form">
                  <div>
                      <label for="code">Enter code</label>
                      <input type="password" name="code" id="code"/>
                  </div>
                  <div>
                      <label>New Password</label>
                      <input type="new-password" name="new-password" id="new-password"/>
                  </div>
                  <div>
                      <label for="confirm-password">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password"/>
                  </div>
                  <button type="submit" class="btn submit-btn">Submit</button>    
              </form>    
          </div>    
    </div>    
        }
    </div>
  )
}

export default ForgotPasswordComp