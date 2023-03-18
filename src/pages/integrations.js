import * as React from "react";
import { IntegrationsPage as Integrations } from "../components/templates";

const pageStyles = {
  padding: 96,
  fontFamily: "Ubuntu",
  fontStyle: "normal",
};

const IntegrationsPage = () => {
  return (
    <main style={pageStyles}>
      <Integrations />
    </main>
  );
};

export default IntegrationsPage;

export const Head = () => <title>Integrations Page</title>;
