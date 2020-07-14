import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Services from '../Components/service';

const serviceInfo = {
  labels: 'Threading',
  microServices: 'eyebrows',
  time: 15,
  price: 10,
};

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});

const ServicePage = () => {
  const classes = useStyles();
  return (
    <div>
      <div data-testid="services" className={classes.root}>
        <Services  />
      </div>
    </div>
  );
};

export default ServicePage;
