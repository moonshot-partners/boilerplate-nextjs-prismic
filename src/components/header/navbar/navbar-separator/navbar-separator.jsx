import { separatorStyle } from "../styles";
import { Text } from "@go1d/go1d";
import React, { useContext } from "react";
import { ThemeContext } from "../../../../contexts/theme.context";

export function NavbarSeparator({ show }) {
  const { theme: { COLOR_NAVBAR } } = useContext(ThemeContext);

  if (!show) {
    return <></>
  }

  return <Text color={ COLOR_NAVBAR } style={ separatorStyle }/>
}
