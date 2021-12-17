import PropTypes from "prop-types";
import React, { useContext } from "react";
import { ButtonMinimal, Text, View } from "@go1d/go1d";
import { IconView } from "../../../views/icon-view";
import { ThemeContext } from "../../../../contexts/theme.context";
import { IconChevronDown } from "@go1d/go1d/build/components/Icons";
import { navbarSingleItemButtonContainerStyle, navbarSingleItemButtonStyle, navbarStyle } from "../styles";

export function NavbarSingleItem(props) {
  const { title, url, noCaret } = props;
  const { theme: { COLOR_NAVBAR } } = useContext(ThemeContext);


  return (
    <ButtonMinimal color={ COLOR_NAVBAR }
                   href={ url }
                   { ...navbarSingleItemButtonStyle }>
      <View { ...navbarSingleItemButtonContainerStyle }>
        <Text fontSize={ 1 } css={ navbarStyle }>
          { title }
        </Text>
        {
          noCaret === false &&
          <IconChevronDown marginLeft={ 3 } css={ { opacity: 0.65 } }/>
        }
      </View>
    </ButtonMinimal>
  )
}

NavbarSingleItem.prototype = {
  title: PropTypes.string,
  url: PropTypes.string,
  noCaret: PropTypes.bool,
}
