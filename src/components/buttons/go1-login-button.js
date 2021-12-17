import { Button, Text } from "@go1d/go1d";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { fontNavbarStyle } from "../header/navbar/styles";

export function Go1LoginButton({ display }) {
  const { theme: { COLOR_BACKGROUND } } = useContext(ThemeContext);

  return (
    <Button display={ display}
            href="https://www.go1.com/login"
            marginX={ 4 }
            color={ COLOR_BACKGROUND }>
      <Text fontSize={ 2 } css={ fontNavbarStyle }>
        Login
      </Text>
    </Button>
  )
}
