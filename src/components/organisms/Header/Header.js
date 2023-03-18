import * as React from "react";
import { ButtonOutlined as Button } from "../../atoms";
import { CustomTabs } from "../../molecules";

// Styles
const headerStyle = {
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

export const Header = () => {
  return (
    <div id="header" style={headerStyle}>
      <CustomTabs navItems={navItems} />
      <Button>{buttonText}</Button>
    </div>
  );
};
