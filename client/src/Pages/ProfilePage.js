import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileInfo from '../Components/ProfileInfo';

const userInfo = {
  firstName: 'Mubashir',
  lastName: 'Khan',
  email: 'muba@khan.com',
  birthDay: '01/01/1980',
  phoneNumber: '832-111-8795',
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
  },
});

const ProfilePage = () => {
  const classes = useStyles();
  return (
    <div>
      <div data-testid="profile-page" className={classes.root}>
        <ProfileInfo userInfo={userInfo} />
      </div>
    </div>
  );
};

export default ProfilePage;
