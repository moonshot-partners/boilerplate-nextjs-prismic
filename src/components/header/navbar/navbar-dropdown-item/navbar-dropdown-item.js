import React from "react";
import { SpotIcon, Text, View } from "@go1d/go1d";
import { MenuItem } from "@trendmicro/react-dropdown";
import { navbarItemStyle } from "../styles";
import { THEME_COLOR_ACCENT } from "../../../../constants/theme.constant";
import { IconChevronRight } from "@go1d/go1d/build/components/Icons";

export default class DropdownMenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hover: false }
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    if (this.props.onMouseEnterHandler)
      this.props.onMouseEnterHandler(this.props.index);
    else {
      this.setState({ hover: true })
    }
  }

  onMouseLeaveHandler() {
    if (this.props.onMouseLeaveHandler)
      this.props.onMouseLeaveHandler(this.props.index);
    else {
      this.setState({ hover: false })
    }
  }

  render() {
    let style = { cursor: "pointer" };
    if (this.props.showHoverStyle || this.state.hover) {
      style = {
        background: "rgb(235, 244, 247)",
        cursor: "pointer"
      };
    }

    return (
      <MenuItem onMouseEnter={ this.onMouseEnterHandler } onMouseLeave={ this.onMouseLeaveHandler } style={ style }>
        <View element={ this.props.dontHaveURL ? "p" : "a"}
              href={ this.props.url }
              css={ {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row"
              } }>
          {
            this.props.icon &&
            <SpotIcon name={ this.props.icon } color={ THEME_COLOR_ACCENT }/>
          }
          <Text paddingY={ this.props.paddingY || "12px" }
                paddingX={ this.props.paddingX || 3 }
                { ...navbarItemStyle }>
            { this.props.title }
          </Text>
          {
            this.props.icon &&
            <div style={ {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: "row"
            } }>
                <IconChevronRight color={ THEME_COLOR_ACCENT } css={ { opacity: 0.3 } }/>
            </div>
          }
        </View>
      </MenuItem>
    )
  }
}
