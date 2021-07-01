import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  margin-top: 15px;
  height: ${RFValue(320)}px;
`;
export const ReviewImage = styled.Image`
     width: ${RFValue(325)}px;
    height: ${RFValue(188)}px;
  border-radius: 7px;
`;
export const DescriptionViewContainer = styled.View`
  padding: 15px 12px;
  flex: 1;
`;
export const BookReviewTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.small_text};
  opacity: 0.8;
`;
export const ReviewInfos = styled.View`
  flex-direction: row;
  width: ${RFValue(207)}px;
`;
export const ReviewPublisher = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.review_text};
  opacity: 0.8;
  margin-right: 21px;
`;
export const ReviewViews = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.review_text};
  opacity: 0.8;
  margin-right: 21px;
`;
export const ReviewPublishedDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.review_text};
  opacity: 0.8;
  margin-bottom: 8px;
`;
export const Testimonial = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.review_text};
  opacity: 0.8;
`;
