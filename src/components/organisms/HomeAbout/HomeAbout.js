import * as React from "react";
import { Typography } from "@material-ui/core";
import { siteMetadata } from "../../../../gatsby-config";
import { ButtonPrimary } from "../../atoms";
import ChatUi from "../../../assets/chat-ui.png";

const styles = {
  parentContainer: {
    display: "flex",
  },
  aboutContainer: {
    color: "#FFFFFF",
    backgroundColor: "rgba(15, 20, 30, 0.7)",
    borderRadius: "270px 0 0 270px",
    padding: "4em 10em",
  },
  chatUiContainer: {
    background: "linear-gradient(180deg, #071230 0%, rgba(7, 18, 48, 0) 92.7%)",
    borderRadius: "44px",
    padding: "3em",
    margin: "3em",
    minWidth: "400px",
    minHeight: "445px",
    position: "relative",
  },
  chatUi: {
    position: "absolute",
    left: "5em",
    display: "block",
    width: "500px",
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

const ChatUI = () => {
  return (
    <div style={styles.chatUiContainer}>
      <img style={styles.chatUi} src={ChatUi} alt="Chat UI" />
    </div>
  );
};

const About = () => {
  var copy = siteMetadata.homePageCopy.about;
  return (
    <div style={styles.aboutContainer}>
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

export const HomeAbout = () => {
  return (
    <div style={styles.parentContainer}>
      <ChatUI />
      <About />
    </div>
  );
};
