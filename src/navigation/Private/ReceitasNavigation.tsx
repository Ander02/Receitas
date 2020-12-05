import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesReceitaScreen from '../../screens/DetalhesReceita';
import ReceitasScreen from '../../screens/Receitas';
import CreateReceitaNavigation from './CreateReceitaNavigation';

const Stack = createStackNavigator();

const ReceitasNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Receitas"
        component={ReceitasScreen}
        options={{
          title: 'Receitas',
        }}
      />
      <Stack.Screen
        name="DetalhesReceitas"
        component={DetalhesReceitaScreen}
        options={{
          title: 'Detalhes da Receita',
        }}
      />
      <Stack.Screen
        name="CreateReceitaNavigation"
        component={CreateReceitaNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ReceitasNavigation;
