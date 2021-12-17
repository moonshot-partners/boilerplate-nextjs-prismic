import React from "react";
import { CardInfo } from "../elements/card-info";
import { ImgUrlOptimizedProvider } from "../providers/img-url-provider";

export function CardWrapped(props) {

  return (
    <ImgUrlOptimizedProvider thumbnail={ props.thumbnail } width={ props.width } height={ props.height }>
      <CardInfo { ...props } />
    </ImgUrlOptimizedProvider>
  )
}
