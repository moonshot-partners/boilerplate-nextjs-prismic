export const THEME_COLOR_BACKGROUND = "background";
export const THEME_COLOR_ACCENT = "accent";
export const THEME_COLOR_DEFAULT = "default";

export const THEME_COLOR_HIGHLIGHT = "highlight";
export const THEME_COLOR_SUCCESS = "success";
export const THEME_COLOR_SUCCESS_HIGHEST = "successHighest";
export const THEME_COLOR_SUCCESS_HIGH = "successHigh";
export const THEME_COLOR_SUCCESS_MID = "successMid";
export const THEME_COLOR_SUCCESS_LOW = "successLow";
export const THEME_COLOR_SUCCESS_LOWEST = "successLowest";
export const THEME_COLOR_NOTE = "note";
export const THEME_COLOR_NOTE_HIGHEST = "noteHighest";
export const THEME_COLOR_NOTE_HIGH = "noteHigh";
export const THEME_COLOR_NOTE_MID = "noteMid";
export const THEME_COLOR_NOTE_LOW = "noteLow";
export const THEME_COLOR_NOTE_LOWEST = "noteLowest";
export const THEME_COLOR_WARNING = "warning";
export const THEME_COLOR_WARNING_HIGHEST = "warningHighest";
export const THEME_COLOR_WARNING_HIGH = "warningHigh";
export const THEME_COLOR_WARNING_MID = "warningMid";
export const THEME_COLOR_WARNING_LOW = "warningLow";
export const THEME_COLOR_WARNING_LOWEST = "warningLowest";
export const THEME_COLOR_DANGER = "danger";
export const THEME_COLOR_DANGER_HIGHEST = "dangerHighest";
export const THEME_COLOR_DANGER_HIGH = "dangerHigh";
export const THEME_COLOR_DANGER_MID = "dangerMid";
export const THEME_COLOR_DANGER_LOW = "dangerLow";
export const THEME_COLOR_DANGER_LOWEST = "dangerLowest";
export const THEME_COLOR_VIVID_HIGHEST = "vividHighest";
export const THEME_COLOR_VIVID_HIGH = "vividHigh";
export const THEME_COLOR_VIVID_MID = "vividMid";
export const THEME_COLOR_VIVID_LOW = "vividLow";
export const THEME_COLOR_VIVID_LOWEST = "vividLowest";

export const color = {
  neutral: {
    N000: "#FFFFFF",
    N100: "#F7F8F8",
    N200: "#F1F3F3",
    N300: "#E6E9EA",
    N400: "#D3D8D9",
    N500: "#B5BEC0",
    N600: "#8C9597",
    N700: "#666F71",
    N800: "#394446",
    N900: "#22292A",
  },
  cyan: {
    C50: "#F4FAFB",
    C100: "#E9F4F7",
    C400: "#65CADF",
    C700: "#317481",
    C800: "#114954",
  },
  blue: {
    B50: "#F0F8FE",
    B100: "#EAF0F6",
    B500: "#5887B1",
    B700: "#315A81",
    B800: "#143452",
  },
  lime: {
    L50: "#F9FFF0",
    L100: "#F7FFE0",
    L400: "#D4FF26",
    L700: "#5F6F2A",
    L800: "#34400D",
  },
  red: {
    R50: "#FBF6F4",
    R100: "#FAF2ED",
    R200: "#FDAF8D",
    R700: "#B03603",
    R800: "#5E2108",
  },
  orange: {
    O50: "#FFF9F0",
    O100: "#FFF4E0",
    O300: "#EEB068",
    O700: "#815C31",
    O800: "#553611",
  },
  viz: {
    category1: "#606AAC",
    category2: "#279DDD",
    category3: "#2B777D",
    category4: "#E17575",
    category5: "#493181",
    category1Shade: "#465195",
    category2Shade: "#1781BA",
    category3Shade: "#1B555A",
    category4Shade: "#D34545",
    category5Shade: "#332060",
    zeroData: "#949493",
    zeroDataShade: "#6E6E6D",
    reference: "#CD747D",
    referenceShade: "#A44C54",
  },
};
export const THEME = {
  ACCENT: THEME_COLOR_ACCENT,
  BACKGROUND: THEME_COLOR_BACKGROUND,
  VIVID_MID: THEME_COLOR_VIVID_MID,
  NOTE_HIGHEST: THEME_COLOR_NOTE_HIGHEST,
  DANGER_HIGHEST: THEME_COLOR_DANGER_HIGHEST,
  DEFAULT: 0,
}

export const THEME_STYLE = {
  [THEME.ACCENT]: {
    COLOR_BACKGROUND: THEME_COLOR_ACCENT,
    COLOR_CONTRAST: THEME_COLOR_BACKGROUND,
    COLOR_BUTTON_TRANSPARENT: THEME_COLOR_BACKGROUND,
    COLOR_BUTTON_DEFAULT: THEME_COLOR_BACKGROUND,
    COLOR_BUTTON_ACCENT: THEME_COLOR_VIVID_MID,
    BACKGROUND_BUTTON: THEME_COLOR_ACCENT,
    COLOR_BUTTON_ACCENT: THEME_COLOR_VIVID_MID,
    COLOR_BUTTON: THEME_COLOR_VIVID_MID,
    COLOR_NAVBAR: THEME_COLOR_BACKGROUND,
    NOTE_HIGHEST:  THEME_COLOR_NOTE_HIGHEST
  },
  [THEME.VIVID_MID]: {
    BACKGROUND_BUTTON: THEME_COLOR_VIVID_MID,
    COLOR_BUTTON: THEME_COLOR_SUCCESS_LOWEST,
  },
  [THEME.BACKGROUND]: {
    BACKGROUND: THEME_COLOR_BACKGROUND,
    CONTRAST: THEME_COLOR_ACCENT,
    BUTTON_TRANSPARENT: THEME_COLOR_SUCCESS_LOW,
    BUTTON_DEFAULT: THEME_COLOR_DEFAULT,
    BUTTON_ACCENT: THEME_COLOR_ACCENT,
    BACKGROUND_BUTTON: THEME_COLOR_DEFAULT,
    COLOR_BUTTON: THEME_COLOR_DEFAULT,
    NAVBAR: THEME_COLOR_SUCCESS_LOW,
  },
}
