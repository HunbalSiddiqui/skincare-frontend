import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AccessAlarm,
  ThreeDRotation,
  MenuOutlined,
  CloseRounded,
  ChevronLeft,
} from "@material-ui/icons";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DAE0E2",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "2rem 1rem",
  },
  hamIcon: {
    cursor: "pointer",
    position: "sticky",
    top: "2rem"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "2rem 1rem",
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    cursor: "pointer",
  },
  closeIcon: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-end",
  },
}));

function BaseComponentLeftNav() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [open, setOpen] = React.useState(false);

  const customToggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <MenuOutlined
        style={{ color: "#4C4B4B" }}
        fontSize="large"
        className={classes.hamIcon}
        onClick={customToggleDrawer}
      />
      <Drawer
        anchor="left"
        open={open}
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.drawerHeader} onClick={customToggleDrawer}>
          <ChevronLeft style={{ color: "#4C4B4B" }} fontSize="large" />
        </div>

        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default BaseComponentLeftNav;
