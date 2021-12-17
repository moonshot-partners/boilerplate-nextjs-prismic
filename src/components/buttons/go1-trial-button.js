import { ButtonMinimal, Text } from "@go1d/go1d";
import React, { useContext } from "react";
import { fontNavbarStyle } from "../header/navbar/styles";
import { ThemeContext } from "../../contexts/theme.context";


export function Go1TrialButton({ display }) {
  const { theme: { COLOR_BUTTON_DEFAULT } } = useContext(ThemeContext);

  return (
    <ButtonMinimal display={ display }
                   href="https://www.go1.com/signup/email"
                   border="1"
                   borderColor="faded"
                   marginX={ 3 }
                   css={ fontNavbarStyle }>
      <Text fontSize={ 1 } color={ COLOR_BUTTON_DEFAULT }>
        Start my free trial
      </Text>
    </ButtonMinimal>
  )
}
