import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    left: "50vw",
    bottom:"50vh",
    transform: "translateX(-50%)",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Loader() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
