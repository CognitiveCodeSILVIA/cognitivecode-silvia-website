import * as React from "react";
import { HomePage as Home } from "../components/templates";
import { Link } from "gatsby";

const pageStyles = {};
const headingStyles = {};

const paragraphStyles = {};
// const codeStyles = {};

const HomePage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>HomePage</h1>
      <p style={paragraphStyles}>This is Silvia</p>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default HomePage;

export const Head = () => <title>Home Page</title>;
