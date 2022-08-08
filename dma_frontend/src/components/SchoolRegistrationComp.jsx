import React from 'react';
import '../styles/school-register.css';

const SchoolRegistrationComp = () => {
  return (
    <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      <header class='first-reg'>
        <h2>School Registration</h2>
      </header>
      <main>
        <form className='Reg-form'>
          <label htmlFor='reg-parentname'>Parent's Name</label>
          <br />
          <input type='text' className='reg-parent' name='Parent' required='' />
          <br />
          <br />
          <label htmlFor='reg-description'>Description</label>
          <br />
          <input
            type='text'
            className='reg-description'
            name='description'
            required=''
          />
          <br />
          <br />
          <label htmlFor='reg-category'>School Category</label>
          <br />
          <input type='text' className='reg-cat' name='Category' required='' />
          <br />
          <br />
          <label htmlFor='reg-schaddress'>School Address</label>
          <br />
          <input
            type='text'
            className='reg-schaddress'
            name='school'
            required=''
          />
          <br />
          <br />
          <label htmlFor='reg-contact'>Contact Number</label>
          <br />
          <input
            type='number'
            className='reg-contact'
            name='contact'
            required=''
          />
          <br />
          <br />
          <label htmlFor='reg-email'>Email address</label>
          <br />
          <input type='emailr' className='reg-email' name='email' required='' />
          <br />
          <br />
          <div className='reg-doc'>
            <div>
              <h3>Upload document</h3>
            </div>
            <div>
              <p>
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
            <label htmlFor='sel-doc'>Title</label>
            <br />
            <select name='sch-cert' id='sch-certificate'>
              <option value='The certificate for schools'>
                The certificate for schools
              </option>
              <option value='School registration certificate'>
                School registration certificate
              </option>
              <option value='Approval by ministry of education'>
                Approval by ministry of education
              </option>
            </select>
            <br />
            <br />
            <br />
            <br />
            <label htmlFor='myregdoc'>Attact Document</label>
            <input type='file' id='myregdoc' name='myfile' multiple />
            <br />
            <br />
          </div>
          <button className='reg-btn01'>Upload Document</button>
        </form>
      </main>
    </div>
  );
};

export default SchoolRegistrationComp;
