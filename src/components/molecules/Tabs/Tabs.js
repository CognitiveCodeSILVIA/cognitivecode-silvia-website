import * as React from "react";
import { StyledTab } from "../../atoms";
import { Tabs } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTabs = withStyles({
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
          return <StyledTab key={element} label={element} />;
        })}
      </StyledTabs>
    </>
  );
};
