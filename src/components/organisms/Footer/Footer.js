import * as React from "react";
import { CCTextIcon } from "../../molecules";
import "@fontsource/source-sans-pro";
import { Typography } from "@material-ui/core";

// Styles
const ccIdentityStyles = {
  margin: "2em",
  width: "250px",
  height: "fit-content",
  color: "#253D6D",
  lineHeight: "1.35em",
};

const contactStyles = {
  fontFamily: "Source Sans Pro",
  color: "#051334",
  margin: "2em",
};

const typographyStyles = {
  fontWeight: 700,
  fontSize: "x-large",
};

const footerStyles = {
  display: "flex",
};

const CCIdentity = () => {
  const color = "navy";
  const text =
    "SILVIA breathes life into virtual characters and voice interfaces by converging a breakthrough technology in NLP and A.I.";

  return (
    <div style={ccIdentityStyles}>
      <CCTextIcon color={color} />
      <p>{text}</p>
    </div>
  );
};

const Contact = () => {
  const emailAddress = "info@cognitivecode.com";
  const address = "80 Red Schoolhouse Road,\nSpring Valley, NY 10977";

  return (
    <div style={contactStyles}>
      <Typography style={typographyStyles}>Contact Us</Typography>
      <ul>
        <li>{emailAddress}</li>
        <li>
          <div>{address}</div>
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <div style={footerStyles}>
      <CCIdentity />
      <Contact />
    </div>
  );
};
