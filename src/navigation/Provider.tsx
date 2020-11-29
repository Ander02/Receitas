import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { ReducerStateAuthentication } from '../types/store/reducers/Authentication';
import PublicStackNavigation from './Public';
import PrivateStackNavigation from './Private';

const NavigationProvider: React.FC = () => {
  const { isAuthenticate } = useSelector(
    ({ authentication }: { authentication: ReducerStateAuthentication }) =>
      authentication
  );
  return (
    <NavigationContainer>
      {isAuthenticate ? <PrivateStackNavigation /> : <PublicStackNavigation />}
    </NavigationContainer>
  );
};

export default NavigationProvider;
