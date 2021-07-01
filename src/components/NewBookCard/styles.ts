import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler'



export const Container = styled.View`
  margin-right: ${RFValue(10)}px;
  width: ${RFValue(272)}px;
  height: ${RFPercentage(23)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 7px;
  margin-top: ${RFValue(15)}px;
`;
export const Description = styled.View`
   width: ${RFValue(144)}px;
   position: relative;
`;
export const BookTitle = styled.Text`
  color: ${({ theme }) => theme.colors.card_text};

  font-family: ${({ theme }) => theme.fonts.book_title};
  font-size: ${RFValue(22.5)}px;
  margin-bottom: 5px;
`;
export const BookAuthor = styled.Text`
  color: ${({ theme }) => theme.colors.card_text};
  font-family: ${({ theme }) => theme.fonts.regular_italic};

  font-size: ${RFValue(12.5)}px;
  margin-bottom: ${RFValue(25)}px;
`;
export const ReadNow = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;
export const Icon = styled.Image`
  width:${RFValue(14)}px;
  margin-right: 2px;
`;
export const ReadValue = styled.Text`
    color: ${({ theme }) => theme.colors.card_text};
    font-family: ${({ theme }) => theme.fonts.regular};

    font-size: ${RFValue(10)}px;
`;

export const ReadValueNumber = styled.Text`
    color: ${({ theme }) => theme.colors.card_text};
    font-family: ${({ theme }) => theme.fonts.bold};

    font-size: ${RFValue(10)}px;
`;

export const BookContainer = styled.View``;

export const RedirectButton = styled(BorderlessButton)``;

export const BookThumbnail = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(115)}px;
  border-radius: 7px;
`;


export const Triangle = styled.Image`
 position: absolute;

 top: -15px;
 right: 70px;
 z-index: 1000;
 opacity: 1;
`;
export const Retangle = styled.Image`
 position: absolute;
 bottom: 10%;
 z-index: 1000;
 right: 75px;
`;
export const Oval = styled.Image`
  position: absolute;
  z-index: 1000;

  bottom: 80%;
  right: 110px;
`;
