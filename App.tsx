/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React, { ReactElement } from 'react';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import Root from './src/Root';

export default function App(): ReactElement {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Root />;
}
