import styled from 'styled-components/native';

import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../utils/styles/colors';

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: ${colors.primary};
  color: white;
  align-items: center;
  text-align: center;
`;

export const Button: React.FC = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Text
        style={{
          color: colors.white,
        }}
      >
        {children}
      </Text>
    </StyledButton>
  );
};
