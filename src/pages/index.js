import * as React from "react";
import "@fontsource/ubuntu";
import { HomePage } from "../components/templates";

const pageStyles = {
  padding: "0 96px",
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <HomePage />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
