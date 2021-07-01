import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Text } from "react-native";

import { CurrentlyReading } from "../CurrentlyReading";
import { DescriptionText } from "../DescriptonText";
import { ReviewsContent } from "../ReviewsContent";
import * as S from "./styles";

export function Content() {
  const { data, error, loading } = useFetch("originals Adam Grant");

  const currentlyReading = data[0].volumeInfo;

  // console.log(data[0].volumeInfo.title);

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <S.Container>
      <DescriptionText
        descriptionTitle="Currently Reading"
        descriptionLink="All"
      />

      {error && <Text>An error occurred...</Text>}

      <CurrentlyReading
        bookTitle={currentlyReading.title}
        bookAuthor={currentlyReading.authors}
        bookThumbnail={currentlyReading.imageLinks.thumbnail}
      />

      <DescriptionText
        descriptionTitle="Reviews of The Days"
        descriptionLink="All Video"
      />

      <ReviewsContent />
    </S.Container>
  );
}
