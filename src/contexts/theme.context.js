import React, { createContext, useState } from "react";
import { THEME, THEME_STYLE } from "../constants/theme.constant";


export const ThemeContext = createContext(THEME_STYLE[THEME.ACCENT]);

export const ThemeContextProvider = ({ children, defaultTheme }) => {
  const state = THEME_STYLE[defaultTheme] || THEME_STYLE[THEME.DEFAULT];
  const [theme, setTheme] = useState(state);

  const toggleTheme = (newTheme) => {
    setTheme(THEME_STYLE[newTheme]);
  }

  return <ThemeContext.Provider value={ { theme, toggleTheme } }>{ children }</ThemeContext.Provider>;
}

ThemeContextProvider.defaultProps = {
  defaultTheme: THEME.BACKGROUND
}
