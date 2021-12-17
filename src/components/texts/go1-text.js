import React from "react";
import { FONT_FAMILY_DEFAULT, TEXT_FONT_SIZE_DEFAULT } from "../../constants/elements.constant";
import { Text } from "@go1d/go1d";

export function Go1Text(props) {
  const { maxWidth, ...rest } = props;

  return (
    <Text { ...rest } css={ { maxWidth } }/>
  )
}

Go1Text.defaultProps = {
  fontFamily: FONT_FAMILY_DEFAULT,
  fontSize: TEXT_FONT_SIZE_DEFAULT,
}
