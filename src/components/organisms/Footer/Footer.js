import "@fontsource/source-sans-pro";
import * as React from "react";
import { CCTextIcon } from "../../molecules";
import { Typography } from "@material-ui/core";
import { Email as EmailIcon, Place as PlaceIcon } from "@material-ui/icons";
import { siteMetadata } from "../../../../gatsby-config";

// Styles
const styles = {
  parentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "1em",
    minWidth: "1020px",
    padding: "0.5em",
  },
  childContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactContainer: {
    fontFamily: "Source Sans Pro",
    color: "#051334",
    margin: "2em 2em 2em 0",
    width: "250px",
    borderLeft: "1px solid #3D588F",
    paddingLeft: "2em",
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    paddingTop: "2em",
    paddingRight: "3em",
  },
  border: {
    borderTop: "solid 1px #3D588F",
    alignSelf: "center",
    width: "100%",
  },
  externalLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    paddingTop: "2em",
    paddingRight: "3em",
  },
  identity: {
    margin: "2em 2em 2em 0",
    width: "250px",
    height: "fit-content",
    color: "#253D6D",
    lineHeight: "1.35em",
  },
  links: {
    listStyle: "none",
    paddingLeft: 0,
    lineHeight: "2.5em",
  },
  hyperlink: {
    textDecoration: "none",
    cursor: "pointer",
  },
  leftContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1em",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
  },
  listBreak: {
    paddingBottom: "0.5em",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
  },
  marker: {
    paddingRight: "0.75em",
  },
  typography: {
    fontFamily: "Source Sans Pro",
    fontWeight: 700,
    fontSize: "x-large",
  },
};

const CCIdentity = () => {
  const color = "navy";
  const text =
    "SILVIA breathes life into virtual characters and voice interfaces by converging a breakthrough technology in NLP and A.I.";

  return (
    <div style={styles.identity}>
      <CCTextIcon color={color} />
      <p>{text}</p>
    </div>
  );
};

const Contact = () => {
  const emailAddress = "info@cognitivecode.com";
  const address = "80 Red Schoolhouse Road,\nSpring Valley, NY 10977";

  return (
    <div style={styles.contactContainer}>
      <Typography style={styles.typography}>Contact Us</Typography>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <div style={styles.marker}>
            <EmailIcon />
          </div>
          {emailAddress}
        </li>
        <div style={styles.listBreak} />
        <li style={styles.listItem}>
          <div style={styles.marker}>
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
      <ul style={styles.links}>
        {menuLinks.map((page) => {
          return (
            <li style={styles.listItem} key={page.name}>
              <a href={page.link} style={styles.hyperlink}>
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul style={styles.links}>
        {externalLinks.map((page) => {
          return (
            <li style={styles.listItem} key={page.name}>
              <a href={page.link} style={styles.hyperlink}>
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
    <div style={styles.parentContainer}>
      <div style={styles.border} />
      <div style={styles.childContainer}>
        <div style={styles.leftContainer}>
          <CCIdentity />
          <Contact />
        </div>
        <div style={styles.linksContainer}>
          <FooterLinks />
        </div>
      </div>
    </div>
  );
};
