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

const Register = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confimPassword: "",
  });
  const { name, email, password, phone, confimPassword } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({
      ...values,
      name: "",
      email: "",
      password: "",
      phone: "",
      confimPassword: "",
    });
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
            <Typography variant="h4">Register Page</Typography>
          </Box>
          <form noValidate>
            <Box mx={2}>
              <Grid container justifyContent="center" spacing={2} mb={3}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    value={name}
                    color="warning"
                    name="name"
                    variant="outlined"
                    fullWidth
                    id="name"
                    label="Name"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={3}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="email"
                    value={email}
                    color="warning"
                    name="email"
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email Address"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={3}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="phone"
                    value={phone}
                    color="warning"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    id="phone"
                    label="Phone"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mb={3}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="password"
                    value={password}
                    color="warning"
                    name="password"
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="password"
                    onChange={handleChange}
                    autoFocus
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="confimPassword"
                    color="warning"
                    value={confimPassword}
                    name="confimPassword"
                    variant="outlined"
                    fullWidth
                    id="confimPassword"
                    label="confimPassword"
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
                Creat Account
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
