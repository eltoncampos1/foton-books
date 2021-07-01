import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const DescriptionWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  padding-right:20px;

`;

export const DescriptionTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.primary_text};
    font-size: ${RFValue(18)}px;
`;

export const DescriptionLink = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.link};
    font-size: ${RFValue(14)}px;
`;