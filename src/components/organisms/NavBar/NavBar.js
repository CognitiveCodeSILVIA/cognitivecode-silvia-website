import * as React from "react";
import { Typography } from "@material-ui/core";
import { ButtonOutlined as Button, CCLogoWhite } from "../../atoms";
import { CustomTabs, HomeIcon } from "../../molecules";

// Styles
const navBarStyle = {
  justifyContent: "space-between",
  display: "flex",
  backgroundColor: "#051334",
  borderRadius: "0 0 25px 25px",
  padding: "1.5em 2em",
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
      <CustomTabs navItems={navItems} />
      <Button>{buttonText}</Button>
    </div>
  );
};
