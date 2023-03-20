import * as React from "react";
import { Link } from "gatsby";
import { ButtonOutlined as Button } from "../../atoms";
import { Navigation, CCTextIcon } from "../../molecules";
import { siteMetadata } from "../../../../gatsby-config";

// Styles
const navBarStyles = {
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  backgroundColor: "#051334",
  borderRadius: "0 0 25px 25px",
  padding: "1.5em 2em",
  minWidth: "max-content",
};

export const NavBar = () => {
  const textIconColor = "white";
  const buttonText = "Chat with SILVIA";
  const pages = siteMetadata.menuLinks;

  return (
    <div id="nav-bar" style={navBarStyles}>
      <CCTextIcon color={textIconColor} />
      <Navigation pages={pages} />
      <Link to="/">
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
};
