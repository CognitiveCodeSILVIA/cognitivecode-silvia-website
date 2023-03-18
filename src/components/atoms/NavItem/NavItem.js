import * as React from "react";
import { Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const NavItem = withStyles(() => ({
  root: {
    fontFamily: "inherit",
    textTransform: "none",
    minWidth: "7.5em",
    margin: 0,
    opacity: 1,
    color: "#FFFFFF",
    padding: 0,
    "&:focus": {
      opacity: 1,
    },
    "& > span": {
      width: "min-content",
    },
  },
}))((props) => <Tab id={"nav-item"} disableRipple {...props} />);
