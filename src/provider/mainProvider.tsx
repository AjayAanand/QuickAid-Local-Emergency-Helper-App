import React, { useContext, useState } from 'react';

type MainContextType = {
  isLoggedIn: boolean | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const MainContext = React.createContext<MainContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
});

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: MainProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  return (
    <MainContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);

export default MainProvider;