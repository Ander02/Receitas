import React from 'react';
import { Provider } from 'react-redux';
import storeApp from '.';

const StoreProvider: React.FC = ({ children }) => {
  return <Provider store={storeApp}>{children}</Provider>;
};

export default StoreProvider;
