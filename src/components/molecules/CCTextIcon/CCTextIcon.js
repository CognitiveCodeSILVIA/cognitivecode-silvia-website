import * as React from "react";
import { Link } from "gatsby";
import { Typography } from "@material-ui/core";
import { CCLogo } from "../../atoms";
import { withStyles } from "@material-ui/styles";

const TypographyWhite = withStyles(() => ({
  root: {
    color: "#FFFFFF",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 19,
    paddingLeft: "0.5em",
  },
}))(Typography);

const TypographyNavy = withStyles(() => ({
  root: {
    color: "#253D6D",
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: 19,
    paddingLeft: "0.5em",
  },
}))(Typography);

// Styles
const ccTextIconStyles = {
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  cursor: "pointer",
  textDecoration: "none",
};

export const CCTextIcon = ({ color }) => {
  const size = "small";
  const id = "cc-text-logo-nav-bar";

  if (color === "navy")
    return (
      <Link to="/" id={id} style={ccTextIconStyles}>
        <CCLogo size={size} color={color} />
        <TypographyNavy>cognitivecode</TypographyNavy>
      </Link>
    );
  return (
    <Link to="/" id={id} style={ccTextIconStyles}>
      <CCLogo size={size} color={color} />
      <TypographyWhite>cognitivecode</TypographyWhite>
    </Link>
  );
};
