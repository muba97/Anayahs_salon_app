import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Register from '../Components/Register';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Register />
      </Grid>
    </div>
  );
};

export default RegisterPage;
