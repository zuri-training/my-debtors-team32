import React from 'react';
import AddDebtorComp from '../components/AddDebtorComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const AddDeptor = () => {
  let navigate = useNavigate();

  const [cookies] = useCookies(['dma-cookies']);

  const handleRole = async () => {
    try {
      const token = cookies['dma-cookies'];
      const result1 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/user/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const final = result2.data.filter(
        (school) => school?.author === result1?.data?.pk
      );
      return final[0];
    } catch (error) {
      return error;
    }
  };

  useMount(async () => {
    const result = await handleRole();
    // console.log('result :>> ', result.message);
    if (cookies['dma-cookies'] && result?.message) {
      navigate('/contend');
    } else if (!cookies['dma-cookies']) {
      navigate('/signin');
    }
  });
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <div className='tw-mx-auto tw-flex tw-h-screen tw-w-screen tw-max-w-screen-lg tw-items-center tw-justify-center'>
          <AddDebtorComp />
        </div>
      </div>
    </div>
  );
};

export default AddDeptor;
