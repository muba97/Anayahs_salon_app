import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NewService from '../Components/NewService';

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

const NewServicePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} data-testid="registerPage">
      <NewService />
    </div>
  );
};

export default NewServicePage;
