import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin-top: ${RFValue(30)}px;
`;
export const UserGreetings = styled.View`
  flex-direction: row;
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
`;

export const NewBookText = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const NewBookTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary_text};
    font-size: ${RFValue(18)}px;
`;

export const NewBookMore = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.link};
    font-size: ${RFValue(14)}px;
`;

export const NewBooksCards = styled.ScrollView`
  flex-direction: row;
`;
export const Title = styled.Text`

`;
