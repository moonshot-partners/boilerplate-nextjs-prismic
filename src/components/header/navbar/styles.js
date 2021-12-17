export const separatorStyle = {
  marginLeft: "16px",
  marginRight: "20px",
  display: "flex",
  opacity: "0.3",
  height: "24px",
  borderStyle: "solid",
  borderTopWidth: "0",
  borderRightWidth: "0",
  borderBottomWidth: "0",
  borderLeftWidth: "1px",
}

export const fontNavbarStyle = {
  fontFamily: "DM Sans, Arial, Helvetica, sans-serif !important",
  fontWeight: 500,
}

export const navbarStyle = {
  ...fontNavbarStyle,
  minWidth: "62px",
  textAlign: "center",
}

export const navbarSingleItemButtonStyle = {
  type: "Link",
  display: ["none", "flex"],
  color: "accent",
  paddingY: 0,
  marginX: 0,
  css: { borderRadius: "10px" },
}

export const navbarSingleItemButtonContainerStyle = {
  element: "div",
  css: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  }
}

export const navbarContainerItemStyle = {
  style: {
    border: "none",
    borderRadius: "5px",
    whiteSpace: "nowrap"
  }
}

export const navbarContainerItemExtraStyle = {
  style: {
    border: "none",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-start",
    alignItems: "flex-start",
  }
}

export const navbarItemStyle = {
  color: "accent",
  display: "flex",
  css: {
    ...navbarStyle,
    fontSize: "16px"
  }
}

export const navbarSubItemsStyle = {
  borderLeft: "1px solid #ddd",
  paddingTop: "16px",
  paddingBottom: "16px",
  paddingLeft: "8px",
  margin: "0px",
  flexDirection: "column",
  flex: "0 0 auto",
  maxWidth: "100%",
  maxHeight: "none",
  minHeight: "0px",
  minWidth: "0px",
  color: "inherit",
  textAlign: "inherit",
  display: "grid",
  gridAutoFlow: "column",
  gridTemplateRows: "repeat(8, auto)",
}
