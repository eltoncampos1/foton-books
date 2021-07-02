import React from "react";
import * as Random from "expo-random";

import { Text } from "react-native";

import { Input } from "../../components/Input";
import { SearchedBook } from "../../components/SearchedBooks";
import { useFetchBookByName } from "../../hooks/useFetchBookByName";

import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Search({ route }: any) {
  const navigation = useNavigation();

  const { InputParam } = route.params;
  const { data, loading } = useFetchBookByName(InputParam);

  if (!data) {
    return null;
  }

  if (loading) {
    return <Text>loading...</Text>;
  }

  console.log(data);

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <Input />

      <S.BookContainer>
        {data.map((book: any) => (
          <SearchedBook
            onPress={() =>
              navigation.navigate("Details", {
                bookThumb: book.volumeInfo.imageLinks.thumbnail,
                bookName: book.volumeInfo.title,
                bookSubtitle: book.volumeInfo.subtitle,
                bookAuthors: book.volumeInfo.authors,
                bookDescription: book.volumeInfo.description,
              })
            }
            key={String(Random.getRandomBytes(1024))}
            bookTitle={
              book.volumeInfo.title.length > 12
                ? `${String(book.volumeInfo.title).slice(0, 25)}...`
                : book.volumeInfo.title
            }
            bookAuthors={book.volumeInfo.authors}
            bookThumbnail={book.volumeInfo.imageLinks.thumbnail}
          />
        ))}
      </S.BookContainer>
    </S.Container>
  );
}
