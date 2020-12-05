import React from 'react';
import { View, Text } from 'react-native';
// import { Container } from './styles';

const Empty: React.FC<{ message: string }> = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default Empty;
