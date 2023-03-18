import * as React from "react";
import { TechnologyPage as Technology } from "../components/templates";

const pageStyles = {
  padding: "0 96px",
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const TechnologyPage = () => {
  return (
    <main style={pageStyles}>
      <Technology />
    </main>
  );
};

export default TechnologyPage;

export const Head = () => <title>Technology Page</title>;
