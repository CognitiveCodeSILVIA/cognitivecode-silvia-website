import * as React from "react";
import { Typography } from "@material-ui/core";
import { siteMetadata } from "../../../../gatsby-config";
import { ButtonPrimary } from "../../atoms";

const styles = {
  container: {
    padding: "5em 0",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "700px",
    color: "#FFFFFF",
    margin: "9em 0",
  },
  header: {
    fontWeight: 700,
    fontFamily: "inherit",
  },
  subtitle: {
    fontWeight: 300,
    fontFamily: "inherit",
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
