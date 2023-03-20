import "@fontsource/source-sans-pro";
import * as React from "react";
import { CCTextIcon } from "../../molecules";
import { Typography } from "@material-ui/core";
import { Email as EmailIcon, Place as PlaceIcon } from "@material-ui/icons";
import { siteMetadata } from "../../../../gatsby-config";

// Styles
const borderStyles = {
  borderTop: "solid 1px #3D588F",
  alignSelf: "center",
  width: "100%",
};

const ccIdentityStyles = {
  margin: "2em 2em 2em 0",
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

const externalLinksStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "300px",
  paddingTop: "2em",
  paddingRight: "3em",
};

const footerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "1em",
  minWidth: "1020px",
};

const footerChildrenStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const footerLinksStyles = {
  listStyle: "none",
  paddingLeft: 0,
  lineHeight: "2.5em",
};

const hyperlinkStyles = {
  textDecoration: "none",
  cursor: "pointer",
};

const leftContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1em",
};

const listStyles = {
  listStyle: "none",
  paddingLeft: 0,
};

const listBreakStyles = {
  paddingBottom: "0.5em",
};

const listItemStyles = {
  display: "flex",
  alignItems: "center",
};

const markerStyles = {
  paddingRight: "0.75em",
};

const typographyStyles = {
  fontFamily: "Source Sans Pro",
  fontWeight: 700,
  fontSize: "x-large",
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
        <li style={listItemStyles}>
          <div style={markerStyles}>
            <EmailIcon />
          </div>
          {emailAddress}
        </li>
        <div style={listBreakStyles} />
        <li style={listItemStyles}>
          <div style={markerStyles}>
            <PlaceIcon />
          </div>
          {address}
        </li>
      </ul>
    </div>
  );
};

const FooterLinks = () => {
  const menuLinks = siteMetadata.menuLinks;
  const externalLinks = siteMetadata.externalLinks;

  return (
    <>
      <ul style={footerLinksStyles}>
        {menuLinks.map((page) => {
          return (
            <li style={listItemStyles} key={page.name}>
              <a href={page.link} style={hyperlinkStyles}>
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul style={footerLinksStyles}>
        {externalLinks.map((page) => {
          return (
            <li style={listItemStyles} key={page.name}>
              <a href={page.link} style={hyperlinkStyles}>
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const Footer = () => {
  return (
    <div style={footerStyles}>
      <div style={borderStyles} />
      <div style={footerChildrenStyles}>
        <div style={leftContainerStyles}>
          <CCIdentity />
          <Contact />
        </div>
        <div style={externalLinksStyles}>
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};
