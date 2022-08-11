import React from 'react'
import HeaderLayoutComp from './layout/HeaderLayout';
import '../styles/update-debtor.css';

const UpdateDebtorComp = () => {
  return (
    <div>
        <HeaderLayoutComp />
        {
          <div class="debtor-form">   
          <h1>Update Debtor</h1>
            <form action="" method="post">
              <div class="grid-container"> 
                <label class="block">
                  Student Name
                  <input type="text" placeholder="Enter Student's Name"/>
                </label>
                <label class="block">
                  Name of parent
                  <input type="text" placeholder="Enter Parent's name" class="block"/>
                </label>
                <label class="block">
                  Email
                  <input type="email" name="email" id="email" placeholder="Enter Parent's Email"/>
                </label>
                <label class="block">
                  Phone number
                  <input type="tel" name="tel" id="tel" placeholder="Enter Parent's Phone Number"/>
                </label>
                <label class="block">
                  Amount
                  <input type="number" name="amount" id="amount" placeholder="Enter Amount"/>
                </label>
                <label class="block">
                  Debt status
                  <input type="text" name="item" id="item" placeholder="Enter Debtor's Name"/>
                </label>
                <label class="block">
                  Name of School
                  <input type="text" name="item" id="item" placeholder="Enter School's Name"/>
                </label>
                <label>
                  <input type="submit" value="Update" id="btn"/>
                </label>
              </div>     
            </form>    
        </div>
        }
    </div>
  )
}

export default UpdateDebtorComp;