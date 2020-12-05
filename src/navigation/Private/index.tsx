import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { getPrivateRoutes, PRIVATE_INITIAL_ROUTE_NAME } from './privateRoutes';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const PrivateStackNavigation: React.FC = () => {
  return <TabNavigation />;
};

export default PrivateStackNavigation;
