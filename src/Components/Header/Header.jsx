import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import FeedbackRoundedIcon from "@material-ui/icons/FeedbackRounded";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function Header() {
  const classes = useStyles();
  const [openDrawer, setopenDrawer] = useState(false);

  const handleDrawer = (command) => {
    setopenDrawer(command);
  };

  const list = () => (
    <div
      className={classes.list}
      onClick={() => {
        handleDrawer(true);
      }}
    >
      <List>
        {["Login", "Create Your Account"].map((text, index) => (
          <RouteLink
            to={index % 2 !== 0 ? `/signup` : `/signin`}
            style={{ color: "inherit" }}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 !== 0 ? (
                  <PersonAddRoundedIcon />
                ) : (
                  <AccountCircleRoundedIcon />
                )}
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          </RouteLink>
        ))}
      </List>
      <Divider />
      <List>
        {["Report Your Issue", "Suggestion"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <ReportProblemRoundedIcon />
              ) : (
                <FeedbackRoundedIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <MenuRoundedIcon
            className={classes.icon}
            onClick={() => {
              handleDrawer(true);
            }}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Daily Blog Times
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={"left"}
        open={openDrawer}
        onClick={() => {
          handleDrawer(false);
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}

export default Header;
