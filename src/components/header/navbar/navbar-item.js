import React from "react";
import { NavbarDropdown } from "./navbar-dropdown-item/navbar-dropdown";
import { NavbarSingleItem } from "./navbar-single-item/navbar-single-item";
import PropTypes from "prop-types";

export function NavbarItem(props) {
  const items = (props.items || []);

  if (items.length) {
    return <NavbarDropdown { ...props }/>
  } else {
    return <NavbarSingleItem  { ...props }/>
  }
}

NavbarItem.prototype = {
  title: PropTypes.string,
  url: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    title: PropTypes.string,
    icon: PropTypes.string
  })),
  noCaret: PropTypes.bool,
  separator: PropTypes.bool,
}
