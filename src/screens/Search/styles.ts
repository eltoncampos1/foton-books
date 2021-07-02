import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

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

export const LoadMoreButton = styled(RectButton)`
    width: ${RFValue(70)}px;
`
export const ButtonText = styled.Text`
    
`