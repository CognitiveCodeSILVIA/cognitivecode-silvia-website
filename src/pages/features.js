import * as React from "react";
import { FeaturesPage as Features } from "../components/templates";

const pageStyles = {
  padding: "0 96px",
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const FeaturesPage = () => {
  return (
    <main style={pageStyles}>
      <Features />
    </main>
  );
};

export default FeaturesPage;

export const Head = () => <title>Features Page</title>;
