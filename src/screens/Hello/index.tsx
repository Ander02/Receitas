import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const HelloScreen: React.FC = () => {
  const { user } = useSelector(({ authentication }) => authentication);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default HelloScreen;
