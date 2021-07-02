import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(BorderlessButton)`
  width: ${RFValue(90)}px;
  height: ${RFValue(200)}px;
  margin-right: ${RFValue(20)}px;
  margin-bottom:${RFValue(40)}px;
`;
export const BookThumbnail = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;
  margin-bottom: 10px;
`;
export const BookTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.small_text};
  font-size: ${RFValue(10)}px;
  opacity: 0.8;
  margin-bottom: 5px;
`;
export const BookAuthors = styled.Text`
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme }) => theme.colors.small_text};
  font-size: ${RFValue(9)}px;
  opacity: 0.8;
`;
