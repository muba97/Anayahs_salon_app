import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Register from '../Components/Register';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});

const RegisterPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Register />
    </div>
  );
};

export default RegisterPage;
