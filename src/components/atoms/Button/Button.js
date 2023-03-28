import * as React from "react";
import { Button, IconButton, SvgIcon } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const arrowStyles = {
  color: "#FFFFFF",
};

export const ButtonOutlined = withStyles(() => ({
  root: {
    minWidth: "fit-content",
    textTransform: "none",
    fontFamily: "inherit",
    fontWeight: 400,
    padding: "0.5em 1.5em",
    backgroundColor: "#FFFFFF 0",
    color: "#FFFFFF",
    border: "2px solid #4FCCCD",
    borderRadius: "13px",
    "&:hover": {
      backgroundColor: "#97FFFF",
      color: "#000000",
      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
      border: "2px solid #97FFFF",
    },
  },
}))(Button);

export const ButtonPrimary = withStyles(() => ({
  root: {
    minWidth: "fit-content",
    textTransform: "none",
    fontFamily: "inherit",
    fontWeight: 400,
    padding: "0.5em 1.5em",
    backgroundColor: "#06D9D9",
    color: "#000000",
    borderRadius: "13px",
    "&:hover": {
      backgroundColor: "#97FFFF",
      color: "#000000",
      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
    },
  },
}))(Button);

const CustomIconButton = withStyles(() => ({
  root: {
    backgroundColor: "#06D9D9",
    "&:hover": {
      backgroundColor: "#97FFFF",
      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))",
    },
  },
}))(IconButton);

export const LeftArrowButton = () => {
  return (
    <CustomIconButton>
      <SvgIcon style={arrowStyles} component={ArrowBack} />
    </CustomIconButton>
  );
};

export const RightArrowButton = () => {
  return (
    <CustomIconButton>
      <SvgIcon style={arrowStyles} component={ArrowForward} />
    </CustomIconButton>
  );
};
