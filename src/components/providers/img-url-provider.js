import React from "react";
import { useAppContext } from "../../contexts/app-context";
import { ImageUrlHelper } from "../../utils/helpers/img-url-helper";

export function ImgUrlOptimizedProvider({ src, image, thumbnail, width, height, children }) {
  const { variableState } = useAppContext();

  const imageSrc = ImageUrlHelper.getResponsiveImagePath(src || image || thumbnail, width, height, variableState?.image?.extension);

  let newProps = { width, height };
  if (src) {
    newProps.src = imageSrc;
  } else if (image) {
    newProps.image = imageSrc;
  } else if (thumbnail) {
    newProps.thumbnail = imageSrc;
  }

  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...newProps });
    }
    return child;
  });

  return <>{ childrenWithProps }</>
}
