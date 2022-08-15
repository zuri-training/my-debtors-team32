import React from 'react';
import HeaderLayoutComp from './layout/HeaderLayout';
import { Link } from 'react-router-dom';
import { HiOutlineTrash } from 'react-icons/hi';
import '../styles/contend-page.css';
import { useCookies } from 'react-cookie';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';

const ContendComp = () => {
  const navigate = useNavigate();
  const [cookies] = useCookies(['dma-cookies']);
  useMount(() => {
    if (!cookies['dma-cookies']) {
      navigate('/signin');
    }
  });

  return (
    <div className='tw-mx-auto tw-min-h-screen tw-max-w-screen-xl tw-pt-6'>
      <HeaderLayoutComp />
      <div className='contend'>
        <div className='contend--header'>
          <h1 className='primary--header'>Contend Form</h1>
          <h2 className='secondary--header'>Start a Contend</h2>
          <p className='tertiary--header'>
            Enter The Details Below to Start Contending with Schools
          </p>
        </div>
        <form action='' className='form'>
          <div className='form--group'>
            <label htmlFor='name' className='form--label'>
              Parent's Name
            </label>
            <input type='text' id='name' className='form--input' />
          </div>
          <div className='form--group'>
            <label htmlFor='student' className='form--label'>
              Student's Name
            </label>
            <input type='text' id='student' className='form--input' />
          </div>
          <div className='form--group'>
            <label htmlFor='sch' className='form--label'>
              School's Name
            </label>
            <input type='text' id='sch' className='form--input' />
          </div>
          <div className='form--group'>
            <label htmlFor='subj' className='form--label'>
              Subject
            </label>
            <input type='text' id='subj' className='form--input' />
          </div>
          <div className='form--group issue'>
            <label htmlFor='issue' className='form--label'>
              The Issue
            </label>
            <textarea
              name=''
              id='issue'
              className='form--input'
              cols='30'
              rows='8'
              placeholder='Explain Briefly Your Contend With the School On Finances'
            ></textarea>
          </div>
          <div className='attach-box'>
            <Link to='' className='attach'>
              Attach File
            </Link>
          </div>
          <div className='form--group'>
            <label htmlFor='' className='form--label'>
              &nbsp;
            </label>
            <input type='submit' id='subj' className='form--input submit' />
          </div>
        </form>
        <div className='contend--previous'>
          <Link to='/signin' className='previous'>
            Previous Complaints
          </Link>
          <Link to='/signin' className='lists'>
            See All Your List Of Contends Starting From The Most Recent
          </Link>
        </div>
        <table class='contend--table'>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>School</th>
              <th>Date</th>
              <th className='hidden'>Resolved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yinka Phillips</td>
              <td>Divine College</td>
              <td>25/07/2022</td>
              <td className='hidden'>Pending</td>
              <td className='delete hidden'>
                Delete <HiOutlineTrash className='icon' />
              </td>
            </tr>
            <tr>
              <td>Seun Phillips</td>
              <td>Landmark University</td>
              <td>23/07/2022</td>
              <td className='hidden'>YES</td>
              <td className='delete hidden'>
                Delete <HiOutlineTrash className='icon' />
              </td>
            </tr>
            <tr>
              <td>Chinedu Phillips</td>
              <td>UNILAG</td>
              <td>20/07/2022</td>
              <td className='hidden'>YES</td>
              <td className='delete hidden'>
                Delete <HiOutlineTrash className='icon' />
              </td>
            </tr>
            <tr>
              <td>Musa Phillips</td>
              <td>OAU</td>
              <td>06/06/2022</td>
              <td className='hidden'>YES</td>
              <td className='delete hidden'>
                Delete <HiOutlineTrash className='icon' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContendComp;
