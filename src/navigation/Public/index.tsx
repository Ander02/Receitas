import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { getPublicRoutes, PUBLIC_INITIAL_ROUTE_NAME } from './publicRoutes';
import service from '../../services';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const PublicStackNavigation: React.FC = () => {
  const { token } = useSelector(({ authentication }) => authentication);

  useEffect(() => {
    if (token) {
      service.defaults.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
  }, [token]);

  return (
    <Stack.Navigator>
      {getPublicRoutes((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default PublicStackNavigation;
