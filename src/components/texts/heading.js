import * as React from "react";
import { Text } from "@go1d/go1d";

const VisualHeadingLevel =["Heading 1", "Heading 2", "Heading 3", "Heading 4", "Heading 5", "Heading 6"];
const SemanticHeadingElements = ["h1", "h2", "h3", "h4", "h5", "h6"];
const VISUAL_HEADING_PROPS = {
  "Heading 1": {
    fontFamily: "serif",
    fontSize: 7,
    fontWeight: "semibold",
    lineHeight: "display",
  },
  "Heading 2": {
    fontFamily: "serif",
    fontSize: 5,
    fontWeight: "semibold",
    lineHeight: "display",
  },
  "Heading 3": {
    fontSize: 4,
    fontWeight: "bold",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 4": {
    fontSize: 3,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 5": {
    fontSize: 2,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 6": {
    fontSize: 1,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
};

const Heading = ({
  children,
  semanticElement = "h2",
  visualHeadingLevel = "Heading 2",
  ...otherProps
}) => {
  const visualHeadingProps = VISUAL_HEADING_PROPS[visualHeadingLevel];
  return (
    <Text  element={semanticElement} {...visualHeadingProps} {...otherProps}>
      {children}
    </Text>
  );
};

export  { Heading };