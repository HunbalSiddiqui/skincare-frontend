import { Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProfileLayout from "../../Layouts/ProfileLayout/ProfileLayout";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    padding: "2rem 2rem",
  },
  textFlies: {
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 1)", // (default alpha is 0.38)
    },
  },
}));

function ViewProfile(props) {
  const { userDetails } = props;
  const classes = useStyles();
  const [userDetailsLocal, setuserDetailsLocal] = useState(null);
  useEffect(() => {
    setuserDetailsLocal(userDetails);
    return () => {};
  }, [userDetails]);
  return (
    <ProfileLayout>
      {userDetailsLocal ? (
        <Grid container spacing={2} className={classes.root}>
          {console.log(userDetailsLocal.phone)}
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="fname"
              disabled
              value={userDetailsLocal.name}
              className={classes.textFlies}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userDetailsLocal.email}
              disabled
              className={classes.textFlies}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phone"
              label="Contact"
              name="phone"
              autoComplete="phone"
              value={userDetailsLocal.phone}
              disabled
              className={classes.textFlies}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="role"
              label="role"
              name="role"
              autoComplete="role"
              value={userDetailsLocal.role}
              disabled
              className={classes.textFlies}
            />
          </Grid>
        </Grid>
      ) : null}
    </ProfileLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.userReducer.userDetails,
  };
};

export default connect(mapStateToProps)(ViewProfile);
