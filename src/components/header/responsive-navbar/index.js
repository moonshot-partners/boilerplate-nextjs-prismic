import React, { useContext, useState } from "react";
import { slide as Slider } from "react-burger-menu";
import IconMenu from "@go1d/go1d/build/components/Icons/Menu";
import { View } from "@go1d/go1d";
import { IconCross } from "@go1d/go1d/build/components/Icons";
import { DropdownLinks } from "../../../../in/utils/navbar-urls";
import { ThemeContext } from "../../../contexts/theme.context";
import { Go1TransparentButton } from "../../buttons/go1-transparent-button";
import { THEME } from "../../../constants/theme.constant";
import { Go1BasicButton } from "../../buttons/go1-basic-button";
import * as PropTypes from "prop-types";


function ResponsiveLayer(props) {
  let { children } = props;
  return (
    <View display={ ["flex", "flex", "none"] }>{ children } </View>
  );
}

ResponsiveLayer.propTypes = { children: PropTypes.any };

function SlideLayer(props) {
  let { children, isOpen, onClose } = props;
  return (
    <Slider right
            customBurgerIcon={ false }
            customCrossIcon={ <IconCross/> }
            isOpen={ isOpen }
            onClose={ onClose }
            noOverlay>
      { children }
    </Slider>
  );
}

SlideLayer.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.any,
  onClose: PropTypes.any
};

function Icon(props) {
  let { color, onToggle } = props;
  return (
    <IconMenu size={ 6 } onClick={ onToggle } color={ color }/>
  );
}

Icon.propTypes = {
  color: PropTypes.any,
  onToggle: PropTypes.any
};

function ButtonsBlock(props) {
  let { children } = props;
  return (
    <View className="bm-option-button">
      <View alignItems="center">{ children }</View>
    </View>
  );
}

ButtonsBlock.propTypes = { children: PropTypes.any };

function BackOption({ onSelectOption, selectedOption }) {
  return (
    <View id="Home"
          element="div"
          className="bm-option active"
          color="dangerMid"
          onClick={ () => onSelectOption('home') }>
      { selectedOption }
    </View>
  );
}


export default function ResponsiveNavbar() {
  const { theme: { COLOR_ICON } } = useContext(ThemeContext);
  const [isOpenSlide, toggleSlide] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home");
  const [prevOption, setPrevOption] = useState("Home");
  const onClose = () => toggleSlide(false);
  const onToggle = () => toggleSlide(!isOpenSlide);

  const pushLinks = (item, options) => {
    if (item.links) {
      item.links.map((link) =>  options.push(link))
    } else {
      options.push(item)
    }
  }

  const getListItems = (currentOption, optionList) => {
    let options= [];
    optionList.forEach(element => {
      if (element.title === currentOption) {
        pushLinks(element, options)
      } else if (element.links) {
        element.links.forEach(item => {
          if (item.title === currentOption) {
            pushLinks(item, options)
          }
        })
      }
    }) 
    return options;
  }

  const getCurrentList = (currentOption, optionList) => {
    let list = getListItems(currentOption, optionList)
    if (!list.length) {
      list = optionList
    }

    const handleSelectedOption = (option) => {
      setPrevOption(currentOption);
      setSelectedOption(option);
    }
    
    return list.map((item, index) => {
      if (item.url || item.link) {
        return (
          <a id={ item.title }
              key={ index }
              className="bm-option"
              href={ item.url || item.link }>
            { item.title }
          </a>
        );
      }
      return (
        <View id={ item.title }
              key={ index }
              className="bm-option"
              onClick={ () => handleSelectedOption(item.title) }>
          { item.title }
        </View>
      );
    });
  };

  const handleBackOption = (option) => {
    setSelectedOption(prevOption)
    setPrevOption(option)
  }

  return (
    <ResponsiveLayer>
      <Icon onToggle={ onToggle } color={ COLOR_ICON }/>
      <SlideLayer onClose={ onClose } isOpen={ isOpenSlide }>
        <View className="bm-options">
          <BackOption onSelectOption={ (option) => handleBackOption(option) }
                      selectedOption={ selectedOption }/>
          { getCurrentList(selectedOption, DropdownLinks, setPrevOption) }
        </View>
        <ButtonsBlock>
          <Go1TransparentButton text={ "Log in" }
                                href={ "https://www.go1.com/login" }
                                marginBottom={ 3 }
                                marginTop={ 4 }
                                theme={ THEME.BACKGROUND }/>
          <Go1BasicButton text={ "Book a demo" }
                          width={ "190px" }
                          marginBottom={ 3 }/>
        </ButtonsBlock>
      </SlideLayer>
    </ResponsiveLayer>
  );
}