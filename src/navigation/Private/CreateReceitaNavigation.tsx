import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetalhesReceitaScreen from '../../screens/DetalhesReceita';
import ReceitasScreen from '../../screens/Receitas';
import IngredientStepScreen from '../../screens/CreateReceitas/IngredientStepScreen';
import ModoDePreparoScreen from '../../screens/CreateReceitas/ModoDePreparoScreen';
import ConfirmationStepScreen from '../../screens/CreateReceitas/ConfirmationStepScreen';

const Stack = createStackNavigator();

const CreateReceitaNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IngredientStep"
        component={IngredientStepScreen}
        options={{
          title: 'Ingredientes',
        }}
      />
      <Stack.Screen
        name="ModoDePreparoStep"
        component={ModoDePreparoScreen}
        options={{
          title: 'Modo de preparo',
        }}
      />
      <Stack.Screen
        name="ConfirmationStep"
        component={ConfirmationStepScreen}
        options={{
          title: 'Confirmação',
        }}
      />     
    </Stack.Navigator>
  );
};

export default CreateReceitaNavigation;
