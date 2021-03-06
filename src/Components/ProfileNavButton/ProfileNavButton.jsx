import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  button: (props) => ({
    marginBottom: theme.spacing(2),
    backgroundColor: `${props.bgcolor}`,
    color: `${props.color}`,
    justifyContent:"flex-start",
    boxSizing: "border-box",
}),
}));

export default function ProfileNavButton(props) {
  const classes = useStyles(props);
  const {label, icon, full, subroute} = props
  return (
    <Link to={`/profile/${subroute}`}>
      <Button
        variant="contained"
        className={classes.button}
        startIcon={icon}
        fullWidth={full ? true : null}
      >
        {label}
      </Button>
    </Link>
  );
}
