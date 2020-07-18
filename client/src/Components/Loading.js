import React from 'react';
import { makeStyles } from '@material-ui/core';
import loading from '../loading.svg';

const useStyle = makeStyles({
  root: {
    marginTop: 40,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  loading: {
    height: '5em',
  },
});

const Loading = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <img className={classes.loading} src={loading} alt="loading.." />
    </div>
  );
};

export default Loading;
