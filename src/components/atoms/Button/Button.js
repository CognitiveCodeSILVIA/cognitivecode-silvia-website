import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
      backgroundColor: "#FFFFFF",
      color: "#043A74",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
  },
}))(Button);
