import React, { Component } from "react";
import { PathHelper } from "../../../utils/path-helper";
import { View } from "@go1d/go1d";
import { ELEMENT } from "../../../constants/elements.constant";

export class ImageView extends Component {

  render() {
    const pathHelper = new PathHelper();

    let { width, height, src, alt, responsive, ...props } = this.props;
    alt = alt || PathHelper.getImageName(src);
    const sources = this.getSourceElements(src, responsive, pathHelper);

    return (
      <picture>
        { sources }
        <View { ...props }
              element={ ELEMENT.IMAGE }
              width={ width }
              height={ height }
              src={ pathHelper.getResponsiveImagePath(src, width, height) }
              alt={ alt }/>
      </picture>
    );
  }

  getSourceElements(src, responsive, pathHelper) {
    const sources = [];

    if (responsive && Array.isArray(responsive)) {
      responsive.forEach((item, index) => {
        sources.push(
          <source key={ index }
                  media={ `(max-width:${ item.media }px)` }
                  srcSet={ pathHelper.getResponsiveImagePath(src, item.width, item.height) }/>
        );
      });
    }

    return sources;
  }
}
