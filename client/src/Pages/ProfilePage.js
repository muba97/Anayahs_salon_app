import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfileInfo from '../Components/ProfileInfo';
import ChangePass from '../Components/ChangePass';
import Loading from '../Components/Loading';
import FetchError from '../Components/FetchError';
import { USER_INFO } from '../GQLqueries/user';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
  loading: {
    marginTop: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const ProfilePage = ({ id }) => {
  const { loading, error, data } = useQuery(USER_INFO, {
    variables: { id },
  });
  const classes = useStyles();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <FetchError error={error} />;
  }
  return (
    <div className={classes.root} data-testid="profilePage">
      <Grid container justify="center" alignItems="center">
        <ProfileInfo userInfo={data.user} />
      </Grid>
      <br />
      <Grid container justify="center" alignItems="center">
        <ChangePass />
      </Grid>
    </div>
  );
};

ProfilePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProfilePage;
