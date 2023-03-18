import * as React from "react";
import { SolutionsPage as Solutions } from "../components/templates";

const pageStyles = {
  padding: "0 96px",
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const SolutionsPage = () => {
  return (
    <main style={pageStyles}>
      <Solutions />
    </main>
  );
};

export default SolutionsPage;

export const Head = () => <title>Solutions Page</title>;
