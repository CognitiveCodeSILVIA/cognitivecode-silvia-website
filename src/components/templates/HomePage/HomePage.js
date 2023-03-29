import * as React from "react";
import { Footer, HeroBanner, HomeAbout, NavBar } from "../../organisms";
import TopographPng from "../../../assets/topograph.png";

const styles = {
  homeContainer: {
    background: `url(${TopographPng}) center / cover no-repeat, linear-gradient(179.25deg, #041233 7.2%, #1C3B75 49.26%)`,
  },
  heroContainer: {
    fontFamily: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navbar: {
    padding: "0 96px",
  },
  footerContainer: {
    background: "#E7EFFE",
  },
};

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <HeroBanner />
      <HomeAbout />
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
      </div>
      <div style={styles.footerContainer}>
        <Footer />
      </div>
    </>
  );
};
