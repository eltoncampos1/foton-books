import React from "react";
import { useState } from "react";

import * as S from "./styles";

import searchIcon from "../../assets/seachicon.png";
import { useNavigation } from "@react-navigation/native";

export function Input() {
  const [value, setValue] = useState("");
  const navigation = useNavigation();

  function handleInputChange() {
    navigation.navigate("Search", { InputParam: value });
    setValue("");
  }

  return (
    <S.Container>
      <S.SearchIcon source={searchIcon} />
      <S.Input
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder="Search book"
        placeholderTextColor="#54565A"
        onSubmitEditing={handleInputChange}
      />
    </S.Container>
  );
}
