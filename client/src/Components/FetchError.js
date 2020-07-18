import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const FetchError = ({ error }) => {
  const { message } = error;
  const classes = useStyles();
  const errorMessage = `Error: ${message}`;
  return (
    <div className={classes.root}>
      <h2>{errorMessage}</h2>
    </div>
  );
};

FetchError.propTypes = {
  error: PropTypes.shape({
    graphQLErrors: PropTypes.array,
    networkError: PropTypes.object,
    message: PropTypes.string,
  }).isRequired,
};

export default FetchError;
