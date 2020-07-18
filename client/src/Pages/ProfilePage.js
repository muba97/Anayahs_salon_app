import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ProfileInfo from '../Components/ProfileInfo';
import ChangePass from '../Components/ChangePass';
import Loading from '../Components/Loading';
import FetchError from '../Components/FetchError';

const USER_INFO = gql`
  query getUser {
    user(id: "5f0b8d54dd147401c51afd9f") {
      id
      firstName
      lastName
      email
      birthDay
      phoneNumber
    }
  }
`;

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

const ProfilePage = () => {
  const { loading, error, data } = useQuery(USER_INFO);
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

export default ProfilePage;
