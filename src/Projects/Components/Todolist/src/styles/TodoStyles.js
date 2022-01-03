import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  Todo: {
    width: "100%",
    // height: "3.5rem",
    display: "flex",
    // alignItems: "center",
    alignItems: "center",
    textAlign: "left",
    justifyContent: "space-between",

    paddingLeft: "0.5rem",
    color: "#000",
    fontSize: "2rem",
    //lineHeight: "1.5rem",
    overflowX: "hidden",

    transition: "all 0.3s ease",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.03)",
      cursor: "pointer",
    },
    "&:hover div": {
      opacity: "1",
    },
  },
  icons: {
    display: "inline-flex",
    alignItems: "right",
    float: "right",
    transition: "all 0.3s",
    opacity: "0",
  },
});
