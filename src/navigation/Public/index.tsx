import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { getPublicRoutes, PUBLIC_INITIAL_ROUTE_NAME } from './publicRoutes';

const Stack = createStackNavigator();

const PublicStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={PUBLIC_INITIAL_ROUTE_NAME}>
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
