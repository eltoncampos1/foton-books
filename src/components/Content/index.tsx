import React from "react";
import { useFetchBookByName } from "../../hooks/useFetchBookByName";
import { ActivityIndicator } from "react-native";

import { CurrentlyReading } from "../CurrentlyReading";
import { DescriptionText } from "../DescriptonText";
import { ReviewsContent } from "../ReviewsContent";
import * as S from "./styles";
import { getBookData } from "../../utils/getBookData";

export function Content() {
  const { data, loading } = useFetchBookByName("originals Adam Grant");

  const currentlyReading = getBookData(data);

  if (!currentlyReading) {
    return null;
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <S.Container>
      <DescriptionText
        descriptionTitle="Currently Reading"
        descriptionLink="All"
      />

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
