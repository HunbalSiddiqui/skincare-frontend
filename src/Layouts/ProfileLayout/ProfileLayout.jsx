import { Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ProfileLayout() {
  const classes = useStyles();
  return (
    <Grid container>
      <Hidden only={"xs"}>
        <Grid item sm={2}>
          <Paper className={classes.paper}>xs=0 sm=4</Paper>
        </Grid>
      </Hidden>
      <Hidden smUp={true}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={10}>
        <Paper className={classes.paper}>xs=12 sm=8</Paper>
      </Grid>
    </Grid>
  );
}

export default ProfileLayout;
