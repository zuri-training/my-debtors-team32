import React from 'react'
import HeaderLayoutComp from './layout/HeaderLayout';
import '../styles/update-debtor.css';

const UpdateDebtorComp = () => {
  return (
    <div>
        <HeaderLayoutComp />
        {
          <div className="debtor-form">   
          <h1>Update Debtor</h1>
            <form action="" method="post">
              <div className="grid-container"> 
                <label className="block">
                  Student Name
                  <input type="text" placeholder="Enter Student's Name"/>
                </label>
                <label className="block">
                  Name of parent
                  <input type="text" placeholder="Enter Parent's name" className="block"/>
                </label>
                <label className="block">
                  Email
                  <input type="email" name="email" id="email" placeholder="Enter Parent's Email"/>
                </label>
                <label className="block">
                  Phone number
                  <input type="tel" name="tel" id="tel" placeholder="Enter Parent's Phone Number"/>
                </label>
                <label className="block">
                  Amount
                  <input type="number" name="amount" id="amount" placeholder="Enter Amount"/>
                </label>
                <label className="block">
                  Debt status
                  <input type="text" name="item" id="item" placeholder="Enter Debtor's Name"/>
                </label>
                <label className="block">
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