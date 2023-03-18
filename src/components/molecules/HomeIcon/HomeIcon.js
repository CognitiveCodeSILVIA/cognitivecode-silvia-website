import * as React from "react";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";
import { CCLogoWhite } from "../../atoms";
import { withStyles } from "@material-ui/styles";

const CustomTypography = withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 19,
    paddingLeft: "0.5em",
  },
}))(Typography);

// Styles
const homeIconStyles = {
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  cursor: "pointer",
};

export const HomeIcon = () => {
  return (
    <Link to="/" id="cc-logo-nav-bar" style={homeIconStyles}>
      <CCLogoWhite size="small" />
      <CustomTypography>cognitivecode</CustomTypography>
    </Link>
  );
};
