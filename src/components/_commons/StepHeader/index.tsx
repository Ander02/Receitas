import React from 'react';
import { View } from 'react-native';
import colors from '../../../utils/styles/colors';

// import { Container } from './styles';

const StepHeader: React.FC<{ totalSteps: number; currentStep: number }> = ({
  totalSteps,
  currentStep,
}) => {
  const renderStep = (colored) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colored ? colors.primary : colors.grayLight,
          height: 5,
          marginHorizontal: 10,
        }}
      />
    );
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        width: '100%',
      }}
    >
      {[...Array(totalSteps).keys()].map((d) =>
        renderStep(d + 1 <= currentStep)
      )}
    </View>
  );
};

export default StepHeader;
