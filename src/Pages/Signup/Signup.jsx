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
import { Link as RouteLink, useHistory } from "react-router-dom";
import { userSignup } from "../../Server/APIServerCalls";
import Loader from "../../Components/Loader/Loader";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  const [formInput, setformInput] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loader, setLoader] = React.useState(false)
  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  fetch(`https://jsonplaceholder.typicode.com/users`)
  .then((response)=>{
    console.log(response)
  })
  .catch((err)=>{
    console.log(err)
  })
  const handleSignup = async () => {
    setLoader(true)
    const userDetails = {
      email: formInput.email,
      name: formInput.name + " " + formInput.lastName,
      password: formInput.password,
      phone: formInput.phone,
    };
    try {
      const response = await userSignup(userDetails);
      if (!response.type) alert(`${response.Message}`);
      else history.push("/signin");
    } catch (error) {
      alert(`${error}`)
    }
    setLoader(false)
  };

  return (
    <Container component="main" maxWidth="xs">
      {loader ? <Loader /> :  null}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="First Name"
                name="name"
                onChange={(e) => {
                  handleFormInput(e);
                }}
                value={formInput.name}
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={(e) => {
                  handleFormInput(e);
                }}
                value={formInput.lastName}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => {
                  handleFormInput(e);
                }}
                value={formInput.email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => {
                  handleFormInput(e);
                }}
                value={formInput.password}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Contact"
                name="phone"
                type="number"
                onChange={(e) => {
                  handleFormInput(e);
                }}
                value={formInput.phone}
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body">
                Already have an account? Sign in
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
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
