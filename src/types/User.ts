import { ViewStyle } from 'react-native';
import { ButtonProps } from './Button';

export interface User {
  id: string;
  name: string;
}

export interface UserCardInfoProps {
  user: User;
  actionButtonProps?: ButtonProps;
  showDogTag?: boolean;
  containerStyle?: ViewStyle;
  avatarSize?: number;
}
