import * as React from "React";
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

const homeIconStyles = {
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  cursor: "pointer",
};

const handleClick = () => {};

export const HomeIcon = () => {
  return (
    <div id="cc-logo-nav-bar" style={homeIconStyles}>
      <Link to="/">
        <CCLogoWhite size="small" />
        <CustomTypography>cognitivecode</CustomTypography>
      </Link>
    </div>
  );
};
