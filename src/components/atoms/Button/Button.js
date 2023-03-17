import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const ButtonOutlined = withStyles(() => ({
  root: {
    textTransform: "none",
    fontWeight: 700,
    padding: "0.5em 1em",
    backgroundColor: "#FFFFFF",
    color: "#043A74",
    border: "2px solid #043A74",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#043A74",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    },
  },
}))(Button);
