import { makeStyles } from "@material-ui/core";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: "#fef6e9",
    color: "black",
    borderRadius: "20px",
  },
});

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({ ...values, email: "", password: "" });
  };

  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid
          item
          md={4}
          xs={12}
          style={{ border: "2px solid #ed6c02" }}
          className={classes.headingColor}
        >
          <Box textAlign="center" p={2} mb={2} mx={2}>
            <Typography variant="h4">Login Page</Typography>
          </Box>
          <form noValidate>
            <Box mx={2}>
              <Grid container justifyContent="center" spacing={2} mb={3}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="email"
                    value={values.email}
                    color="warning"
                    name="email"
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="password"
                    color="warning"
                    value={values.password}
                    name="password"
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
            </Box>
            <Box m={3}>
              <Button
                type="submit"
                variant="outlined"
                color="warning"
                onClick={handleClick}
              >
                Login
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
