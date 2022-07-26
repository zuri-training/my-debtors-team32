import React, { useEffect, useState } from 'react';
// import ProjectLayoutComp from '../components/layout/ProjectLayout';
import UpdateDebtorComp from '../components/UpdateDebtorComp';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useMount } from 'react-use';
import DashboardSideNav from '../components/layout/DashboardSideNav';
import { useQuery } from '@tanstack/react-query';
import { useContextData } from '../lib/GlobalContext';

const UpdateDebtor = () => {
  let navigate = useNavigate();
  let params = useParams();

  const [debtorInfo, setDebtorInfo] = useState(null);

  const [cookies] = useCookies(['dma-cookies']);

  const token = cookies['dma-cookies'];
  const dahsboardList = async () => {
    const news = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/r/dashboard/${params?.id}`,
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    // console.log(news);
    return news.data;
  };
  const { data, isSuccess } = useQuery(['update-debtor'], dahsboardList);

  console.log('params :>> ', params);
  console.log('data', data);
  console.log('debtorInfo :>> ', debtorInfo);

  const { setSchoolInfo } = useContextData();

  // const [cookies] = useCookies(['dma-cookies']);
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

  useEffect(() => {
    if (isSuccess) setDebtorInfo(data);
  }, [isSuccess, data]);

  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>

        <div className='tw-pt-4'>
          <UpdateDebtorComp
            debtorInfo={debtorInfo}
            setDebtorInfo={setDebtorInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateDebtor;
