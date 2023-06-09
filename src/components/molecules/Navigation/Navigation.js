import * as React from "react";
import { Link } from "gatsby";
import { NavItem } from "../../atoms";
import { Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTabs = withStyles({
  root: {
    padding: "0 12px",
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 16,
      width: "100%",
      backgroundColor: "#FFFFFF",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const Navigation = ({ pages }) => {
  const path = window.location.pathname;

  const selectedTab = () => {
    if (path.includes("/technology")) return 1;
    if (path.includes("/features")) return 2;
    if (path.includes("/integrations")) return 3;
    if (path.includes("/solutions")) return 4;
    if (path.includes("/contact")) return 5;
    return 0;
  };

  return (
    <nav>
      <StyledTabs value={selectedTab()}>
        {pages.map((page) => {
          return (
            <Link to={page.link} key={page.link}>
              <NavItem key={page.name} label={page.name} />
            </Link>
          );
        })}
      </StyledTabs>
    </nav>
  );
};
