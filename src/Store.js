import React, { useState } from 'react';

const initialState = {
  name: 'César N.',
  email: 'oi@ncesar.com',
};

export const Context = React.createContext();

export const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
