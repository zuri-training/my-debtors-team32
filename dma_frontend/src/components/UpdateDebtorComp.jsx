import React from 'react';
// import HeaderLayoutComp from './layout/HeaderLayout';
import '../styles/update-debtor.css';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateDebtorComp = ({ debtorInfo, setDebtorInfo }) => {
  const [cookies] = useCookies(['dma-cookies']);
  const navigate = useNavigate();
  const token = cookies['dma-cookies'];
  const handleChange = (e) => {
    setDebtorInfo({ ...debtorInfo, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedInfo = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dashboard/${debtorInfo?.id}/`,
        {
          ...debtorInfo,
        },
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log('updatedInfo', updatedInfo);
      navigate('/dashboard');
    } catch (error) {
      console.error('err', error);
    }
    console.log('debtorInfo :>> ', debtorInfo);
  };

  return (
    <div>
      {/* <HeaderLayoutComp /> */}
      {
        <div className='debtor-form'>
          <h1>Update Debtor</h1>
          <form action='' method='post'>
            <div className='grid-container'>
              <label className='block'>
                Student Name
                <input
                  name='name_of_student'
                  type='text'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.name_of_student}
                  placeholder="Enter Student's Name"
                />
              </label>
              <label className='block'>
                Name of parent
                <input
                  name='name_of_parent'
                  type='text'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.name_of_parent}
                  placeholder="Enter Parent's name"
                  className='block'
                />
              </label>
              <label className='block'>
                Email
                <input
                  // name='name_of_student'
                  type='text'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.email}
                  name='email'
                  id='email'
                  placeholder="Enter Parent's Email"
                />
              </label>
              <label className='block'>
                Phone number
                <input
                  name='phone_number'
                  type='tel'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.phone_number}
                  // name='tel'
                  id='tel'
                  placeholder="Enter Parent's Phone Number"
                />
              </label>
              <label className='block'>Amount</label>
              <input
                type='number'
                name='amount_owed'
                onChange={(e) => handleChange(e)}
                value={debtorInfo?.amount_owed}
                id='amount'
                placeholder='Enter Amount'
              />
              {/* <label className='block'>
                Debt status
                <input
                  type='text'
                  name='status'
                  onChange={(e) => handleChange(e)}
                  id='item'
                  placeholder="Enter Debtor's Name"
                />
              </label> */}
              <div className='form-group'>
                <label htmlFor='reg-category' className='reg-label'>
                  Debt status
                </label>
                <select
                  name='status'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.status}
                  // name='schselect'
                  className='reg-input'
                  id='reg-input'
                >
                  <option selected value='Public'>
                    Status
                  </option>
                  <option value='Abandoned payment'>Abandoned payment</option>
                  <option value='Pending payment'>Pending payment</option>
                  <option value='Completed'>Completed</option>
                </select>
              </div>
              <label className='block'>
                Name of School
                <input
                  type='text'
                  name='school_owed'
                  onChange={(e) => handleChange(e)}
                  value={debtorInfo?.school_owed}
                  id='item'
                  placeholder="Enter School's Name"
                />
              </label>
              <label>
                <button onClick={(e) => handleSubmit(e)} id='btn'>
                  Update
                </button>
              </label>
            </div>
          </form>
        </div>
      }
    </div>
  );
};

export default UpdateDebtorComp;
