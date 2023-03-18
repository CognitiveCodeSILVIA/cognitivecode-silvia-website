import * as React from "react";
import CCLogo from "../../../assets/cc-logo-white.png";

export const CCLogoWhite = (props) => {
  var size = props.size;

  //TODO: set sizes for large and default
  if (size === "large")
    return <img src={CCLogo} id="cc-logo-white-png" alt="CognitiveCode logo" />;
  if (size === "small")
    return (
      <img
        src={CCLogo}
        id="cc-logo-white-png"
        alt="CognitiveCode logo"
        width="37.71px"
        height="39px"
      />
    );
  return (
    <img
      src={CCLogo}
      id="cc-logo-white-png"
      alt="CognitiveCode logo"
      maxWidth="75px"
    />
  );
};
