import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/school-register.css';
import '../styles/schoolsadmin.css';
// import Toast from 'react-bootstrap/Toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SchoolRegistrationComp = () => {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(false);

  const showToast = () => {
    toast.success(
      `
    🎉 Regristration Complete. You will be sent a confirmation mail once all your details have been
          confirmed
    `,
      {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  return (
    <div
      className='reg tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'
      id='top-page-reg'
    >
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
                    Approval by ministry of Education
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className='reg-title'>
                <form action=''>
                  <div>
                    <label htmlFor='file1'>The certificate for schools:</label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                    <br />
                    <label htmlFor='file1'>
                      School registration certificate:
                    </label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                    <br />
                    <label htmlFor='file1'>
                      Approval by ministry of Education:
                    </label>
                    <br />
                    <br />
                    <div className='file-lab'>
                      <input type='file' id='myFile' name='filename' />
                    </div>
                  </div>
                </form>
              </div>{' '}
              <br />
              <br />
              <label htmlFor='' className='reg-label'></label>
              <input
                type='submit'
                value='Upload Document'
                className='reg-input reg-btn01'
              />
            </form>
            <div className='next-btn'>
              <button
                id='next-nav'
                onClick={() => {
                  setShowNext(true);
                  navigate('/schoolreg#');
                }}
              >
                Next
              </button>
            </div>
          </main>
        </div>
      )}
      {showNext && (
        <div class='f-item-1' id='top-page'>
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
            <div className='tw-flex tw-justify-center'>
              <div
                onClick={() => {
                  setTimeout(() => {
                    navigate('/signin');
                  }, 5000);
                  showToast();
                  // navigate('/dashboard');
                }}
                class='tw-w-1/2 tw-cursor-pointer tw-rounded-lg tw-bg-blue-800 tw-px-8 tw-py-2 tw-text-center tw-text-white tw-no-underline tw-shadow-lg tw-transition-all tw-duration-500 tw-ease-in-out hover:tw-bg-blue-700 hover:tw-text-white'
              >
                Submit
              </div>
            </div>
          </form>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SchoolRegistrationComp;
