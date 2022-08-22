import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useMount } from 'react-use';
import { useCookies } from 'react-cookie';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  // const [value, setValue, remove] = useLocalStorage('dma-local-storage');
  const [cookies] = useCookies(['dma-cookies']);
  const [schoolInfo, setSchoolInfo] = useState(null);

  console.log('schoolInfo', schoolInfo);
  console.log('cookies', cookies);
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
    if (cookies['dma-cookies']) {
      const result = await handleRole();
      console.log('result :>> ', result);
      if (!result?.message) {
        console.log('there is school info');
        setSchoolInfo(result);
      }
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
