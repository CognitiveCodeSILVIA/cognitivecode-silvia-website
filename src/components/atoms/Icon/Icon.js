import * as React from "react";
import CCLogoWhite from "../../../assets/cc-logo-white.png";
import CCLogoNavy from "../../../assets/cc-logo-navy.png";

export const CCLogo = ({ size, color }) => {
  //TODO: set sizes for large and default
  var ccLogo = CCLogoWhite;
  if (color === "navy") {
    ccLogo = CCLogoNavy;
  }
  const id = `cc-logo-${color}-png`;
  const alt = "CognitiveCode logo";

  if (size === "large") return <img src={ccLogo} id={id} alt={alt} />;
  if (size === "small")
    return <img src={ccLogo} id={id} alt={alt} width="37.71px" height="39px" />;
  return <img src={ccLogo} id={id} alt={alt} maxWidth="75px" />;
};
