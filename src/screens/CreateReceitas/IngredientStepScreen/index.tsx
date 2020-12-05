import React from 'react';
import { View } from 'react-native';
import StepHeader from '../../../components/_commons/StepHeader';

// import { Container } from './styles';

const IngredientStepScreen: React.FC = () => {
  return (
    <View>
      <StepHeader currentStep={1} totalSteps={3} />
    </View>
  );
};

export default IngredientStepScreen;
