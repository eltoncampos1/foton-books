import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding-left:19px;
  padding-right:20px;
  padding-top: ${RFValue(50)}px;
`;
