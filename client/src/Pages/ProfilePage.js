import React from 'react';
import ProfileInfo from '../Components/ProfileInfo';
import { makeStyles } from '@material-ui/core/styles';

const userInfo = {
  firstName: 'Mubashir',
  lastName: 'Khan',
  email: 'muba@khan.com',
  birthDay: '01/01/1980',
  phoneNumber: '8321118795',
};

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const ProfilePage = () => {
  return (
    <div>
      <div data-testid="profile-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ProfileInfo userInfo={userInfo} />
      </div>
    </div>
  );
};

export default ProfilePage;
