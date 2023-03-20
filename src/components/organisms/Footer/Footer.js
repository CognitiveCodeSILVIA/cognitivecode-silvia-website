import "@fontsource/source-sans-pro";
import * as React from "react";
import { CCTextIcon } from "../../molecules";
import { Typography } from "@material-ui/core";
import { Email as EmailIcon, Place as PlaceIcon } from "@material-ui/icons";
import { siteMetadata } from "../../../../gatsby-config";

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
  margin: "2em 2em 2em 0",
  width: "250px",
  borderLeft: "1px solid #3D588F",
  paddingLeft: "2em",
};

const listStyles = {
  listStyle: "none",
  paddingLeft: 0,
};

const listBreakStyles = {
  paddingBottom: "0.5em",
};

const itemStyles = {
  display: "flex",
  alignItems: "center",
};

const markerStyles = {
  paddingRight: "0.75em",
};

const typographyStyles = {
  fontWeight: 700,
  fontSize: "x-large",
};

const footerStyles = {
  display: "flex",
};

const hyperlinkStyles = {
  textDecoration: "none",
  cursor: "pointer",
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
      <ul style={listStyles}>
        <li style={itemStyles}>
          <div style={markerStyles}>
            <EmailIcon />
          </div>
          {emailAddress}
        </li>
        <div style={listBreakStyles} />
        <li style={itemStyles}>
          <div style={markerStyles}>
            <PlaceIcon />
          </div>
          {address}
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  const pages = siteMetadata.menuLinks;

  return (
    <div style={footerStyles}>
      <div style={footerStyles}>
        <CCIdentity />
        <Contact />
      </div>
      <div>
        <ul style={listStyles}>
          {pages.map((page) => {
            return (
              <li style={itemStyles} key={page.name}>
                <a href={page.link} style={hyperlinkStyles}>
                  {page.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
