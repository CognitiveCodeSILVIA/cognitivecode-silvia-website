import * as React from "react";
import { Typography } from "@material-ui/core";
import { siteMetadata } from "../../../../gatsby-config";
import { ButtonPrimary } from "../../atoms";

const styles = {
  container: {
    color: "#FFFFFF",
    backgroundColor: "rgba(15, 20, 30, 0.7)",
    borderRadius: "270px 0 0 270px",
    padding: "4em 4em 4em 10em",
  },
  header: {
    fontWeight: 700,
    fontFamily: "inherit",
  },
  paragraph: {
    fontWeight: 300,
    fontFamily: "inherit",
    margin: "2em 0",
  },
};

const About = () => {};

export const HomeAbout = () => {
  var copy = siteMetadata.homePageCopy.about;
  return (
    <div style={styles.container}>
      <Typography style={styles.header} variant="h4" paragraph={true}>
        {copy.header}
      </Typography>
      <Typography style={styles.paragraph} variant="subtitle1" paragraph={true}>
        {copy.paragraph}
      </Typography>
      <ButtonPrimary>Learn More</ButtonPrimary>
    </div>
  );
};
