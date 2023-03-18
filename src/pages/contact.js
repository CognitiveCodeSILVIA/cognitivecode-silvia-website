import * as React from "react";
import { ContactPage as Contact } from "../components/templates";

const pageStyles = {
  padding: 96,
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const ContactPage = () => {
  return (
    <main style={pageStyles}>
      <Contact />
    </main>
  );
};

export default ContactPage;

export const Head = () => <title>Contact Page</title>;
