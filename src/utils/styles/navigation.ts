import { ViewStyle, TextStyle } from 'react-native';

import fontFamily from './fontFamily';
import colors from './colors';

export const headerStyle: ViewStyle = {
  backgroundColor: colors.dark,
  shadowOpacity: 0,
};

export const headerTitleContainerStyle: ViewStyle = {
  flex: 1,
  marginLeft: 20,
};

export const headerTitleContainerStyleWithBack: ViewStyle = {
  flex: 1,
  marginLeft: 60,
};

export const headerRightContainerStyle: ViewStyle = {
  marginRight: 20,
  justifyContent: 'center',
  alignItems: 'center',
};

export const headerLeftContainerStyle: ViewStyle = {
  marginLeft: 20,
};

export const headerTitleStyle: TextStyle = {
  fontSize: 18,
  fontFamily: fontFamily.bold,
};

// TabNavigation
export const tabIconSize = {
  defaul: 30,
  small: 23,
};
