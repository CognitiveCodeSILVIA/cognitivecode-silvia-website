import * as React from "react";
import { Footer, HeroBanner, NavBar } from "../../organisms";

const styles = {
  heroContainer: {
    fontFamily: "inherit",
    display: "flex",
    justifyContent: "center",
  },
};

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      <HeroBanner />
    </div>
  );
};

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Footer />
    </>
  );
};
