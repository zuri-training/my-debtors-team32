import { createContext, useContext, useState } from 'react';

export const GlobalContextData = createContext();

export default function GlobalContext({ children }) {
  // const [dummyData, setDummyData] = useState([1, 2, 3, 4, 5, 6]);
  const [schoolData, setSchoolData] = useState({});
  return (
    <GlobalContextData.Provider value={{ schoolData, setSchoolData }}>
      {children}
    </GlobalContextData.Provider>
  );
}

export const useContextData = () => useContext(GlobalContextData);

// export default GlobalContext;
