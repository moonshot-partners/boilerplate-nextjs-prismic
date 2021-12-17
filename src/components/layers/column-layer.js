import { View } from "@go1d/go1d";
import React from "react";
import { ResponsiveLayer } from "./responsive-layer";


export function ColumnLayer(props) {
  return (
    <ResponsiveLayer backgroundColor={ props.backgroundColor }>
      <View { ...props }
            flexDirection="row"
            flexWrap="wrap"
            alignItems="start"
            justifyContent="space-between"
      >
        { props.children }
      </View>
    </ResponsiveLayer>
  )
}
