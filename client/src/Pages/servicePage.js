import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Services from '../Components/service';

const serviceInfo = {
  serviceLabels: ['threading', 'facial'],
  items: [
    {
      id: 1,
      title: 'Eyebrows',
      time: '15',
      price: '10',
      description: 'you get yours eyebrows threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      id: 2,
      title: 'Chin',
      time: '15',
      price: '7',
      description: 'you get yours chin threading dun dun DUUUUN',
      label: 'threading',
    },
    {
      id: 3,
      title: 'face',
      time: '30',
      price: '25',
      description: 'you get yours facial dun dun DUUUUN',
      label: 'facial',
    },
  ],
};

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
        <Services serviceLabels={serviceInfo.serviceLabels} items={serviceInfo.items} />
      </div>
    </div>
  );
};

export default ServicePage;
