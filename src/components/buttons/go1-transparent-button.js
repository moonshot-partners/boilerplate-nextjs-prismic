import { Button, Text } from "@go1d/go1d";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { FONT_FAMILY_DEFAULT, FONT_WEIGHT_NORMAL } from "../../constants/elements.constant";
import { THEME_STYLE } from "../../constants/theme.constant";


export function Go1TransparentButton({ text, children, fontFamily, theme, ...props }) {
  const { theme: context } = useContext(ThemeContext);
  // console.log(text, children, fontFamily, theme, props, context);

  let contextTheme = context;
  if (theme) contextTheme = THEME_STYLE[theme];

  return (
    <Button { ...props }
            color={ contextTheme.COLOR_BUTTON_TRANSPARENT }>
      <Text fontSize={ 2 } fontFamily={ fontFamily }>
        { children || text }
      </Text>
    </Button>
  );
}

Go1TransparentButton.defaultProps = {
  fontFamily: FONT_FAMILY_DEFAULT,
  fontWeight: FONT_WEIGHT_NORMAL,
  marginX: 3,
  text: "Log in",
  href: "https://www.go1.com/login"
};
