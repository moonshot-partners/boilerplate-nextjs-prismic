import React from "react";
import { DropdownLinks } from "../../../../in/utils/navbar-urls";
import { NavbarItem } from "./navbar-item";
import { View } from "@go1d/go1d";
import { NavbarSeparator } from "./navbar-separator/navbar-separator";


export function NavBar() {

  const navbarItems = DropdownLinks.map((dropdownItem, index) => (
      <React.Fragment key={ index }>
        <NavbarItem title={ dropdownItem.title }
                    url={ dropdownItem.url }
                    items={ dropdownItem.links }
                    noCaret={ dropdownItem.noCaret }/>
        <NavbarSeparator show={ dropdownItem.separator }/>
      </React.Fragment>
    )
  )

  return (
    <View element="nav"
          alignItems="center"
          flexDirection={ ["none", "row"] }
          marginLeft={ 2 }
          marginRight={ 0 }
          display={ ["none", "none", "flex"] }>
      { navbarItems }
    </View>
  )
}
