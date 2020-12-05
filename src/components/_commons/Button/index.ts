import styled from 'styled-components/native';
import colors from '../../../utils/styles/colors';

export const Button = styled.TouchableOpacity`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
`;
