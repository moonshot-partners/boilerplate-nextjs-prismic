import { Container, View } from "@go1d/go1d";
import React from "react";


export function ResponsiveLayer({ backgroundColor,  maxWidth, paddingX, children, ...props }) {

  return (
    <View backgroundColor={ backgroundColor }>
      <Container paddingX={ paddingX }
                 maxWidth={ maxWidth }
                 marginLeft="auto"
                 marginRight="auto"
                 { ...props }>
        { children }
      </Container>
    </View>
  )
}

ResponsiveLayer.defaultProps = {
  maxWidth: "1500px",
  paddingX: [4, 4, 7, 0]
};
