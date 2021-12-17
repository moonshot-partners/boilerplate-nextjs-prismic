import React from "react";
import { DEFAULT_ICON_ARIA_LABEL, EMPTY, VIEW_LAZY_LOADING } from "../../../constants/common.constant";
import { ELEMENT } from "../../../constants/elements.constant";
import { View } from "@go1d/go1d";

export function IconView(props) {
  return (
    <View { ...props }
          src={ props.icon || props.src }
          alt={ props.alt || EMPTY }
          aria-label={ props.ariaLabel || DEFAULT_ICON_ARIA_LABEL }
          element={ ELEMENT.IMAGE }
          loading={ VIEW_LAZY_LOADING }/>
  );
}
