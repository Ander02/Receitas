import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { ReducerStateAuthentication } from '../types/store/reducers/Authentication';
import PublicStackNavigation from './Public';
import PrivateStackNavigation from './Private';

const NavigationProvider: React.FC = () => {
  const [hasLogged, setHasLogged] = useState(false);

  const { isAuthenticate } = useSelector(
    ({ authentication }: { authentication: ReducerStateAuthentication }) =>
      authentication
  );

  useEffect(() => {
    setHasLogged(isAuthenticate);
  }, [isAuthenticate]);

  return (
    <NavigationContainer>
      {hasLogged ? <PrivateStackNavigation /> : <PublicStackNavigation />}
    </NavigationContainer>
  );
};

export default NavigationProvider;
