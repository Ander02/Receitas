import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { getPrivateRoutes, PRIVATE_INITIAL_ROUTE_NAME } from './privateRoutes';

const Stack = createStackNavigator();

const PrivateStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={PRIVATE_INITIAL_ROUTE_NAME}>
      {getPrivateRoutes((route : any) => (
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

export default PrivateStackNavigation;
