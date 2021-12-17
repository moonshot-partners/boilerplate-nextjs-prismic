import { ThemeContext } from "../../contexts/theme.context";
import { Container, View } from "@go1d/go1d";
import React, { useContext } from "react";
import { ResponsiveLayer } from "./responsive-layer";

export function HeaderLayer({ children }) {
  const { theme: { BACKGROUND, NOTE_HIGHEST } } = useContext(ThemeContext);
  return (
    <View backgroundColor={ [BACKGROUND, NOTE_HIGHEST] }
          element="header"
          css={ { fontFamily: "DM Sans, Arial, Helvetica, sans-serif;" } }>
      <ResponsiveLayer>
      <Container display="flex"
                   width="100%"
                   flexShrink={ 1 }
                   flexDirection="row"
                   paddingY={ 4 }
                   justifyContent={ "space-between" }
                   alignItems={ ["left"] }>
          { children }
        </Container>
      </ResponsiveLayer>
    </View>
  )
}
