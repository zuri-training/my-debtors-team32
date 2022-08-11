import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/school-register.css';


const SchoolRegistrationComp = () => {
  return (
    <div className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      <header class='first-reg'>
        <h2>School Registration</h2>
      </header>
      <main>
        <form className='Reg-form'>
          <div className="form-group">
            <label htmlFor='reg-parent' className='reg-label'>Name of School</label>
            <input type='text' className='reg-input' id='reg-parent' required />
          </div>
          <div className="form-group">
            <label htmlFor='reg-category' className='reg-label'>School Category</label>
            <input type='text' className='reg-input' id='reg-category' required />
          </div>
          <div className="form-group">
            <label htmlFor='reg-contact' className='reg-label'>Description</label>
            <input type='text' className='reg-input' id='reg-contact' required />
          </div>
          <div className="form-group">
            <label htmlFor='reg-schaddress' className='reg-label'>School Address</label>
            <input type='text' className='reg-input' id='reg-schaddress' required />
          </div>
          <div className="form-group">
            <label htmlFor='reg-num' className='reg-label'>Contact Number</label>
            <input type='tel' className='reg-input' id='reg-num' required />
          </div>
          <div className="form-group">
            <label htmlFor='reg-email' className='reg-label'>Email address</label>
            <input type='email' className='reg-input' id='reg-parent' required />
          </div>
          
          <div className='reg-doc'>
            <div>
              <h3 className='reg-text'>Upload document</h3>
            </div>
            <div>
              <p className='reg-text--2'>
                The certificate for schools <br />
                <br />
                School registration certificate <br />
                <br />
                Approval by ministry of education
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className='reg-title'>
          <div className="input">
<label htmlFor="myregdoc" className="attact"
>The Certificate for schools:</label
><br /><br />
<div className="sub-reg-input01">
<input
  type="file"
  id="myregdoc"
  name="myfile"
  multiple
  className="file"
/> </div
><br />
<label htmlFor="myregdoc" class="attact"
>School Registration certificate:</label
><br /><br />
<div className="sub-reg-input02">
<input
  type="file"
  id="myregdoc"
  name="myfile"
  multiple
  className="file"
/> </div
><br />
<label htmlFor="myregdoc" className="attact"
>Approval by ministry of Education:</label
><br /><br />
<div className="sub-reg-input03">
<input
  type="file"
  id="myregdoc"
  name="myfile"
  multiple
  className="file"
/>
</div>
</div>
          <br />
          <br />
          </div>
          <label htmlFor="" className='reg-label'></label>
          <input type="submit" value='Upload Document' className='reg-input reg-btn01' />
        </form>
        <div className='next-btn'>
          <Link to='./schooladmin.html' id="next-nav">Next</Link>
        </div>
      </main>
    </div>
  );
};

export default SchoolRegistrationComp;
