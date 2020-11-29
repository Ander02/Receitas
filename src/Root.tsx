import React from 'react';
import StoreProvider from './store/Provider';
import NavigationProvider from './navigation/Provider';

const Root: React.FC = () => {
  return (
    <StoreProvider>      
      <NavigationProvider />
    </StoreProvider>
  );
};

export default Root;
