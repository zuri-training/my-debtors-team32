import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useMount } from 'react-use';
import { useCookies } from 'react-cookie';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  const [cookies] = useCookies(['dma-cookies']);
  const [schoolInfo, setSchoolInfo] = useState(null);
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
      console.log('final :>> ', final[0]);
      // return result2?.data;
      return final[0];
    } catch (error) {
      return error;
    }
  };

  useMount(async () => {
    const result = await handleRole();
    console.log('result :>> ', result.message);
    if (!result?.message) {
      console.log(result);
      setSchoolInfo(result);
    }
  });

  // useEffect(() => {
  //   const result = handleRole();

  //   setSchoolInfo(result);

  //   return () => {};
  // }, []);

  const [schoolData, setSchoolData] = useState({});
  return (
    <GlobalContextData.Provider
      value={{ schoolData, setSchoolData, schoolInfo, setSchoolInfo }}
    >
      {children}
    </GlobalContextData.Provider>
  );
}

export const useContextData = () => useContext(GlobalContextData);

// export default GlobalContext;
