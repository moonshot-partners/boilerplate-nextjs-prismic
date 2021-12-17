import React, { Component } from "react";
import { PathHelper } from "../../../utils/path-helper";
import { View } from "@go1d/go1d";
import { ELEMENT } from "../../../constants/elements.constant";
import { VIEW_LAZY_LOADING } from "../../../constants/common.constant";

export class ImageView extends Component {

  render() {
    const props = { ...this.props };
    const pathHelper = new PathHelper();
    const { width, height, src } = props;
    const sources = this.getSourceElements(props, pathHelper);

    return (
      <picture style={ { minWidth: props.width, minHeight: props.height } }>
        { sources }
        <View { ...props }
              element={ ELEMENT.IMAGE }
              loading={ VIEW_LAZY_LOADING }
              src={ pathHelper.getResponsiveImagePath(src, width, height) }/>
      </picture>
    );
  }

  getSourceElements(props, pathHelper) {
    const sources = [];

    if (props.responsive && Array.isArray(props.responsive)) {
      props.responsive.forEach((item, index) => {
        sources.push(
          <source key={ index }
                  media={ `(max-width:${ item.media }px)` }
                  srcSet={ pathHelper.getResponsiveImagePath(props.src, item.width, item.height) }/>
        );
      });
    }

    delete props.responsive;
    return sources;
  }
}