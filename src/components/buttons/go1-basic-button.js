import { ButtonFilled, Text } from "@go1d/go1d";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { THEME_STYLE } from "../../constants/theme.constant";
import { FONT_FAMILY_DEFAULT, FONT_WEIGHT_MEDIUM } from "../../constants/elements.constant";


export function Go1BasicButton({ text, children, color, text_color, fontFamily, theme, ...props }) {
  const { theme: storedTheme } = useContext(ThemeContext);

  let buttonTheme = storedTheme;

  if (theme) {
    buttonTheme = THEME_STYLE[theme]
  }

  return (
    <ButtonFilled { ...props } color={ color || buttonTheme.BACKGROUND_BUTTON }>
      <Text color={ text_color|| buttonTheme.COLOR_BUTTON } fontSize={ 2 } fontFamily={ fontFamily }>
        { children || text }
      </Text>
    </ButtonFilled>
  )
}

Go1BasicButton.defaultProps = {
  fontFamily: FONT_FAMILY_DEFAULT,
  fontWeight: FONT_WEIGHT_MEDIUM,
  text: "Subscribe",
}
