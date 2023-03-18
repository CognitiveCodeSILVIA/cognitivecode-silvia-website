import * as React from "react";
import { Link } from "gatsby";
import { ButtonOutlined as Button } from "../../atoms";
import { Navigation, HomeIcon } from "../../molecules";

// Styles
const navBarStyle = {
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  backgroundColor: "#051334",
  borderRadius: "0 0 25px 25px",
  padding: "1.5em 2em",
  minWidth: "max-content",
};

// Constants
const navItems = [
  "Home",
  "Technology",
  "Features",
  "Integrations",
  "Solutions",
  "Contact",
];
const buttonText = "Chat with SILVIA";

export const NavBar = () => {
  return (
    <div id="nav-bar" style={navBarStyle}>
      <HomeIcon />
      <Navigation navItems={navItems} />
      <Link to="/">
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
};
