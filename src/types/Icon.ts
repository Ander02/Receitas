import { TextStyle } from 'react-native';

interface IconDefault {
  color?: string;
  size?: number;
  iconStyle?: TextStyle;
  backgroundColor?: string;
  borderRadius?: number;
  solid?: boolean;
  onPress?: () => void;
}

export interface IconProps extends IconDefault {
  name: string;
}
