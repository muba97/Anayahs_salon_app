import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfileInfo from '../Components/ProfileInfo';
import ChangePass from '../Components/ChangePass';

const userInfo = {
  firstName: 'Mubashir',
  lastName: 'Khan',
  email: 'muba@khan.com',
  birthDay: '01/01/1980',
  phoneNumber: '832-111-8795',
};

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="profilePage">
      <Grid container justify="center" alignItems="center">
        <ProfileInfo userInfo={userInfo} />
      </Grid>
      <br />
      <Grid container justify="center" alignItems="center">
        <ChangePass />
      </Grid>
    </div>
  );
};

export default ProfilePage;
