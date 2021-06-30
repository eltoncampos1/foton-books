import React, { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";

import { CurrentlyReading } from "../CurrentlyReading";
import { DescriptionText } from "../DescriptonText";
import { ReviewsContent } from "../ReviewsContent";
import * as S from "./styles";

interface VolumeInfoProps {
  title: string;
  authors: string;
  imageLinks: {
    thumbnail: string;
  };
}

export function Content() {
  const [currentlyReading, setCurrentReading] = useState<VolumeInfoProps>(
    {} as VolumeInfoProps
  );

  useEffect(() => {
    api
      .get("/", { params: { q: "originals Adam Grant" } })
      .then((response) => {
        // console.log(response.data.items[0].volumeInfo);

        setCurrentReading(response.data.items[0].volumeInfo);
      })
      .catch((error) => {
        return error.message;
      });
  }, []);

  // console.log(currentlyReading.imageLinks);

  return (
    <S.Container>
      <DescriptionText
        descriptionTitle="Currently Reading"
        descriptionLink="All"
      />
      {/* <CurrentlyReading
        bookTitle={currentlyReading.title}
        bookAuthor={currentlyReading.authors}
        bookThumbnail={currentlyReading.imageLinks.thumbnail}
      /> */}

      <DescriptionText
        descriptionTitle="Reviews of The Days"
        descriptionLink="All Video"
      />

      <ReviewsContent />
    </S.Container>
  );
}
