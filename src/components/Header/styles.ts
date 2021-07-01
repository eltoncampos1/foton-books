import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-top: ${RFValue(30)}px;
  padding-left:19px;

`;
export const UserGreetings = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;
export const Greeting = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.greetings};
  font-size: ${RFValue(24)}px;
`;

export const UserName = styled.Text`
  font-family: ${({theme}) => theme.fonts.black};
  color: ${({theme}) => theme.colors.secondary_text};
  font-size: ${RFValue(24)}px;
`;

export const NewBooks = styled.View`
    margin-top: ${RFValue(31)}px;
    position: relative;
`;

export const NewBooksCards = styled.ScrollView`
  flex-direction: row;
`;
export const Mask1 = styled.Image`
 position: absolute;
 left: 0;
 bottom: 0;
`;
export const Mask2 = styled.Image`
 position: absolute;
 right: 0px;
 top: 8px;
`;
