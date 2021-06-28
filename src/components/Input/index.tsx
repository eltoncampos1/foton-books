import React from "react";
import { useState } from "react";

import * as S from "./styles";

import searchIcon from "../../assets/seachicon.png";

export function Input() {
  const [value, setValue] = useState("");

  return (
    <S.Container>
      <S.SearchIcon source={searchIcon} />
      <S.Input
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Search book"
        placeholderTextColor="#54565A"
      />
    </S.Container>
  );
}
