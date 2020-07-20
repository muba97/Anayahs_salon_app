import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 40,
  },
});

const NewServicePage = () => {
  const classes = useStyles();

  return (
    <div data-testid="newServicePage">
      {serviceInfo.serviceLabels.map((labels) => (
        <div key={labels.service} data-testid="labels" className={classes.root}>
          <Services />
        </div>
      ))}
    </div>
  );
};
