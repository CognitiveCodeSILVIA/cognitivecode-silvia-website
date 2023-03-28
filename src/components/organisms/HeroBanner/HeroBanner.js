import { Typography } from "@material-ui/core";
import * as React from "react";
import { siteMetadata } from "../../../../gatsby-config";
import { ButtonPrimary } from "../../atoms";

const styles = {
  container: {
    padding: "5em 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "700px",
  },
  header: {
    fontWeight: 700,
    fontFamily: "inherit",
  },
  subtitle: {
    width: "60%",
    paddingLeft: "0.5em",
  },
  buttonContainer: {
    margin: "1em 0",
    width: "max-content",
  },
};

export const HeroBanner = () => {
  var copy = siteMetadata.homePageCopy.hero;
  var header = copy.header;
  var paragraph = copy.paragraph;

  return (
    <div style={styles.container}>
      <Typography style={styles.header} variant="h1" paragraph={true}>
        {header}
      </Typography>
      <Typography style={styles.subtitle} variant="subtitle1" paragraph={true}>
        {paragraph}
      </Typography>
      <div style={styles.buttonContainer}>
        <ButtonPrimary>Learn More</ButtonPrimary>
      </div>
    </div>
  );
};
