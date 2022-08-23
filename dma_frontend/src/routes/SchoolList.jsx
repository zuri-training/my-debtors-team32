import React from 'react';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import SchoolListComp from '../components/SchoolListComp';
import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useContextData } from '../lib/GlobalContext';

const SchoolList = () => {
  let navigate = useNavigate();
  const { setSchoolInfo } = useContextData();

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
      setSchoolInfo(result);

      if (!result) {
        navigate('/contend');
      }
    }
  });
  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>
        <div className='tw-pt-4'>
          <SchoolListComp />
        </div>
      </div>
    </div>
  );
};

export default SchoolList;
