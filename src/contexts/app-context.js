import React, { createContext, useContext, useEffect, useState } from "react";
import { getBrowser } from "../utils/helpers/browser";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [variableState, setVariableState] = useState({ image: { extension: "png" } });
  useEffect(() => {
    const browser = getBrowser();
    let extension = "png";
    switch (browser.name) {
      case "Edge":
        if (browser.version >= 20)
          extension = "webp";
        break;
      case "Firefox":
        if (browser.version >= 70)
          extension = "webp";
        break;
      case "Chrome":
        if (browser.version >= 30)
          extension = "webp";
        break;
      case "Safari":
        if (browser.version >= 15)
          extension = "webp";
        break;
      case "Opera":
        if (browser.version >= 20)
          extension = "webp";
        break;
    }
    setVariableState({ image: { extension } })
  }, []);

  const values = React.useMemo(() => (
      { variableState, setVariableState }
    ), [variableState]
  );

  return <AppContext.Provider value={ values }>{ children }</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}