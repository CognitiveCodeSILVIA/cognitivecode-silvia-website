import * as React from "react";
import { Tabs, Tab, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTab = withStyles(() => ({
  root: {
    fontFamily: "inherit",
    textTransform: "none",
    color: "#FFFFFF",
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 30,
      width: "100%",
      backgroundColor: "#FFFFFF",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const CustomTabs = (props) => {
  const [value, setValue] = React.useState(0);
  const navItems = props.navItems;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs value={value} onChange={handleChange}>
        {navItems.map((element) => {
          return <StyledTab label={element} />;
        })}
      </StyledTabs>
    </>
  );
};
