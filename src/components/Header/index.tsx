import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import * as Random from "expo-random";
import { useFetch } from "../../hooks/useFetch";
import { NewBookCard } from "../NewBookCard";

import * as S from "./styles";
import { colorArray } from "../../utils/color";
import { DescriptionText } from "../DescriptonText";
import { Input } from "../Input";

import Mask1 from "../../assets/mask1.png";
import Mask2 from "../../assets/mask2.png";

export function Header() {
  const { data, loading, error } = useFetch("hooked");

  return (
    <S.Container>
      <Input />
      <S.UserGreetings>
        <S.Greeting>Hi, </S.Greeting>
        <S.UserName>Elton Campos 👋</S.UserName>
      </S.UserGreetings>

      <S.NewBooks>
        <S.Mask1 source={Mask1} />
        <S.Mask2 source={Mask2} />

        <DescriptionText
          descriptionTitle="Discover new book"
          descriptionLink="More"
        />
        <S.NewBooksCards
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {loading && <Text>loading...</Text>}
          {error && <Text>An error occurred...</Text>}
          {data.map((book, i) => (
            <NewBookCard
              key={String(Random.getRandomBytes(1024))}
              title={
                String(book.volumeInfo.title).length > 12
                  ? `${String(book.volumeInfo.title).slice(0, 20)}...`
                  : book.volumeInfo.title
              }
              authors={book.volumeInfo.authors}
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              backgroundColor={String(colorArray[i])}
            ></NewBookCard>
          ))}
        </S.NewBooksCards>
      </S.NewBooks>
    </S.Container>
  );
}
