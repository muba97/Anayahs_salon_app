import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginInfo from '../Components/LoginInfo';

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
    <div>
      <div className={classes.root}>
        <img alt="logo" src="/Anayah+Logo+transparent.png" className={classes.logo} />
      </div>
      <div className={classes.root}>
        <LoginInfo />
      </div>
    </div>
  );
};

export default LoginPage;
