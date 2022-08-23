import { createContext, useContext, useState } from 'react';
import axios from 'axios';
// import { useMount, useUnmount } from 'react-use';
import { useCookies } from 'react-cookie';
import { useDidUpdate } from 'rooks';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  // const [value, setValue, remove] = useLocalStorage('dma-local-storage');
  const [cookies] = useCookies(['dma-cookies']);
  const [schoolInfo, setSchoolInfo] = useState(null);
  const [localCookies, setlocalCookies] = useState(null);
  console.log('schoolInfo', schoolInfo);
  // console.log('cookies :>>', cookies);
  console.log('cookies', cookies['dma-cookies']);

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

  useDidUpdate(async () => {
    console.log('update state');
    if (cookies['dma-cookies']) {
      console.log('there is cookie');
      setlocalCookies(cookies['dma-cookies']);
      const result = await handleRole();
      console.log('result :>> ', result);
      if (result) {
        console.log('there is school info');
        setSchoolInfo(result);
      }
    } else {
      console.log('there is no school info');
      setSchoolInfo(null);
      setlocalCookies(null);
    }
  }, [cookies]);

  const [schoolData, setSchoolData] = useState({});
  return (
    <GlobalContextData.Provider
      value={{
        schoolData,
        setSchoolData,
        schoolInfo,
        setSchoolInfo,
        localCookies,
      }}
    >
      {children}
    </GlobalContextData.Provider>
  );
}

export const useContextData = () => useContext(GlobalContextData);

// export default GlobalContext;
