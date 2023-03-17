import * as React from "react";
import { ButtonOutlined as Button } from "../../atoms";

// Styles
const headerStyle = {
  backgroundColor: "#051334 0.7",
  borderRadius: "0 0 25px 25px",
  padding: "1.5em 2em",
};

// Constants
const buttonText = "Chat with SILVIA";

export const Header = () => {
  return (
    <div id="header" style={headerStyle}>
      <Button>{buttonText}</Button>
    </div>
  );
};
