import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding-left:${RFValue(20)}px;
    padding-top: ${RFValue(50)}px;
    padding-bottom: ${RFValue(50)}px;
`;

export const BookContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: ${RFValue(42)}px;
`