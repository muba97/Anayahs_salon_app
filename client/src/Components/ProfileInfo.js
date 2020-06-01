import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfo = ({ userInfo }) => {
  const { firstName, lastName, email, birthDay, phoneNumber } = userInfo;
  return (
    <div>
      <h4>{firstName}</h4>
      <h4>{lastName}</h4>
      <h4>{email}</h4>
      <h4>{birthDay}</h4>
      <h4>{phoneNumber}</h4>
    </div>
  );
};

ProfileInfo.propTypes = {
  userInfo: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    birthDay: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
};

export default ProfileInfo;
