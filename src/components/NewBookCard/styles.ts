import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';



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
  opacity: 0.8;
`;
export const Description = styled.View`
   width: ${RFValue(144)}px;
`;
export const BookTitle = styled.Text`
  color: ${({ theme }) => theme.colors.card_text};

  font-family: ${({ theme }) => theme.fonts.book_title};
  font-size: ${RFValue(23)}px;
  margin-bottom: 5px;
`;
export const BookAuthor = styled.Text`
  color: ${({ theme }) => theme.colors.card_text};
  font-family: ${({ theme }) => theme.fonts.regular_italic};

  font-size: ${RFValue(13)}px;
  margin-bottom: ${RFValue(25)}px;
`;
export const ReadNow = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  width:${RFValue(18)}px;
  margin-right: 2px;
`;
export const ReadValue = styled.Text`
    color: ${({ theme }) => theme.colors.card_text};
    font-family: ${({ theme }) => theme.fonts.regular};

    font-size: ${RFValue(13)}px;
`;

export const ReadValueNumber = styled.Text`
    color: ${({ theme }) => theme.colors.card_text};
    font-family: ${({ theme }) => theme.fonts.bold};

    font-size: ${RFValue(13)}px;
`;
export const BookThumbnail = styled.Image`
  width: ${RFValue(80)}px;
  height: ${RFValue(115)}px;
  border-radius: 7px;
`;
