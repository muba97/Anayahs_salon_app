import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Login from '../Components/Login';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
  logo: {
    height: 150,
  },
});

const LoginPage = () => {
  const classes = useStyles();
  return (
    <div data-testid="loginPage">
      <div className={classes.root}>
        <img alt="logo" src="/Anayah+Logo+transparent.png" className={classes.logo} />
      </div>
      <Grid container justify="center" alignItems="center">
        {' '}
        <Login />
      </Grid>
    </div>
  );
};

export default LoginPage;
