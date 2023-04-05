import * as React from "react";
import { Typography } from "@material-ui/core";
const images = require.context("../../../assets/images", true);
const icons = require.context("../../../assets/icons", true);

const styles = {
  parentContainer: {
    position: "relative",
    height: "500px",
    minWidth: "700px",
    margin: "1em",
  },
  childContainer: {
    position: "absolute",
    height: "40%",
    width: "40%",
    top: "3em",
    left: "1em",
  },
  overlayContainer: {
    position: "absolute",
    padding: "2em",
    margin: "2em",
    width: "275px",
    height: "300px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
    filter: "blur(2px)",
    color: "#FFFFFF",
  },
  contentContainer: {
    position: "absolute",
    padding: "2em",
    margin: "2em",
    color: "#FFFFFF",
    width: "250px",
    height: "275px",
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "50px 50px 0 50px",
    backdropFilter: "blur(10px)",
  },
  icon: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    padding: "1.5em",
    border: "solid 1px #4B95DA",
    borderRadius: "5px",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  header: {
    marginTop: "0.5em",
    fontWeight: 700,
    fontFamily: "inherit",
  },
  text: {
    fontFamily: "inherit",
  },
};

export const Card = ({ icon, tag, header, text }) => {
  const imageSource = images(`./${tag}.png`).default;
  const imageAlt = `${tag} image`;
  const iconSource = icons(`./${icon}.png`).default;
  const iconAlt = `${icon} icon`;

  console.log(header);

  return (
    <div style={styles.parentContainer}>
      <img style={styles.image} src={imageSource} alt={imageAlt} />
      <div style={styles.childContainer}>
        <div style={styles.overlayContainer} />
        <div style={styles.contentContainer}>
          <img style={styles.icon} src={iconSource} alt={iconAlt} />
          <Typography style={styles.header} variant="h5" paragraph={true}>
            {header}
          </Typography>
          <Typography style={styles.text} variant="subtitle2">
            {text}
          </Typography>
        </div>
      </div>
    </div>
  );
};
