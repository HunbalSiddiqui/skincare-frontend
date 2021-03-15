import { Grid, Hidden, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import ProfileNavButton from "../../Components/ProfileNavButton/ProfileNavButton";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SettingsApplicationsOutlinedIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import ProfileNavTab from "../../Components/ProfileNavTab/ProfileNavTab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  verticalNav: {
    boxSizing: "border-box",
    padding: "1rem 1rem",
  },
  mobileNav: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function ProfileLayout() {
  const classes = useStyles();
  return (
    <Grid container>
      <Hidden only={"xs"}>
        <Grid item sm={4} md={2} className={classes.verticalNav}>
          {[
            {
              bgcolor: "#25CCF7",
              color: "white",
              icon: <PersonOutlinedIcon />,
              label: "View Profile",
              full: true
            },
            {
              bgcolor: "#192A56",
              color: "white",
              icon: <SettingsApplicationsOutlinedIcon />,
              label: "Profile Setting",
              full: true
            },
            {
              bgcolor: "#25CCF7",
              color: "white",
              icon: <CheckBoxOutlineBlankOutlinedIcon />,
              label: "Your Blogs",
              full: true
            },
            {
              bgcolor: "#192A56",
              color: "white",
              icon: <FavoriteBorderOutlinedIcon />,
              label: "Manage Blogs",
              full: true
            },
          ].map((btnDet,index) => {
            return (
              <ProfileNavButton
                bgcolor={`${btnDet.bgcolor}`}
                color={`${btnDet.color}`}
                icon={btnDet.icon}
                label={`${btnDet.label}`}
                full={btnDet.full}
                key={index}
              />
            );
          })}
        </Grid>
      </Hidden>
      <Hidden smUp={true}>
        <Grid item xs={12} className={classes.mobileNav}>
          <ProfileNavTab/>
        </Grid>
      </Hidden>
      
      <Grid item xs={12} sm={8} md={10}>
        <Paper className={classes.paper}>xs=12 sm=8</Paper>
      </Grid>
    </Grid>
  );
}
// first hidden grid is for desktop
// second hidden grid is for mobile

export default ProfileLayout;
