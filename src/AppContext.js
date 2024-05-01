// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', age: null });

  const updateUser = (name, age) => {
    setUser({ name, age });
  };

  const value = {
    user,
    updateUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

