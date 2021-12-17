import React from "react";
import "../styles/global.css";
import { globalCSS, Provider } from "@go1d/go1d";
import { ThemeContextProvider } from "../contexts/theme.context";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";
import { colors } from "@go1d/go1d/build/foundations";

globalCSS();

const theme = {
  colors: {
    ...colors,
    creme: "rgb(250, 242, 237)",
    fluro_yellow: "rgb(212, 255, 38)",
    salmon_pink: "rgb(253, 175, 141)",
    blue_grey: "rgb(88, 135, 177)",
    light_blue: "rgb(101, 202, 223)",
    white: "rgb(255, 255, 255)",
    black: "rgb(0, 0, 0)",
    C800: "#114954",
    C100: "#E9F4F7",
    N900: "#22292A",
    N800: "#394446",
    N700: "#666F71",
    N600: "#8E9799",
    N400: "#D3D8D9",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Provider theme={ theme }>
        <Component { ...pageProps } />
      </Provider>
    </ThemeContextProvider>
  );
}
