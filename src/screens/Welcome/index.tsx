/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from '../../components/_commons/SafeAreaView';
import { Button } from '../../components/_commons/Button';
import { CenterView } from '../../components/_commons/CenterView';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <CenterView>
          <Button onPress={() => navigation.navigate('Login')}>
            <Text> Ir para Login</Text>
          </Button>
        </CenterView>
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreen;
