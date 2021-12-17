import React from "react";
import { Heading } from "@go1d/go1d";
import { THEME_COLOR_ACCENT } from "../../constants/theme.constant";
import { SEMANTIC_ELEMENT_DEFAULT, VISUAL_HEADING_LEVEL_DEFAULT } from "../../constants/elements.constant";

export function Go1Title(props) {
  const { previousVersion, text, ...rest } = props;

  if (previousVersion) {
    return (
      <Heading { ...rest } fontSize={ [7, 7, 8] }>
        { text }
      </Heading>
    )
  }

  return (
    <Heading { ...rest }>
      { text }
    </Heading>
  )
}

Go1Title.defaultProps = {
  color: THEME_COLOR_ACCENT,
  semanticElement: SEMANTIC_ELEMENT_DEFAULT,
  visualHeadingLevel: VISUAL_HEADING_LEVEL_DEFAULT,
  previousVersion: false,
}
