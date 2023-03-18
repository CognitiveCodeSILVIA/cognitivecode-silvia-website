import * as React from "react";
import { Tab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const NavItem = withStyles(() => ({
  root: {
    fontFamily: "inherit",
    textTransform: "none",
    opacity: 1,
    color: "#FFFFFF",
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab id={"nav-item"} disableRipple {...props} />);
