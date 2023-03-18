import * as React from "react";
import { ButtonOutlined as Button } from "../../atoms";
import { CustomTabs } from "../../molecules";

// Styles
const navBarStyle = {
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
      <CustomTabs navItems={navItems} />
      <Button>{buttonText}</Button>
    </div>
  );
};
