import React, { useContext } from "react";
import { View } from "@go1d/go1d";
import { IconGo1Logo } from "@go1d/go1d/build/components/Icons";
import { ThemeContext } from "../../../contexts/theme.context";

export function Go1Logo({ theme, marginRight, display, size }) {
  const { theme: { COLOR_BUTTON_ACCENT } } = useContext(ThemeContext)

  return (
    <View element="a"
          href="https://www.go1.com/en-au"
          paddingRight={ 1 }
          marginRight={ marginRight }
          display={ display }
          size={ size }
          color={ theme || COLOR_BUTTON_ACCENT }
          css={ { alignSelf: "flex-start" } }>
      <IconGo1Logo size={ 8 } aria-label="logo"/>
    </View>
  )
}
