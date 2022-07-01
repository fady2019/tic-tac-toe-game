import React, { useEffect, useState } from 'react';

const initWindowSize = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const appContext = React.createContext({
  windowSize: initWindowSize,
});

export const AppContextProvider = (props) => {
  const [windowSize, setWindowSize] = useState(initWindowSize);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, []);

  return (
    <appContext.Provider value={{ windowSize }}>
      {props.children}
    </appContext.Provider>
  );
};

export default appContext;
