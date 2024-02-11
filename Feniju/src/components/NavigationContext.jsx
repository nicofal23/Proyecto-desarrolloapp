// NavigationContext.js
import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('App');

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <NavigationContext.Provider value={{ currentScreen, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};