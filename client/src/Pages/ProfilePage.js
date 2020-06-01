import React from 'react';
import ProfileInfo from '../Components/ProfileInfo';

const userInfo = {
  firstName: 'Mubashir',
  lastName: 'Khan',
  email: 'muba@khan.com',
  birthDay: '01/01/1980',
  phoneNumber: '832-111-8795',
};

const ProfilePage = () => {
  return (
    <div data-testid="profile-page">
      <h1>Profile Page</h1>
      <ProfileInfo userInfo={userInfo} />
    </div>
  );
};

export default ProfilePage;
