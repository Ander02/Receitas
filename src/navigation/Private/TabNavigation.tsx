import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../../components/_commons/Icon';
import ReceitasNavigation from './ReceitasNavigation';
import colors from '../../utils/styles/colors';

// import { Container } from './styles';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Receitas"
        options={{
          title: 'Receitas',
          tabBarIcon: (props) => (
            <Icon name={'book'} {...props} color={colors.primary} />
          ),
        }}
        component={ReceitasNavigation}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
