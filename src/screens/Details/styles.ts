import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom:  ${RFValue(10)}px;
`;
export const TopBackgroundImage = styled.ImageBackground`
  width: ${RFValue(376)}px;
  height: ${RFValue(282)}px;

  position: relative;
`;
export const BookThumbnail = styled.Image`
  width: ${RFValue(151)}px;
  height: ${RFValue(234)}px;
  position: absolute;
  bottom: -40px;
  right:  ${RFValue(111)}px;
`;
export const TitleContainer = styled.Text`
  padding-left:  ${RFValue(20)}px;
  margin-top:  ${RFValue(67)}px;
  margin-bottom: ${RFValue(10)}px;
`;
export const BookTitle = styled.Text`
   font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.book_title};
  font-size: ${RFValue(24)}px;
`;
export const BookSubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.book_title};
  font-size: ${RFValue(24)}px;
`;
export const BookAuthors = styled.Text`
  padding-left:  ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.secondary_text};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(10)}px;

`;
export const BookDescription = styled.Text`
    padding-left:  ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.small_text};
    font-size: ${RFValue(16)}px;
    padding-right:  ${RFValue(20)}px;


    opacity: 0.6;
`;
export const DetailMask = styled.Image`
   position: absolute;
   top: 0;
   right: 0;
`;
export const DetailMask1 = styled.Image`
   position: absolute;
   bottom: 10px;
   right: 95px;
`;
export const DetailMask2 = styled.Image`
   position: absolute;
   bottom: 120px;
   left: 85px;
`;
export const DetailMask3 = styled.Image`
   position: absolute;
   top: 125px;
   left: 60px;
`;
