import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { IconProps } from '../../../types/Icon';

const Icon: React.FC<IconProps> = (props) => {
  return <FontAwesome5 solid {...props} />;
};

export default Icon;
