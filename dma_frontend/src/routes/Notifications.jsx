import React from 'react';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import NotificationComp from '../components/NotificationComp';

import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Notifications = () => {
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
      console.log('result1 :>> ', result1);
      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      console.log('result2', result2);
      const final = result2.data.filter(
        (school) => school?.username === result1?.data?.username
      );
      console.log('final :>> ', final);
      // return result2?.data;
      return final[0];
    } catch (error) {
      return error;
    }
  };
  useMount(async () => {
    // console.log('result :>> ', result.message);
    if (!cookies['dma-cookies']) {
      navigate('/signin');
    } else {
      const result = await handleRole();
      if (!result) {
        navigate('/contend');
      }
    }
  });
  return (
    <div className='tw-flex tw-flex-col tw-space-x-6 lg:tw-flex-row '>
      {/* sidebar */}
      <div className=''>
        <DashboardSideNav />
      </div>
      <div className='tw-pt-4'>
        <NotificationComp />
      </div>
    </div>
  );
};

export default Notifications;
