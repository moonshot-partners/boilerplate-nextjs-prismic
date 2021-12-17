import React from "react";
import { View } from "@go1d/go1d";
import { NavBar } from "./navbar";
import { Go1LoginButton } from "../buttons/go1-login-button";
import { Go1BasicButton } from "../buttons/go1-basic-button";
import { ThemeContextProvider } from "../../contexts/theme.context";
import { THEME } from "../../constants/theme.constant";
import { Go1Logo } from "./logo/go1-logo";
import { HeaderLayer } from "../layers/header-layer";
import { THEME_COLOR_ACCENT } from "../../constants/theme.constant";
import ResponsiveNavbar from "./responsive-navbar";

export function Header({ theme }) {
  return (
    <ThemeContextProvider defaultTheme={ theme }>
      <HeaderLayer>
        <View element="nav"
              css={ { gap: "0.5rem" } }
              flexDirection="row"
              alignItems="center"
              justifyContent="left">
          <Go1Logo theme={ THEME_COLOR_ACCENT }/>
          <NavBar/>
        </View>
        <View element="nav"
              flexDirection="row"
              marginLeft="auto"
              alignItems="center"
              display={ ["none", "none", "flex"] }>
          <Go1LoginButton/>
          <Go1BasicButton theme={ THEME.ACCENT }/>
        </View>
        <ResponsiveNavbar/>
      </HeaderLayer>
    </ThemeContextProvider>
  )
}

Header.defaultProps = {
  theme: THEME.NOTE_HIGHEST
}
