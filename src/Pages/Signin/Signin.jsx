import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";
import { Link as RouteLink, Redirect, useHistory } from "react-router-dom";
import { Authenticate, userSignin } from "../../Server/APIServerCalls";
import { connect } from "react-redux";
import { setCurrentUser } from "../../Redux/userReducer/userReducerActions";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();
  let history = useHistory();
  const [formInput, setformInput] = React.useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = React.useState(false);

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignin = async () => {
    setLoader(true);
    const userDetails = {
      email: formInput.email,
      password: formInput.password,
    };
    try {
      const response = await userSignin(userDetails);
      if (!response.type) alert(`${response.Message}`);
      else {
        Authenticate({ user: response.user, token: response.token }, () => {
          props.setCurrentUser({ user: response.user, token: response.token })
          history.push("/");
        });
      }
    } catch (error) {
      alert(`Server down.`);
    }
  };
  return (
    !props.userReducer.currentUser ?
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formInput.email}
            onChange={(e) => {
              handleFormInput(e);
            }}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formInput.passowrd}
            onChange={(e) => {
              handleFormInput(e);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body1">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body1">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <RouteLink to={`/`}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              className={classes.submit}
              startIcon={<KeyboardBackspaceRoundedIcon />}
            >
              Go Back
            </Button>
          </RouteLink>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    :
    <Redirect to={`/`}/>
  );
}

var mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

var actions = {
  setCurrentUser,
};
export default connect(mapStateToProps, actions)(SignIn);
