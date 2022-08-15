import { createContext, useContext, useState } from 'react';
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
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/${result1?.data?.pk}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      return result2?.data;
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
