import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import {ImageBackground} from 'react-native'

export const Container = styled(ImageBackground)`
  width: ${RFValue(350)}px;
  height: ${RFValue(100)}px;
  flex-direction: row;
  position: relative;
  opacity: 0.9;
  margin-top: ${RFValue(30)}px;
  left: -19px;

  margin-bottom: 45px;
`;
export const Book = styled.Image`
  width: ${RFValue(88)}px;
  height: ${RFValue(130)}px;
  position: absolute;
  top: -18px;
  left: 19px;
`;
export const BookDescription = styled.View`
  flex: 1;
  margin-left: 33%;
`;
export const BookTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.book_title};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.current_book_title};
  margin-bottom: 5px;
`;
export const BookAuthor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.current_book_author};
  margin-bottom: 22px;
`;
export const ChapterDescription = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const BookIcon = styled.Image`
  width: ${RFValue(16)}px;
  margin-right: 3px;
`;
export const Chapter = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.current_chapter_color};
`;

export const ChapterNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.secondary_text};
`;
export const ChapterFrom = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.current_chapter_color};
`;
