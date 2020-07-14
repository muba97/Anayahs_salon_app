import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Services from '../Components/service';

const serviceInfo = [
  {
    labels: 'Threading',
    microServices: [
      {
        id: 1,
        title: 'Eyebrows',
        time: '15',
        price: '10',
        description: 'you get yours eyebrows threading dun dun DUUUUN',
      },
      {
        id: 2,
        title: 'Chin',
        time: '15',
        price: '7',
        description: 'you get yours chin threading dun dun DUUUUN',
      },
    ],
  },
];

const useStyles = makeStyles({
  root: {
    marginTop: 40,
  },
});
console.log(serviceInfo.labels);
const ServicePage = () => {
  const classes = useStyles();
  return (
    <div>
      <div data-testid="services" className={classes.root}>
        <Services label={serviceInfo[0].labels} items={serviceInfo[0].microServices} />
      </div>
    </div>
  );
};

export default ServicePage;
