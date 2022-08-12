import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/school-register.css';
import '../styles/schoolsadmin.css';
const SchoolRegistrationComp = () => {
  const [showNext, setShowNext] = useState(false);
  return (
    <div className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      {!showNext && (
        <div>
          <header class='first-reg'>
            <h2>School Registration</h2>
          </header>
          <main>
            <form className='Reg-form'>
              <div className='form-group'>
                <label htmlFor='reg-parent' className='reg-label'>
                  Name of School
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-parent'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-category' className='reg-label'>
                  School Category
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-category'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-contact' className='reg-label'>
                  Description
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-contact'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-schaddress' className='reg-label'>
                  School Address
                </label>
                <input
                  type='text'
                  className='reg-input'
                  id='reg-schaddress'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-num' className='reg-label'>
                  Contact Number
                </label>
                <input type='tel' className='reg-input' id='reg-num' required />
              </div>
              <div className='form-group'>
                <label htmlFor='reg-email' className='reg-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='reg-input'
                  id='reg-parent'
                  required
                />
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
                <label htmlFor='myregdoc' className='attact'>
                  Attact Document
                </label>
                <br />
                <input
                  type='file'
                  id='myregdoc'
                  name='myfile'
                  multiple
                  className='file'
                />
                <br />
                <br />
              </div>
              <label htmlFor='' className='reg-label'></label>
              <input
                type='submit'
                value='Upload Document'
                className='reg-input reg-btn01'
              />
            </form>
            <div className='next-btn'>
              <button id='next-nav' onClick={() => setShowNext(true)}>
                Next
              </button>
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

          </main>
        </div>
      )}
      {showNext && (
        <div class='f-item-1'>
          <h2 id='Sch-admin'>School admin</h2>

          <form class='form'>
            <label for='name' id='lab'>
              Name of proprietor
            </label>
            <input type='text' class='proname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Proprietor's Email
            </label>
            <input type='Email' class='proemail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of principal
            </label>
            <input type='text' class='prinname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Principal's Email
            </label>
            <input type='email' class='prinemail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />

            <label for='name' id='lab'>
              Name of Busar
            </label>
            <input type='text' class='burname' id='text' />
            <br />
            <br />

            <label for='email' id='lab'>
              Bursar's Email
            </label>
            <input type='email' class='buremail' id='email' />
            <br />
            <br />

            <label for='number' id='lab'>
              Phone number
            </label>
            <input type='number' class='pronumber' id='number' />
            <br />
            <br />
            <Link
              to='/dashboard'
              class='tw-w-full tw-rounded-lg tw-bg-blue-800 tw-px-8 tw-py-2 tw-text-white tw-no-underline tw-shadow-lg tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
            >
              Submit
            </Link>
          </form>

        </div>
      )}
    </div>
  );
};

export default SchoolRegistrationComp;
