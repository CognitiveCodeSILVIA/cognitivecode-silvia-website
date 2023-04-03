import * as React from "react";
import {
  Footer,
  HeroBanner,
  HomeAbout,
  NavBar,
  NewFrontier,
} from "../../organisms";
import TopographPng from "../../../assets/topograph.png";

const styles = {
  homeContainer: {
    background: `linear-gradient(179.25deg, #041233 7.2%, #1C3B75 49.26%)`,
    position: "relative",
  },
  heroContainer: {
    fontFamily: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  bannerContainer: {
    zIndex: 2,
    display: "grid",
    justifyItems: "center",
  },
  navbar: {
    position: "relative",
    padding: "0 96px",
    zIndex: 2,
  },
  footerContainer: {
    background: "#E7EFFE",
  },
  image: {
    position: "absolute",
    zIndex: 1,
    top: "-50em",
    opacity: "0.5",
  },
};

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.bannerContainer}>
        <HeroBanner />
        <HomeAbout />
      </div>
      <img style={styles.image} src={TopographPng} alt="topograph" />
    </div>
  );
};

export const HomePage = () => {
  return (
    <>
      <div style={styles.homeContainer}>
        <div style={styles.navbar}>
          <NavBar />
        </div>
        <Hero />
        <NewFrontier />
      </div>
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};
