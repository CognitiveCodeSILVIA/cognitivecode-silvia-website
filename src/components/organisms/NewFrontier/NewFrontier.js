import * as React from "react";
import { Typography } from "@material-ui/core";
import { siteMetadata } from "../../../../gatsby-config";
import { ButtonPrimary, LeftArrowButton } from "../../atoms";

const styles = {
  parentContainer: {
    padding: "10em 0",
    position: "relative",
  },
  aboutContainer: {
    color: "#FFFFFF",
    backgroundColor: "rgba(15, 20, 30, 0.7)",
    borderRadius: "0 270px 270px 0",
    padding: "4em 10em 4em 5em",
    width: "min-content",
  },
  header: {
    fontWeight: 700,
    fontFamily: "inherit",
    width: "300px",
  },
  paragraph: {
    fontWeight: 300,
    fontFamily: "inherit",
    margin: "2em 0",
    width: "400px",
  },
  navButton: {
    position: "absolute",
    bottom: "23em",
    left: "38em",
  },
};

const About = () => {
  var copy = siteMetadata.homePageCopy.newFrontier;
  return (
    <div style={styles.aboutContainer}>
      <Typography style={styles.header} variant="h2" paragraph={true}>
        {copy.header}
      </Typography>
      <Typography style={styles.paragraph} variant="subtitle1" paragraph={true}>
        {copy.paragraph}
      </Typography>
      <ButtonPrimary>Learn More</ButtonPrimary>
    </div>
  );
};

export const NewFrontier = () => {
  return (
    <div style={styles.parentContainer}>
      <About />
      <div style={styles.navButton}>
        <LeftArrowButton size="large" />
      </div>
    </div>
  );
};