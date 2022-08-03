import React from 'react';
import { Link } from 'react-router-dom';
import ProjectLayoutComp from '../components/layout/ProjectLayout';

const SignupPage = () => {
  return (
    <div>
      <ProjectLayoutComp>
        <section className='tw-mx-auto tw-my-6 tw-max-w-2xl tw-rounded-lg tw-shadow-md '>
          <div className='tw-flex tw-justify-between tw-p-8'>
            <img
              src='https://eply.com/wp-content/uploads/2021/12/ePly-1.jpg'
              alt='registraion placeholder'
              className='tw-h-[12rem] tw-w-[15rem] tw-overflow-hidden tw-rounded-lg'
            />
            <div className='tw-flex tw-flex-col tw-space-y-4'>
              <h2 className='tw-text-xl tw-font-bold'>
                Register your account for free!
              </h2>
              <ul>
                <li className='tw-flex tw-flex-col tw-space-y-2'>
                  <Link
                    to='/school'
                    className='tw-w-fit tw-rounded-md tw-border tw-p-2 tw-text-sm'
                  >
                    🏫 Register as a school
                  </Link>

                  <Link
                    to='/student'
                    className='tw-w-fit tw-rounded-md tw-border tw-p-2 tw-text-sm'
                  >
                    👨🏽‍🎓 Register as a student
                  </Link>
                </li>
              </ul>
              <div className=' tw-pt-6 tw-text-center tw-text-xs tw-text-gray-500'>
                <span>Already have an account? </span>
                <Link to='/login'>Login here</Link>
              </div>
            </div>
          </div>
        </section>
      </ProjectLayoutComp>
    </div>
  );
};

export default SignupPage;
