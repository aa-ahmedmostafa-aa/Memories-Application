import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundCcolor: "#efe7e7"
  },
  heading: {
    color: "rgb(24 50 60)",

    fontFamily: "Poppins, sans-serif",
  },
  image: {
    marginLeft: "15px",
    borderRadius: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
