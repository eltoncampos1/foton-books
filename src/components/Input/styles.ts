import styled from 'styled-components/native';


import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: ${RFValue(326)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.input_bg};
    padding: 15px 16px;

    flex-direction: row;
    align-items: center;
`;

export const SearchIcon = styled.Image`
    width: ${RFValue(16)}px;
    height: ${RFValue(16)}px;
`;

export const Input = styled.TextInput`
    flex: 1;
    margin-left: 13px;
`;