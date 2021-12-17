import React from "react";
import DropdownMenuItem from "./navbar-dropdown-item";
import { NavbarSingleItem } from "../navbar-single-item/navbar-single-item";
import { navbarContainerItemExtraStyle, navbarContainerItemStyle, navbarSubItemsStyle } from "../styles";
import Dropdown, { DropdownMenu, DropdownMenuWrapper, DropdownToggle } from "@trendmicro/react-dropdown";

export class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      openSubMenu: false,
      indexSubMenuHovered: 0,
    };
  }

  onMenuItemMouseEnterHandler = (index) => {
    this.setState({
      ...this.state,
      indexSubMenuHovered: index
    })
  }

  onMenuWrapperEnterHandler = () => {
    this.setState({
      ...this.state,
      openSubMenu: true,
    })
  }

  onDropDownToggle = (opened) => {
    this.setState({
      ...this.state,
      openSubMenu: opened !== false,
      hover: opened
    })
  }

  render() {
    let items = (this.props.items || []);
    let links = (items[this.state.indexSubMenuHovered].links || []);
    let subItems = links.map((item, index) =>
      <DropdownMenuItem { ...item } key={ index }/>
    )

    const menuItems = items.map((item, index) =>
      <DropdownMenuItem key={ index }
                        index={ index }
                        paddingY={ 3 }
                        { ...item }
                        dontHaveURL
                        showHoverStyle={ index === this.state.indexSubMenuHovered }
                        onMouseEnterHandler={ this.onMenuItemMouseEnterHandler }/>
    )
    return (
      <Dropdown autoOpen
                style={ { verticalAlign: "unset" } }
                onToggle={ this.onDropDownToggle }>
        <DropdownToggle componentClass={ () => <NavbarSingleItem { ...this.props }/> }/>
        <DropdownMenuWrapper
          style={ {
            ...(!!links.length ? navbarContainerItemExtraStyle.style : navbarContainerItemStyle.style),
            ...(subItems.length && (!!this.state.openSubMenu || !!this.state.hover) ? { padding: "8px 16px" } : {})
          } }
          onMouseEnter={ this.onMenuWrapperEnterHandler }>
          <DropdownMenu style={ {
            ...navbarContainerItemStyle.style,
            ...(!!links.length ? { width: "290px", paddingTop: "16px" } : {})
          } }>
            { menuItems }
          </DropdownMenu>
          {
            !!links.length && (!!this.state.openSubMenu || !!this.state.hover) &&
            <div style={ navbarSubItemsStyle }>
              { subItems }
            </div>
          }
        </DropdownMenuWrapper>
      </Dropdown>
    );
  }

}
